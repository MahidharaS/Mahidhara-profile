import Link from "next/link"
import { experience } from "@/lib/data"
import { ArrowRight, Building2, Calendar } from "lucide-react"

export function ExperienceSnapshot() {
  const latestExperience = experience.slice(0, 3)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground mb-4">Experience</h2>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed">
              A track record of delivering results across ML, analytics, and operations.
            </p>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="font-sans font-medium">View Full History</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {latestExperience.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-8 border-l border-border last:border-l-transparent last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background" />

              {/* Content */}
              <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-sans font-semibold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Building2 className="h-4 w-4" />
                  {exp.company}
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-serif text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
