import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { profile, education, certifications, highlights } from "@/lib/data"
import { MapPin, GraduationCap, Award, Users, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Mahidhara S",
  description: "Background, education, and certifications of Mahidhara S - ML Engineer and Data Professional.",
}

export default function AboutPage() {
  const highlightIcons = [Award, Users, FileText]

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground mb-6">
                  About Me
                </h1>
                <div className="space-y-4 text-lg font-serif text-muted-foreground leading-relaxed">
                  <p>
                    I am an ML Engineer and Business Analyst based in {profile.location}, focused on building AI-driven
                    solutions that bridge the gap between data science and business outcomes.
                  </p>
                  <p>
                    My journey spans mechanical engineering, production operations, and now machine learning. This
                    diverse background gives me a unique perspective on solving complex problems with data and
                    automation.
                  </p>
                  <p>
                    I specialize in forecasting systems, workflow automation, and analytics dashboards that drive
                    real-world impact. My work is guided by a simple principle: solutions should be measurable,
                    scalable, and actionable.
                  </p>
                </div>

                {/* Location */}
                <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-sans">{profile.location}</span>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl md:text-8xl font-sans font-bold text-primary/20">MS</div>
                      <p className="mt-4 text-sm text-muted-foreground font-sans">[Photo placeholder]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-12">Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = highlightIcons[index]
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-border bg-background p-8 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-sans font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-base font-serif text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-12">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-sans font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-base font-serif text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-12">Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-sans text-foreground">{cert}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground font-serif italic">
              Note: Exact certification names to be provided from resume.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
