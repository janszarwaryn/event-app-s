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

    const event = await request.json()

    const result = await client.create(doc)

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