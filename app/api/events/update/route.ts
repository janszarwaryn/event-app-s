import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 401 }
      )
    }

    const event = await request.json()
    console.log('Received event data:', event)

    if (!event._id) {
      return NextResponse.json(
        { error: 'Event ID is required' },
        { status: 400 }
      )
    }

    // Przygotuj dane do aktualizacji
    const updates = {
      _type: 'event',
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString(),
      location: event.location,
      capacity: parseInt(event.capacity),
      category: event.category,
      imageUrl: event.imageUrl,
      isFeatured: event.isFeatured || false,
    }

    console.log('Updating with data:', updates)

    // Zaktualizuj dokument w Sanity
    const result = await client
      .patch(event._id)
      .set(updates)
      .commit()

    return NextResponse.json({
      success: true,
      data: result
    })

  } catch (error: any) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      { 
        error: 'Failed to update event',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
} 