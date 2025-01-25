// Courses listing page component
import { Search, Filter, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SpaceBackground } from "../components/space-background"

export default function CoursesPage() {
  return (
    // Page container with space background
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden space-background">
      <SpaceBackground />
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-[#1DDFEA]/10" />
      <div className="absolute inset-0 bg-transparent" />
      
      
      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Page header */}
        <h1 className="text-5xl font-bold mb-4 text-[#1DDFEA]">
          Explore AI Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Discover the perfect AI course to advance your skills and stay ahead in the rapidly evolving world of artificial intelligence
        </p>

        {/* Search and filters section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-[#1DDFEA]"
            />
          </div>
          {/* Category and sort filters */}
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="aiml">AI/ML</SelectItem>
                <SelectItem value="chatgpt">ChatGPT</SelectItem>
                <SelectItem value="nlp">NLP</SelectItem>
                <SelectItem value="cv">Computer Vision</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm" className="bg-card/50 backdrop-blur-sm hover:bg-[#1DDFEA]/10 hover:text-[#1DDFEA] transition-colors">
            Free
          </Button>
          <Button variant="outline" size="sm" className="bg-card/50 backdrop-blur-sm hover:bg-[#1DDFEA]/10 hover:text-[#1DDFEA] transition-colors">
            Paid
          </Button>
          <Button variant="outline" size="sm" className="bg-card/50 backdrop-blur-sm hover:bg-[#1DDFEA]/10 hover:text-[#1DDFEA] transition-colors">
            Beginner
          </Button>
          <Button variant="outline" size="sm" className="bg-card/50 backdrop-blur-sm hover:bg-[#1DDFEA]/10 hover:text-[#1DDFEA] transition-colors">
            Intermediate
          </Button>
          <Button variant="outline" size="sm" className="bg-card/50 backdrop-blur-sm hover:bg-[#1DDFEA]/10 hover:text-[#1DDFEA] transition-colors">
            Advanced
          </Button>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course cards */}
          {[1, 2, 3, 4, 5, 6].map((course) => (
            <div
              key={course}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-[#1DDFEA]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1DDFEA]/10"
            >
              {/* Course thumbnail */}
              <div className="aspect-video relative bg-muted">
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-[#1DDFEA]/10" />
                <img
                  src="/placeholder.svg"
                  alt="Course thumbnail"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              {/* Course details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#1DDFEA]">AI/ML</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">4 hours</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1DDFEA] transition-colors">
                  Introduction to Machine Learning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn the fundamentals of machine learning and start building your own AI models.
                </p>
                {/* Course metadata */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-muted-foreground">4.8</span>
                  </div>
                  <span className="text-xl font-bold text-[#1DDFEA]">₹999</span>
                </div>
                <Link href={`/courses/${course}`} scroll={true}>
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white border-none">
                    View Details 
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

