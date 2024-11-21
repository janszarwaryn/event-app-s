import { Event } from "@/lib/types"
import { EventCard } from "@/components/event-card"

interface FeaturedEventsWrapperProps {
  events: Event[]
}

export function FeaturedEventsWrapper({ events }: FeaturedEventsWrapperProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Discover our handpicked selection of must-attend tech events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
} 