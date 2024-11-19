import { type NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  try {
    revalidatePath('/events')
    revalidatePath('/')
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return Response.json({ revalidated: false, now: Date.now(), error: err })
  }
} 