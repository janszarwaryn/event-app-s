import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const event = await request.json()

    // Sprawdź czy event istnieje i pobierz informacje o twórcy
    const existingEvent = await client.fetch(
      `*[_type == "event" && _id == $id][0]{
        ...,
        "createdBy": createdBy._ref
      }`,
      { id: event._id }
    )

    if (!existingEvent) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }

    // Sprawdź uprawnienia
    const isAdmin = session.user.role === 'ADMIN'
    const isOwner = existingEvent.createdBy === session.user.id

    if (!isAdmin && !isOwner) {
      return NextResponse.json(
        { error: 'You can only edit your own events' },
        { status: 403 }
      )
    }

    // Przygotuj dane do aktualizacji
    const updates = {
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString(),
      location: event.location,
      capacity: parseInt(event.capacity),
      category: event.category,
      imageUrl: event.imageUrl,
      // Tylko admin może zmieniać status featured
      ...(isAdmin && { isFeatured: event.isFeatured })
    }

    // Zaktualizuj dokument w Sanity
    const result = await client
      .patch(event._id)
      .set(updates)
      .commit()

    // Pobierz zaktualizowany event z pełnymi danymi
    const updatedEvent = await client.fetch(
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
      { id: event._id }
    )

    // Revalidate paths
    revalidatePath('/dashboard')
    revalidatePath('/events')
    revalidatePath('/')

    return NextResponse.json({
      success: true,
      data: updatedEvent
    })

  } catch (error: any) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      { 
        error: 'Failed to update event',
        details: error.message
      },
      { status: 500 }
    )
  }
} 