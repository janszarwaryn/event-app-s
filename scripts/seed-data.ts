import { createClient } from '@sanity/client'
import { defaultEvents } from '../lib/defaultEvents'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-13',
  token: process.env.SANITY_AUTH_TOKEN, // Będziemy potrzebować tokena
  useCdn: false,
})

async function seedEvents() {
  try {
    for (const event of defaultEvents) {
      // Przygotuj dane do formatu Sanity
      const eventDoc = {
        _type: 'event',
        title: event.title,
        slug: event.slug,
        description: event.description,
        date: new Date(event.date).toISOString(),
        capacity: event.capacity,
        location: event.location,
        category: event.category,
        isFeatured: event.isFeatured,
      }

      // Dodaj dokument do Sanity
      const result = await client.create(eventDoc)
      console.log(`✅ Event created: ${result.title}`)
    }
    console.log('🎉 Seeding completed!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedEvents() 