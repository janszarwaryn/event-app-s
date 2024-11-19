import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-13',
  useCdn: process.env.NODE_ENV === 'production',
})

// Pobierz 3 losowe wydarzenia do sekcji Featured
export async function getFeaturedEvents() {
  return client.fetch(`
    *[_type == "event"] | order(_createdAt desc) [0...3] {
      _id,
      title,
      "slug": slug,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }
  `)
}

// Pobierz wszystkie wydarzenia do strony /events
export async function getAllEvents() {
  return client.fetch(`
    *[_type == "event"] | order(date asc) {
      _id,
      title,
      "slug": slug,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }
  `)
}

// Pobierz 3 najbliższe wydarzenia do sekcji Upcoming
export async function getUpcomingEvents() {
  const today = new Date().toISOString()
  return client.fetch(`
    *[_type == "event" && date > $today] | order(date asc) [0...3] {
      _id,
      title,
      "slug": slug,
      description,
      date,
      capacity,
      location,
      imageUrl,
      category,
      isFeatured
    }
  `, { today })
}

// Helper do pobierania pojedynczego wydarzenia
export async function getEvent(slug: string) {
  return client.fetch(`
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
}

// Helper do pobierania wydarzeń
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