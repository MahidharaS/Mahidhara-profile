import Link from "next/link"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/cards/project-card"
import { ArrowRight } from "lucide-react"

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed">
              Selected work demonstrating impact through data-driven solutions.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="font-sans font-medium">View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              problem={project.problem}
              approach={project.approach}
              outcome={project.outcome}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
