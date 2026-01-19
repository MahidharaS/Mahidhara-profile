import Link from "next/link"
import { profile } from "@/lib/data"
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"

export function ContactStrip() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12 lg:p-16">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground mb-4">
                {"Let's Work Together"}
              </h2>
              <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                Open to opportunities in ML engineering, data science, and business analytics roles.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-sans font-medium text-primary-foreground hover:bg-primary/90 transition-all group"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href={`mailto:${profile.email}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href={profile.linkedin}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={profile.github}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
