"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useFBO } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fluidShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec4 iMouse;
  uniform int iFrame;
  uniform sampler2D iPreviousFrame;
  uniform float uBrushSize;
  uniform float uBrushStrength;
  uniform float uFluidDecay;
  uniform float uTrailLength;
  uniform float uStopDecay;
  varying vec2 vUv;

  float ln(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }

  void main() {
    vec2 U = vUv * iResolution;
    vec2 mousePos = iMouse.xy;
    vec2 mousePrev = iMouse.zw;

    vec4 me = texture2D(iPreviousFrame, vUv);
    float velMagnitude = length(me.xy);

    if (iFrame < 10) {
      me = vec4(0.0);
    } else {
      vec2 offset = me.xy * 0.001;
      vec4 n = texture2D(iPreviousFrame, vUv + vec2(0.0, 1.0) / iResolution);
      vec4 s = texture2D(iPreviousFrame, vUv + vec2(0.0, -1.0) / iResolution);
      vec4 e = texture2D(iPreviousFrame, vUv + vec2(1.0, 0.0) / iResolution);
      vec4 w = texture2D(iPreviousFrame, vUv + vec2(-1.0, 0.0) / iResolution);

      me.xy += (n.z - s.z + e.z - w.z) * 0.25;
      me.xy *= uFluidDecay;
      me.z += (n.x - s.x + e.y - w.y) * 0.25;
      me.z *= uTrailLength;

      float q = ln(U, mousePos, mousePrev);
      vec2 m = mousePos - mousePrev;
      float l = length(m);
      if (l > 0.0) m = min(l, 10.0) * m / l;

      float brushSizeFactor = 1e-4 / uBrushSize;
      float strengthFactor = 0.03 * uBrushStrength;

      float falloff = exp(-brushSizeFactor*q*q*q);
      falloff = pow(falloff, 0.5);

      me.xyw += strengthFactor * falloff * vec3(m, 10.);

      if (velMagnitude < 2.0) {
        float distToCursor = length(U - mousePos);
        float influence = exp(-distToCursor * 0.01);
        float cursorDecay = mix(1.0, uStopDecay, influence);
        me.xy *= cursorDecay;
        me.z *= cursorDecay;
      }
    }

    gl_FragColor = clamp(me, -0.4, 0.4);
  }
`

const displayShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform sampler2D iFluid;
  uniform float uDistortionAmount;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;
  uniform float uColorIntensity;
  uniform float uSoftness;
  varying vec2 vUv;

  void main() {
    vec2 fragCoord = vUv * iResolution;

    vec4 fluid = texture2D(iFluid, vUv);
    vec2 fluidVel = fluid.xy;

    float mr = min(iResolution.x, iResolution.y);
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;

    uv += fluidVel * (0.5 * uDistortionAmount);

    float d = -iTime * 0.5;
    float a = 0.0;
    for (float i = 0.0; i < 8.0; ++i) {
      a += cos(i - d - a * uv.x);
      d += sin(uv.y * i + a);
    }
    d += iTime * 0.5;

    float mixer1 = cos(uv.x * d) * 0.5 + 0.5;
    float mixer2 = cos(uv.y * a) * 0.5 + 0.5;
    float mixer3 = sin(d + a) * 0.5 + 0.5;

    float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);
    mixer1 = mix(mixer1, 0.5, smoothAmount);
    mixer2 = mix(mixer2, 0.5, smoothAmount);
    mixer3 = mix(mixer3, 0.5, smoothAmount);

    vec3 col = mix(uColor1, uColor2, mixer1);
    col = mix(col, uColor3, mixer2);
    col = mix(col, uColor4, mixer3 * 0.4);

    col *= uColorIntensity;

    gl_FragColor = vec4(col, 1.0);
  }
`

const config = {
  brushSize: 25.0,
  brushStrength: 0.5,
  distortionAmount: 2.5,
  fluidDecay: 0.98,
  trailLength: 0.8,
  stopDecay: 0.85,
  color1: "#0a0a1a",
  color2: "#1a0a2e",
  color3: "#0a1a2e",
  color4: "#00d9ff",
  colorIntensity: 1.0,
  softness: 1.0,
  lerpFactor: 0.1,
}

function hexToRgb(hex: string): [number, number, number] {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

function FluidSimulation() {
  const { size, gl, camera } = useThree()
  const fluidMaterial = useRef<THREE.ShaderMaterial>(null)
  const displayMaterial = useRef<THREE.ShaderMaterial>(null)
  const fluidMeshRef = useRef<THREE.Mesh>(null)
  const displayMeshRef = useRef<THREE.Mesh>(null)

  const fluidTarget1 = useFBO(size.width, size.height, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  })

  const fluidTarget2 = useFBO(size.width, size.height, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  })

  const [currentFluidTarget, setCurrentFluidTarget] = useState(fluidTarget1)
  const [previousFluidTarget, setPreviousFluidTarget] = useState(fluidTarget2)
  const [frameCount, setFrameCount] = useState(0)

  const mouse = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const targetMouse = useRef({ x: 0, y: 0 })
  const smoothMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect()
      targetMouse.current.x = e.clientX - rect.left
      targetMouse.current.y = rect.height - (e.clientY - rect.top)
    }

    const handleMouseLeave = () => {}

    gl.domElement.addEventListener("mousemove", handleMouseMove)
    gl.domElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove)
      gl.domElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [gl.domElement])

  useFrame(({ gl, clock }) => {
    const time = clock.getElapsedTime()

    mouse.current.prevX = smoothMouse.current.x
    mouse.current.prevY = smoothMouse.current.y

    smoothMouse.current.x += (targetMouse.current.x - smoothMouse.current.x) * config.lerpFactor
    smoothMouse.current.y += (targetMouse.current.y - smoothMouse.current.y) * config.lerpFactor

    mouse.current.x = smoothMouse.current.x
    mouse.current.y = smoothMouse.current.y

    if (fluidMaterial.current) {
      fluidMaterial.current.uniforms.iTime.value = time
      fluidMaterial.current.uniforms.iFrame.value = frameCount
      fluidMaterial.current.uniforms.iMouse.value.set(
        mouse.current.x,
        mouse.current.y,
        mouse.current.prevX,
        mouse.current.prevY,
      )

      fluidMaterial.current.uniforms.uBrushSize.value = config.brushSize
      fluidMaterial.current.uniforms.uBrushStrength.value = config.brushStrength
      fluidMaterial.current.uniforms.uFluidDecay.value = config.fluidDecay
      fluidMaterial.current.uniforms.uTrailLength.value = config.trailLength
      fluidMaterial.current.uniforms.uStopDecay.value = config.stopDecay
    }

    if (displayMaterial.current) {
      displayMaterial.current.uniforms.iTime.value = time
      displayMaterial.current.uniforms.uDistortionAmount.value = config.distortionAmount
      displayMaterial.current.uniforms.uColorIntensity.value = config.colorIntensity
      displayMaterial.current.uniforms.uSoftness.value = config.softness
      displayMaterial.current.uniforms.uColor1.value.set(...hexToRgb(config.color1))
      displayMaterial.current.uniforms.uColor2.value.set(...hexToRgb(config.color2))
      displayMaterial.current.uniforms.uColor3.value.set(...hexToRgb(config.color3))
      displayMaterial.current.uniforms.uColor4.value.set(...hexToRgb(config.color4))
    }

    if (fluidMaterial.current && fluidMeshRef.current) {
      fluidMaterial.current.uniforms.iPreviousFrame.value = previousFluidTarget.texture
      gl.setRenderTarget(currentFluidTarget)
      gl.render(fluidMeshRef.current, camera)
    }

    if (displayMaterial.current && displayMeshRef.current) {
      displayMaterial.current.uniforms.iFluid.value = currentFluidTarget.texture
      gl.setRenderTarget(null)
      gl.render(displayMeshRef.current, camera)
    }

    const temp = currentFluidTarget
    setCurrentFluidTarget(previousFluidTarget)
    setPreviousFluidTarget(temp)

    setFrameCount((prev) => prev + 1)
  })

  const fluidPlane = useMemo(() => {
    const aspect = size.width / size.height
    return (
      <mesh ref={fluidMeshRef}>
        <planeGeometry args={[2 * aspect, 2]} />
        <shaderMaterial
          ref={fluidMaterial}
          uniforms={{
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(size.width, size.height) },
            iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
            iFrame: { value: 0 },
            iPreviousFrame: { value: null },
            uBrushSize: { value: config.brushSize },
            uBrushStrength: { value: config.brushStrength },
            uFluidDecay: { value: config.fluidDecay },
            uTrailLength: { value: config.trailLength },
            uStopDecay: { value: config.stopDecay },
          }}
          vertexShader={vertexShader}
          fragmentShader={fluidShader}
        />
      </mesh>
    )
  }, [size])

  const displayPlane = useMemo(() => {
    const aspect = size.width / size.height
    return (
      <mesh ref={displayMeshRef}>
        <planeGeometry args={[2 * aspect, 2]} />
        <shaderMaterial
          ref={displayMaterial}
          uniforms={{
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(size.width, size.height) },
            iFluid: { value: null },
            uDistortionAmount: { value: config.distortionAmount },
            uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
            uColor2: { value: new THREE.Vector3(...hexToRgb(config.color2)) },
            uColor3: { value: new THREE.Vector3(...hexToRgb(config.color3)) },
            uColor4: { value: new THREE.Vector3(...hexToRgb(config.color4)) },
            uColorIntensity: { value: config.colorIntensity },
            uSoftness: { value: config.softness },
          }}
          vertexShader={vertexShader}
          fragmentShader={displayShader}
        />
      </mesh>
    )
  }, [size])

  return (
    <>
      {fluidPlane}
      {displayPlane}
    </>
  )
}

export function FluidGradient({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <FluidSimulation />
      </Canvas>
    </div>
  )
}
