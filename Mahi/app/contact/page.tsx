import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { profile } from "@/lib/data"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Mahidhara S",
  description: "Get in touch with Mahidhara S for collaborations and opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl font-serif text-muted-foreground leading-relaxed">
                Open to opportunities in ML engineering, data science, and business analytics. {"Let's"} discuss how I
                can contribute to your team or project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-8">Contact Information</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <Link
                    href={`mailto:${profile.email}`}
                    className="flex items-start gap-4 rounded-xl border border-border bg-background p-6 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sans font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-base font-serif text-muted-foreground">{profile.email}</p>
                    </div>
                  </Link>

                  {/* Phone */}
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sans font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-base font-serif text-muted-foreground">{profile.phone}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sans font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-base font-serif text-muted-foreground">{profile.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-sans font-semibold text-foreground mb-4">Connect</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href={profile.linkedin}
                      className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link
                      href={profile.github}
                      className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-8">Send a Message</h2>

                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-sans font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-8 py-4 text-base font-sans font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
