import { getFeaturedEvents } from '@/lib/sanity.client'
import FeaturedEvents from './featured-events'

export async function FeaturedEventsWrapper() {
  let events = await getFeaturedEvents()
  
  // Jeśli mamy więcej niż 3 wydarzenia, wybierz losowo 3
  if (events.length > 3) {
    events = events
      .sort(() => Math.random() - 0.5) // Losowe sortowanie
      .slice(0, 3) // Weź pierwsze 3
  }
  
  console.log('Fetched events:', events)
  
  if (!events || events.length === 0) {
    return <div>No events found</div>
  }
  
  return <FeaturedEvents events={events} />
} 