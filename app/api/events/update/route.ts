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

    const result = await client
      .patch(event._id)
      .set({
        title: event.title,
        description: event.description,
        date: new Date(event.date).toISOString(),
        location: event.location,
        capacity: parseInt(event.capacity),
        category: event.category,
        imageUrl: event.imageUrl,
        ...(session.user.role === 'ADMIN' && { isFeatured: event.isFeatured })
      })
      .commit()

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
