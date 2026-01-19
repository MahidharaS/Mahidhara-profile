import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { experience, education } from "@/lib/data"
import { ExperienceCard } from "@/components/cards/experience-card"
import { GraduationCap, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience | Mahidhara S",
  description: "Professional journey in ML engineering, business analysis, and operations by Mahidhara S.",
}

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground mb-6">
                Experience
              </h1>
              <p className="text-xl font-serif text-muted-foreground leading-relaxed">
                A journey from mechanical engineering through operations management to ML engineering. Each role has
                shaped my approach to solving complex problems with data.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-12">Work History</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {experience.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  highlights={exp.highlights}
                  tags={exp.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-12">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent flex-shrink-0">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-sans font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-base font-serif text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
