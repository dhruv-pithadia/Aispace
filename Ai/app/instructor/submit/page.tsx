"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from 'lucide-react'
import { SpaceBackground } from "../../components/space-background"

export default function InstructorSubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen space-background text-white flex items-center justify-center relative overflow-hidden">
        <SpaceBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-[#1DDFEA]/10" />
        <div className="text-center space-y-4 p-8 relative">
          <h1 className="text-3xl font-bold text-[#1DDFEA]">Thank You!</h1>
          <p className="text-gray-400">Your course has been submitted for review.</p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            className="bg-[#1DDFEA] hover:bg-[#1DDFEA]/90 text-black"
          >
            Submit Another Course
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden space-background">
      <SpaceBackground />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-[#1DDFEA]/10" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-[#1DDFEA]/50 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-4 text-[#1DDFEA]">Submit Your Course</h1>
          <p className="text-gray-400 mb-8">
            Share your expertise with our community by submitting your course for review.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                placeholder="Enter course title"
                required
                className="bg-gray-900 border-gray-800 focus:border-[#1DDFEA]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea
                id="description"
                placeholder="Enter course description"
                required
                className="bg-gray-900 border-gray-800 min-h-[150px] focus:border-[#1DDFEA]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger className="bg-gray-900 border-gray-800">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aiml">AI/ML</SelectItem>
                    <SelectItem value="chatgpt">ChatGPT</SelectItem>
                    <SelectItem value="nlp">NLP</SelectItem>
                    <SelectItem value="cv">Computer Vision</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  required
                  className="bg-gray-900 border-gray-800 focus:border-[#1DDFEA]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (hours)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="Enter duration"
                  required
                  className="bg-gray-900 border-gray-800 focus:border-[#1DDFEA]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Difficulty Level</Label>
                <Select required>
                  <SelectTrigger className="bg-gray-900 border-gray-800">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Course Thumbnail</Label>
              <div className="border-2 border-dashed border-[#1DDFEA]/20 rounded-lg p-8 text-center hover:border-[#1DDFEA]/40 transition-colors">
                <Upload className="mx-auto h-12 w-12 text-[#1DDFEA]/60" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Drag and drop your thumbnail here, or click to browse
                </p>
                <input type="file" className="hidden" accept="image/*" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">External Course URL (optional)</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://"
                className="bg-gray-900 border-gray-800 focus:border-[#1DDFEA]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1DDFEA] hover:bg-[#1DDFEA]/90 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Course"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

