"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import Link from "next/link";

const FEATURED_EVENTS = [
  {
    id: 1,
    title: "TechConf 2024",
    description: "The biggest tech conference in Europe",
    date: "2024-06-15",
    location: "Berlin, Germany",
    category: "Conference",
    attendees: 1500,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
  },
  {
    id: 2,
    title: "AI Summit",
    description: "Exploring the future of Artificial Intelligence",
    date: "2024-07-20",
    location: "London, UK",
    category: "Summit",
    attendees: 800,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
  },
  {
    id: 3,
    title: "DevOps World",
    description: "Latest trends in DevOps and Cloud Computing",
    date: "2024-08-10",
    location: "Amsterdam, Netherlands",
    category: "Workshop",
    attendees: 500,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
  }
];

export function FeaturedEvents() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <Skeleton className="h-8 w-64 mb-4 mx-auto" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {FEATURED_EVENTS.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id} className="w-full max-w-sm">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4">{event.category}</Badge>
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
                      <span className="truncate">{event.attendees} attendees</span>
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