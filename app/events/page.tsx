import { getAllEvents } from "@/lib/sanity.client"
import { EventsView } from "@/components/events-view"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Suspense fallback={<LoadingSpinner />}>
          <EventsView initialEvents={events} />
        </Suspense>
      </div>
    </div>
  )
} 