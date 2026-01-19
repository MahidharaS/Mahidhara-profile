"use client"

import { useRef } from "react"
import Link from "next/link"
import { FluidGradient } from "@/components/ui/fluid-gradient"
import { profile } from "@/lib/data"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
      {/* Fluid Gradient Background */}
      <FluidGradient className="absolute inset-0 -z-10 w-full h-full" />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center min-h-screen pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
            <span className="text-xs font-sans font-medium text-primary">ML Engineer</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-xs font-sans font-medium text-primary">Business Analyst</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-foreground mb-4">
            {profile.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {profile.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-sans font-medium text-primary-foreground hover:bg-primary/90 transition-all group"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-8 py-3 text-base font-sans font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </div>

          {/* Location Indicator */}
          <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Based in {profile.location}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
