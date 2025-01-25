// Root layout component that wraps all pages
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { SiteHeader } from "./components/site-header"

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] })

// Define metadata for SEO
export const metadata: Metadata = {
  title: "AI Spaces Courses",
  description: "Learn AI with curated courses",
}

// Root layout component that provides common structure and styling
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

