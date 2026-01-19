import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { WhatIDo } from "@/components/sections/what-i-do"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ExperienceSnapshot } from "@/components/sections/experience-snapshot"
import { SkillsStack } from "@/components/sections/skills-stack"
import { Highlights } from "@/components/sections/highlights"
import { ContactStrip } from "@/components/sections/contact-strip"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <FeaturedProjects />
        <ExperienceSnapshot />
        <SkillsStack />
        <Highlights />
        <ContactStrip />
      </main>
      <Footer />
    </>
  )
}
