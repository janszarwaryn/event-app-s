import { FeaturedEventsWrapper } from '@/components/featured-events-wrapper'
import { UpcomingEvents } from '@/components/upcoming-events'
import { AuthCTA } from '@/components/auth-cta'
import { HeroSection } from '@/components/hero-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedEventsWrapper />
      <UpcomingEvents />
      <AuthCTA />
    </main>
  )
}