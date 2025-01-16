import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block text-[#1DDFEA] font-bold text-xl">AI Spaces</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/courses"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#1DDFEA]"
            >
              Courses
            </Link>
            <Link
              href="/instructor/submit"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#1DDFEA]"
            >
              Teach
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" className="text-muted-foreground hover:text-[#1DDFEA]">
              Sign In
            </Button>
            <Button className="bg-[#1DDFEA] text-black hover:bg-[#1DDFEA]/90">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

