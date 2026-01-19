"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"
import { Building2, MapPin, Calendar } from "lucide-react"

interface ExperienceCardProps {
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
  tags: string[]
  className?: string
}

export function ExperienceCard({ role, company, period, location, highlights, tags, className }: ExperienceCardProps) {
  return (
    <div className={cn("group relative", className)}>
      <div className="relative h-full rounded-2xl border border-border p-1">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl bg-card p-6">
          {/* Header */}
          <div>
            <h3 className="text-xl font-sans font-semibold tracking-tight text-foreground">{role}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {location}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="flex-1 space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm font-serif text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-sans font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
