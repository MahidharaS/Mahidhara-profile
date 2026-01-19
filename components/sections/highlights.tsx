import { highlights } from "@/lib/data"
import { Award, Users, FileText } from "lucide-react"

const iconMap = {
  0: Award,
  1: Users,
  2: FileText,
}

export function Highlights() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground mb-4">Highlights</h2>
          <p className="text-lg font-serif text-muted-foreground leading-relaxed">
            Recognition and contributions beyond the day-to-day.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = iconMap[index as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent mb-6">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-sans font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-base font-serif text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
