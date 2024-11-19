import { getFeaturedEvents } from '@/lib/sanity.client'
import { defaultEvents } from '@/lib/defaultEvents'
import FeaturedEvents from './featured-events'

export async function FeaturedEventsWrapper() {
  let featuredEvents = await getFeaturedEvents()
  
  if (!featuredEvents || featuredEvents.length === 0) {
    featuredEvents = defaultEvents
  }
  
  return <FeaturedEvents events={featuredEvents} />
} 