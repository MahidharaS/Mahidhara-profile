import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/cards/project-card"

export const metadata: Metadata = {
  title: "Projects | Mahidhara S",
  description: "Featured projects in ML, data analytics, and AI automation by Mahidhara S.",
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground mb-6">
                Projects
              </h1>
              <p className="text-xl font-serif text-muted-foreground leading-relaxed">
                A collection of work spanning ML model development, data analytics, automation systems, and innovative
                prototypes. Each project demonstrates a clear problem-solution-outcome approach.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Featured Project */}
              <div className="md:col-span-7">
                <ProjectCard
                  title={projects[0].title}
                  problem={projects[0].problem}
                  approach={projects[0].approach}
                  outcome={projects[0].outcome}
                  tags={projects[0].tags}
                  className="h-full"
                />
              </div>

              {/* Stacked Projects */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <ProjectCard
                  title={projects[1].title}
                  problem={projects[1].problem}
                  approach={projects[1].approach}
                  outcome={projects[1].outcome}
                  tags={projects[1].tags}
                />
                <ProjectCard
                  title={projects[2].title}
                  problem={projects[2].problem}
                  approach={projects[2].approach}
                  outcome={projects[2].outcome}
                  tags={projects[2].tags}
                />
              </div>

              {/* Full Width Project */}
              <div className="md:col-span-12">
                <ProjectCard
                  title={projects[3].title}
                  problem={projects[3].problem}
                  approach={projects[3].approach}
                  outcome={projects[3].outcome}
                  tags={projects[3].tags}
                />
              </div>
            </div>

            {/* Metrics Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <p className="text-3xl md:text-4xl font-sans font-bold text-primary mb-2">250W</p>
                <p className="text-sm font-serif text-muted-foreground">Energy Generated</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <p className="text-3xl md:text-4xl font-sans font-bold text-primary mb-2">10%+</p>
                <p className="text-sm font-serif text-muted-foreground">Efficiency Gains</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <p className="text-3xl md:text-4xl font-sans font-bold text-accent mb-2">₹5L+</p>
                <p className="text-sm font-serif text-muted-foreground">Sales Closed</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <p className="text-3xl md:text-4xl font-sans font-bold text-accent mb-2">65</p>
                <p className="text-sm font-serif text-muted-foreground">Team Members Led</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
