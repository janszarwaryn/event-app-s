"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Tech conference"
          className={`object-cover w-full h-full transition-all duration-1000 ${
            isLoaded ? 'blur-none' : 'blur-xl'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 animate-in fade-in slide-in-from-left duration-500">
            Discover Tech Events That Shape The Future
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-left duration-500 delay-150">
            Join the most innovative tech conferences, workshops, and meetups. 
            Connect with industry leaders and stay ahead in technology.
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-left duration-500 delay-300">
            <Button size="lg" asChild>
              <Link href="/events">
                Explore Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}