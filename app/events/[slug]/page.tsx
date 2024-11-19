import { getEvent } from '@/lib/sanity.client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Share2, BookmarkPlus } from "lucide-react"
import Image from "next/image"
import { formatDistanceToNow } from 'date-fns'
import { notFound } from 'next/navigation'

interface EventPageProps {
  params: {
    slug: string;
  };
}

export default async function EventPage({ params }: EventPageProps) {
  console.log('Event page params:', params)

  if (!params.slug) {
    console.log('No slug provided')
    notFound()
  }

  const event = await getEvent(params.slug)
  console.log('Fetched event:', event)

  if (!event) {
    console.log('Event not found')
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">{event.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
              <Badge variant="secondary" className="text-sm">
                {formatDistanceToNow(new Date(event.date), { addSuffix: true })}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About this event</h2>
              <p className="text-muted-foreground whitespace-pre-wrap mb-8">
                {event.description}
              </p>

              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Capacity</p>
                    <p className="text-muted-foreground">{event.capacity} attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Action Card */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-4">
              <div className="text-center mb-6">
                <p className="text-xl font-semibold mb-2">Interested in attending?</p>
                <p className="text-muted-foreground">
                  Secure your spot at this amazing event!
                </p>
              </div>

              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <BookmarkPlus className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Only {event.capacity} spots available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 