import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Libre_Baskerville, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const _libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahidhara S | ML Engineer & Data Professional",
  description:
    "ML Engineer and Business Analyst building AI-driven solutions for forecasting, automation, and decision systems. Based in Bangalore, India.",
  generator: "v0.app",
  keywords: ["ML Engineer", "Business Analyst", "Data Science", "AI", "Machine Learning", "Bangalore"],
  authors: [{ name: "Mahidhara S" }],
  openGraph: {
    title: "Mahidhara S | ML Engineer & Data Professional",
    description: "Building AI-driven solutions for forecasting, automation, and intelligent decision systems.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
