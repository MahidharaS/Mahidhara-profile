import Link from "next/link"
import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-sans font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Mahidhara S
            </Link>
            <p className="mt-2 text-sm text-muted-foreground font-serif">{profile.tagline}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mahidhara S. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
