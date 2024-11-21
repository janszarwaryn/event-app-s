"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
          alt="Tech events background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: '0.6' }}
        />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-spotlight" />
        </div>
      </div>
      <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Tech Events That Shape The Future
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Join the most innovative tech conferences, workshops, and meetups. Connect
            with industry leaders and stay ahead in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/events" 
              className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              Explore Events
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                →
              </span>
            </Link>
            <Link 
              href="/categories" 
              className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}