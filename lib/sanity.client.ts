import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-13', // użyj aktualnej daty
  useCdn: process.env.NODE_ENV === 'production',
})

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

// Helper do pobierania pojedynczego wydarzenia
export async function getEvent(slug: string) {
  return client.fetch(`
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      date,
      capacity,
      location,
      "imageUrl": image.asset->url
    }
  `, { slug })
}

// Helper do pobierania wyróżnionych wydarzeń
export async function getFeaturedEvents() {
  return client.fetch(`
    *[_type == "event" && isFeatured == true] {
      _id,
      title,
      slug,
      description,
      date,
      capacity,
      location,
      "imageUrl": image.asset->url
    } | order(date asc)
  `)
} 