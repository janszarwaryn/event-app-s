"use client"

import { useState } from "react"
import { Event } from "@/lib/types"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Grid2X2, List } from "lucide-react"

interface EventsViewProps {
  initialEvents: Event[]
}

export function EventsView({ initialEvents }: EventsViewProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [events] = useState<Event[]>(initialEvents)

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">All Events</h1>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'grid' ? 'secondary' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
            className="hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'secondary' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
            className="hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {events.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No events found.</p>
      ) : (
        <div className={viewMode === 'grid' ? 
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : 
          "space-y-6"
        }>
          {events.map((event) => (
            <EventCard 
              key={event._id} 
              event={event} 
              listView={viewMode === 'list'} 
            />
          ))}
        </div>
      )}
    </>
  )
} 