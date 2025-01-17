// Reusable card component for displaying course information
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define props interface for type safety
interface CourseCardProps {
  title: string
  description: string
  category: string
  duration: string
  rating: number
  price: number
  slug: string
  thumbnail: string
}

export function CourseCard({
  title,
  description,
  category,
  duration,
  rating,
  price,
  slug,
  thumbnail
}: CourseCardProps) {
  return (
    // Card container with hover effects
    <div className="group relative overflow-hidden rounded-lg border bg-card/50 backdrop-blur-sm transition-all hover:border-[#1DDFEA]/50 hover:shadow-2xl hover:shadow-[#1DDFEA]/10">
      <Link href={`/courses/${slug}`} className="block">
        {/* Course thumbnail with overlay effect */}
        <div className="aspect-video relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        {/* Course details section */}
        <div className="p-6">
          {/* Course metadata */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#1DDFEA] text-sm font-medium">{category}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">{duration}</span>
          </div>
          {/* Course title and description */}
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-[#1DDFEA] transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          {/* Rating and price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-muted-foreground text-sm">{rating}</span>
            </div>
            <span className="text-xl font-bold text-[#1DDFEA]">₹{price}</span>
          </div>
          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white border-none">
            View Course
          </Button>
        </div>
      </Link>
    </div>
  )
}

