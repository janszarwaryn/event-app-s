import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-13',
  useCdn: process.env.NODE_ENV === 'production',
})

export async function getFeaturedEvents() {
  const events = await client.fetch(`
    *[_type == "event"] | order(_createdAt desc) [0...3] {
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
    }
  `)

  if (!events) {
    return []
  }

  return events.map(event => ({
    ...event,
    slug: { current: event.slug || `event-${event._id}` }
  }))
}

export async function getAllEvents() {
  const events = await client.fetch(`
    *[_type == "event"] | order(date asc) {
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
    }
  `)

  if (!events) {
    return []
  }

  return events.map(event => ({
    ...event,
    slug: { current: event.slug || `event-${event._id}` }
  }))
}

export async function getUpcomingEvents() {
  const today = new Date().toISOString()
  const events = await client.fetch(`
    *[_type == "event" && date > $today] | order(date asc) [0...3] {
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
    }
  `, { today })

  return events || []
}

export async function getEvent(slug: string) {
  console.log('Fetching event with slug:', slug)

  if (!slug) {
    return null
  }

  const event = await client.fetch(`
    *[_type == "event" && slug.current == $slug][0] {
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
    }
  `, { slug })

  if (!event) {
    return null
  }

  return {
    ...event,
    slug: { current: event.slug || `event-${event._id}` }
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