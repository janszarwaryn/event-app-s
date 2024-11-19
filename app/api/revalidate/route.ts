import { revalidateTag } from 'next/cache'
import { type NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const tag = 'events'
    revalidateTag(tag)
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return Response.json({ revalidated: false, now: Date.now(), error: err })
  }
} 