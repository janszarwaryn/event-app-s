"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@/lib/types";

interface FeaturedEventsProps {
  events: Event[];
}

export default function FeaturedEvents({ events }: FeaturedEventsProps) {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            Discover our handpicked selection of must-attend tech events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {events.map((event) => (
            <Link href={`/events/${event.slug.current}`} key={event._id} className="w-full max-w-sm">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                  {event.category && (
                    <Badge className="absolute top-4 right-4">{event.category}</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center">
                      <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span className="truncate">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{event.capacity} attendees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}