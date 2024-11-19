import { getFeaturedEvents } from '@/lib/sanity.client'
import { defaultEvents } from '@/lib/defaultEvents'
import FeaturedEvents from './featured-events'

export async function FeaturedEventsWrapper() {
  let events = await getFeaturedEvents()
  
  if (!events || events.length === 0) {
    events = defaultEvents
  }
  
  return <FeaturedEvents events={events} />
} 