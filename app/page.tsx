import { FeaturedEventsWrapper } from '@/components/featured-events-wrapper'
import { UpcomingEvents } from '@/components/upcoming-events'
import { AuthCTA } from '@/components/auth-cta'
import { HeroSection } from '@/components/hero-section'
import { getUpcomingEvents } from '@/lib/sanity.client'

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedEventsWrapper />
      <UpcomingEvents events={upcomingEvents} />
      <AuthCTA />
    </main>
  )
}