import { FeaturedEventsWrapper } from '@/components/featured-events-wrapper'
import { UpcomingEvents } from '@/components/upcoming-events'
import { AuthCTA } from '@/components/auth-cta'
import { HeroSection } from '@/components/hero-section'
import { getUpcomingEvents, getFeaturedEvents } from '@/lib/sanity.client'
import { Event } from '@/lib/types'

export default async function HomePage() {
  let upcomingEvents: Event[] = []
  let featuredEvents: Event[] = []
  
  try {
    [upcomingEvents, featuredEvents] = await Promise.all([
      getUpcomingEvents(),
      getFeaturedEvents()
    ])

    console.log('Upcoming events:', upcomingEvents)
    console.log('Featured events:', featuredEvents)
  } catch (error) {
    console.error('Error fetching events:', error)
  }

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        {featuredEvents.length > 0 && <FeaturedEventsWrapper events={featuredEvents} />}
        {upcomingEvents.length > 0 && <UpcomingEvents events={upcomingEvents} />}
        <AuthCTA />
      </div>
    </>
  )
}