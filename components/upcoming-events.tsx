"use client";

import { Event } from "@/lib/types"
import { format, formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users } from "lucide-react"

interface UpcomingEventsProps {
  events: Event[]
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Browse through our upcoming technology events and secure your spot.
          </p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event) => {
            const eventDate = new Date(event.date)
            const timeUntil = formatDistanceToNow(eventDate, { addSuffix: true })
            
            return (
              <div 
                key={event._id} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-zinc-700/50 hover:border-blue-500/30 dark:hover:border-zinc-600/50 transition-all duration-300"
              >
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 dark:text-white font-medium text-lg">
                      {event.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-100 dark:border-blue-500/20">
                      {timeUntil}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400/80 transition-colors">
                      <CalendarDays className="mr-2 h-4 w-4 text-blue-500 dark:text-blue-400" />
                      {format(eventDate, "PPP")}
                    </span>
                    <span className="flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400/80 transition-colors">
                      <MapPin className="mr-2 h-4 w-4 text-blue-500 dark:text-blue-400" />
                      {event.location}
                    </span>
                    <span className="flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400/80 transition-colors">
                      <Users className="mr-2 h-4 w-4 text-blue-500 dark:text-blue-400" />
                      {event.capacity} attendees
                    </span>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="bg-blue-500 hover:bg-blue-600 text-white border-none transition-all duration-300"
                >
                  <Link href={`/events/${event.slug}`} className="flex items-center gap-2">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}