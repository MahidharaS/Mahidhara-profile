"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  problem: string
  approach: string
  outcome: string
  tags: string[]
  className?: string
}

export function ProjectCard({ title, problem, approach, outcome, tags, className }: ProjectCardProps) {
  return (
    <div className={cn("group relative", className)}>
      <div className="relative h-full rounded-2xl border border-border p-1">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl bg-card p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-sans font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-sans font-semibold tracking-tight text-foreground text-balance">{title}</h3>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div>
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Problem
              </p>
              <p className="text-sm font-serif text-foreground/90">{problem}</p>
            </div>
            <div>
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Approach
              </p>
              <p className="text-sm font-serif text-foreground/90">{approach}</p>
            </div>
            <div>
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Outcome
              </p>
              <p className="text-sm font-serif text-primary">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
