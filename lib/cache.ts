import redis from './redis'

export async function invalidateCache(patterns: string[] = ['*']) {
  if (!redis) return

  try {
    for (const pattern of patterns) {
      const keys = await redis.keys(pattern)
      if (keys.length) {
        await redis.del(...keys)
      }
    }
  } catch (error) {
    console.error('Cache invalidation error:', error)
  }
} 