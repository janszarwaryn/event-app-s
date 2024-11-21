import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Sprawdź czy użytkownik istnieje w Sanity
    const sanityUser = await client.fetch(
      `*[_type == "user" && username == $username][0]._id`,
      { username: session.user.username }
    )

    if (!sanityUser) {
      return NextResponse.json(
        { error: 'User not found in Sanity' },
        { status: 404 }
      )
    }

    // Sprawdź limit eventów dla zwykłych użytkowników
    if (session.user.role !== 'ADMIN') {
      const userEvents = await client.fetch(
        `count(*[_type == "event" && createdBy._ref == $userId])`,
        { userId: sanityUser }
      )

      if (userEvents >= 2) {
        return NextResponse.json(
          { error: 'You have reached the maximum limit of 2 events' },
          { status: 403 }
        )
      }
    }

    const event = await request.json()

    // Przygotuj slug
    const slug = event.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const doc = {
      _type: 'event',
      title: event.title,
      slug: {
        _type: 'slug',
        current: slug
      },
      description: event.description,
      date: new Date(event.date).toISOString(),
      location: event.location,
      capacity: parseInt(event.capacity),
      category: event.category,
      imageUrl: event.imageUrl,
      isFeatured: session.user.role === 'ADMIN' ? (event.isFeatured || false) : false,
      createdBy: {
        _type: 'reference',
        _ref: sanityUser
      }
    }

    const result = await client.create(doc)

    // Pobierz utworzony event z pełnymi danymi
    const createdEvent = await client.fetch(
      `*[_type == "event" && _id == $id][0]{
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
          "_ref": createdBy._ref,
          "_type": "reference"
        }
      }`,
      { id: result._id }
    )

    // Revalidate paths
    revalidatePath('/dashboard')
    revalidatePath('/events')
    revalidatePath('/')

    return NextResponse.json({
      success: true,
      data: createdEvent
    })

  } catch (error: any) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create event',
        details: error.message
      },
      { status: 500 }
    )
  }
} 