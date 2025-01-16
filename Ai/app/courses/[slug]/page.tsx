import { ArrowLeft, Clock, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SpaceBackground } from "../../components/space-background"

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden space-background">
      <SpaceBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-[#1DDFEA]/10" />

      {/* Course Banner */}
      <div className="bg-gradient-to-r from-[#13919A]/80 via-[#1DDFEA]/80 to-[#13919A]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <Link
            href="/courses"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-[#1DDFEA]">Introduction to Machine Learning</h1>
              <div className="flex items-center gap-4 text-white/80 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>4 hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (120 reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>John Doe</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-white/90">
                  Master the fundamentals of machine learning and start building your own AI models with
                  this comprehensive course.
                </p>
                <Button size="lg" className="bg-white text-[#1DDFEA] hover:bg-white/90">
                  Enroll Now for ₹999
                </Button>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Course preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1DDFEA]">About this Course</h2>
              <p className="text-white/90 text-lg">
                This comprehensive course will take you from the basics of machine learning to advanced
                concepts. You'll learn through hands-on projects and real-world examples. By the end of
                this course, you'll have the skills to build your own AI models and understand the
                mathematics behind them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1DDFEA]">What you'll learn</h2>
              <ul className="grid gap-3 text-white/90">
                <li className="flex items-start">
                  <span className="mr-2 text-[#1DDFEA]">•</span>
                  Understanding of core ML concepts and algorithms
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#1DDFEA]">•</span>
                  Practical experience with Python and popular ML libraries
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#1DDFEA]">•</span>
                  Building and training your own neural networks
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#1DDFEA]">•</span>
                  Real-world project implementation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1DDFEA]">Course Curriculum</h2>
              <div className="space-y-4">
                <div className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-[#1DDFEA]/50 transition-all duration-300">
                  <h3 className="font-semibold mb-2 text-[#1DDFEA]">Module 1: Introduction to ML</h3>
                  <p className="text-white/90">Basic concepts and terminology</p>
                </div>
                <div className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-[#1DDFEA]/50 transition-all duration-300">
                  <h3 className="font-semibold mb-2 text-[#1DDFEA]">Module 2: Supervised Learning</h3>
                  <p className="text-white/90">Classification and regression techniques</p>
                </div>
                <div className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-[#1DDFEA]/50 transition-all duration-300">
                  <h3 className="font-semibold mb-2 text-[#1DDFEA]">Module 3: Neural Networks</h3>
                  <p className="text-white/90">Deep learning fundamentals</p>
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className="sticky top-20 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-[#1DDFEA]/50 transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-[#1DDFEA]">Course Features</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>4 hours of content</span>
                </li>
                <li className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Expert instructor</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-[#1DDFEA] hover:bg-[#1DDFEA]/90 text-black">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

