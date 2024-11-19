"use client";

import { getAllEvents } from '@/lib/sanity.client'
import { Event } from '@/lib/types'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Grid2X2, List, Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getAllEvents()
      setEvents(allEvents)
    }
    fetchEvents()
  }, [])

  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">All Events</h1>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'grid' ? "default" : "outline"} 
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button 
            variant={viewMode === 'list' ? "default" : "outline"} 
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        : "flex flex-col gap-4"
      }>
        {events.map((event) => (
          <Link 
            href={`/events/${event.slug.current}`}
            key={event._id}
            className={viewMode === 'list' ? "w-full" : ""}
          >
            <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`aspect-video relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4">
                  {event.category}
                </Badge>
              </div>
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{event.capacity} attendees</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 