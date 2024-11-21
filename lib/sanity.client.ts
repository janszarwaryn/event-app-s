import { createClient } from 'next-sanity'
import { Event } from '@/lib/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration')
}

// Klient publiczny (bez tokena) do odczytu
export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-13',
  useCdn: true,
  stega: false
})

// Klient z tokenem do operacji zapisu
export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-13',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  stega: false
})

export async function getFeaturedEvents(): Promise<Event[]> {
  try {
    const query = `*[_type == "event" && defined(isFeatured)] | order(_createdAt desc) [0...3] {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }`
    
    const events = await publicClient.fetch<Event[]>(query)
    return events || []
  } catch (error) {
    console.error('Error fetching featured events:', error)
    return []
  }
}

export async function getAllEvents(): Promise<Event[]> {
  try {
    const query = `*[_type == "event"] | order(date asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }`
    
    const events = await publicClient.fetch<Event[]>(query)
    return events || []
  } catch (error) {
    console.error('Error fetching all events:', error)
    return []
  }
}

export async function createSampleEvent() {
  try {
    const doc = {
      _type: 'event',
      title: 'Sample Tech Conference',
      description: 'A sample tech conference for testing',
      date: new Date().toISOString(),
      location: 'Warsaw, Poland',
      capacity: 100,
      category: 'Conference',
      imageUrl: 'https://via.placeholder.com/400',
      isFeatured: true,
      slug: {
        _type: 'slug',
        current: 'sample-tech-conference'
      }
    }

    return await client.create(doc)
  } catch (error) {
    console.error('Error creating sample event:', error)
    return null
  }
}

export async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const today = new Date().toISOString()
    const query = `*[_type == "event" && dateTime(date) > dateTime($today)] | order(date asc) [0...3] {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }`
    
    const events = await client.fetch<Event[]>(query, { today })
    return events || []
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return []
  }
}

export async function getEvent(slug: string) {
  try {
    if (!slug) {
      return null
    }

    const query = `*[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }`
    
    const event = await client.fetch(query, { slug })
    
    if (!event) {
      return null
    }

    return {
      ...event,
      slug: { current: event.slug || `event-${event._id}` }
    }
  } catch (error) {
    console.error('Error fetching event:', error)
    return null
  }
}

export async function getEvents() {
  return client.fetch(`
    *[_type == "event"] {
      _id,
      title,
      slug,
      description,
      date,
      capacity,
      location,
      "imageUrl": image.asset->url
    }
  `)
} 