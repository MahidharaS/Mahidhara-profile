import { whatIDo } from "@/lib/data"
import { TrendingUp, Zap, BarChart3 } from "lucide-react"

const iconMap = {
  TrendingUp,
  Zap,
  BarChart3,
}

export function WhatIDo() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground mb-4">What I Do</h2>
          <p className="text-lg font-serif text-muted-foreground leading-relaxed">
            Combining operational expertise with data science to build systems that drive real business outcomes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatIDo.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-sans font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-base font-serif text-muted-foreground leading-relaxed">{item.description}</p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -right-8 -top-8 h-16 w-16 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
