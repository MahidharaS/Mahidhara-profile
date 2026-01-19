import type React from "react"
import { cn } from "@/lib/utils"

interface SkillGroupProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  className?: string
}

export function SkillGroup({ title, skills, icon, className }: SkillGroupProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
        <h3 className="text-lg font-sans font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-sm font-sans text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
