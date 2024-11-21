import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users } from "lucide-react"
import { format } from "date-fns"
import { Event } from "@/lib/types"
import Image from "next/image"

interface EventCardProps {
  event: Event
  listView?: boolean
}

export function EventCard({ event, listView = false }: EventCardProps) {
  if (listView) {
    return (
      <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-zinc-900/50 p-6 rounded-lg border border-gray-200 dark:border-zinc-800/50 hover:border-blue-500/30 dark:hover:border-zinc-700/50 transition-all duration-300 group">
        <div className="relative h-48 md:h-64 md:w-80 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={event.imageUrl || "/event-placeholder.jpg"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 left-4 px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-500/20 backdrop-blur-sm">
            {event.category}
          </span>
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              {event.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-blue-600/80 dark:group-hover:text-blue-400/80 transition-colors">
              <CalendarDays className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
              {format(new Date(event.date), "PPP")}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-blue-600/80 dark:group-hover:text-blue-400/80 transition-colors">
              <MapPin className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
              {event.location}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-blue-600/80 dark:group-hover:text-blue-400/80 transition-colors">
              <Users className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
              {event.capacity} attendees
            </div>
          </div>
          <div className="mt-6">
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
        </div>
      </div>
    )
  }

  return (
    <Card className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border-gray-200 dark:border-zinc-800/50 text-gray-900 dark:text-white hover:border-blue-500/30 dark:hover:border-zinc-700/50 transition-all duration-300 group overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.imageUrl || "/event-placeholder.jpg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        <span className="absolute top-4 right-4 px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20 backdrop-blur-sm">
          {event.category}
        </span>
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-blue-400 transition-colors line-clamp-2">
          {event.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-400 group-hover:text-blue-400/80 transition-colors">
            <CalendarDays className="mr-2 h-4 w-4 text-blue-400" />
            {format(new Date(event.date), "PPP")}
          </div>
          <div className="flex items-center text-gray-400 group-hover:text-blue-400/80 transition-colors">
            <MapPin className="mr-2 h-4 w-4 text-blue-400" />
            {event.location}
          </div>
          <div className="flex items-center text-gray-400 group-hover:text-blue-400/80 transition-colors">
            <Users className="mr-2 h-4 w-4 text-blue-400" />
            {event.capacity} attendees
          </div>
          <p className="mt-4 text-gray-400 line-clamp-2">{event.description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none transition-all duration-300"
        >
          <Link href={`/events/${event.slug}`} className="flex items-center justify-center gap-2">
            View Details
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 