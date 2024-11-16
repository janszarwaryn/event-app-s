"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Filter, MapPin, Users } from "lucide-react";

const UPCOMING_EVENTS = [
  {
    id: 4,
    title: "Web3 Developer Conference",
    date: "2024-09-05",
    location: "Paris, France",
    category: "Conference",
    attendees: 600,
  },
  {
    id: 5,
    title: "Cloud Native Summit",
    date: "2024-09-15",
    location: "Stockholm, Sweden",
    category: "Summit",
    attendees: 400,
  },
  {
    id: 6,
    title: "Mobile Dev Days",
    date: "2024-09-25",
    location: "Barcelona, Spain",
    category: "Conference",
    attendees: 300,
  },
];

export function UpcomingEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = UPCOMING_EVENTS.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-muted/50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-center">
            Browse through our upcoming technology events and secure your spot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center max-w-2xl mx-auto">
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Conference">Conference</SelectItem>
                <SelectItem value="Summit">Summit</SelectItem>
                <SelectItem value="Workshop">Workshop</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-items-center">
                  <div className="flex items-center text-muted-foreground justify-center">
                    <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="truncate">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-muted-foreground justify-center">
                    <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground justify-center">
                    <Users className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{event.attendees} attendees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}