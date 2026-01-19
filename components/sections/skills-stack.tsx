import { skills } from "@/lib/data"
import { SkillGroup } from "@/components/cards/skill-group"
import { Code2, Brain, BarChart3, Cloud, Wrench } from "lucide-react"

export function SkillsStack() {
  const skillGroups = [
    { title: "Programming & Data", skills: skills.programming, icon: <Code2 className="h-5 w-5" /> },
    { title: "ML & AI", skills: skills.mlAi, icon: <Brain className="h-5 w-5" /> },
    { title: "BI Tools", skills: skills.biTools, icon: <BarChart3 className="h-5 w-5" /> },
    { title: "Platforms & Tools", skills: skills.platforms, icon: <Cloud className="h-5 w-5" /> },
    { title: "Methods", skills: skills.methods, icon: <Wrench className="h-5 w-5" /> },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground mb-4">Skills Stack</h2>
          <p className="text-lg font-serif text-muted-foreground leading-relaxed">
            Technical expertise spanning the full data and AI lifecycle.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} skills={group.skills} icon={group.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
