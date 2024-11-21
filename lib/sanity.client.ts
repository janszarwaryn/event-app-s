import { createClient } from 'next-sanity'
import { Event } from '@/lib/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration')
}

export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-13',
  useCdn: true,
  stega: false
})

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-13',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  stega: false
})

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
      isFeatured,
      "createdBy": {
        "_ref": coalesce(createdBy._ref, ""),
        "_type": "reference"
      }
    }`
    
    const events = await publicClient.fetch<Event[]>(query)
    return events || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

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
      isFeatured,
      "createdBy": {
        "_ref": coalesce(createdBy._ref, ""),
        "_type": "reference"
      }
    }`
    
    const events = await publicClient.fetch<Event[]>(query)
    return events || []
  } catch (error) {
    console.error('Error fetching featured events:', error)
    return []
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
      isFeatured,
      "createdBy": {
        "_ref": coalesce(createdBy._ref, ""),
        "_type": "reference"
      }
    }`
    
    const events = await client.fetch<Event[]>(query, { today })
    return events || []
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return []
  }
} 