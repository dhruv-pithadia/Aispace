// Root page that redirects to the courses listing
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/courses')
}

