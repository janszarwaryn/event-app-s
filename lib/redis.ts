import Redis from 'ioredis'

let redis: Redis | null = null

if (process.env.REDIS_URL && typeof window === 'undefined') {
  redis = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: 3,
    retryStrategy: (times) => {
      if (times > 3) {
        return null
      }
      return Math.min(times * 50, 2000)
    }
  })
}

export default redis 