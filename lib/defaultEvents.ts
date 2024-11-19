export const defaultEvents = [
  {
    _id: '1',
    title: 'React Summit 2024',
    slug: { current: 'react-summit-2024' },
    description: 'The biggest React conference in Europe',
    date: '2024-06-15',
    capacity: 1000,
    location: 'Amsterdam, Netherlands',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    category: 'Conference',
    isFeatured: true
  },
  {
    _id: '2',
    title: 'Next.js Conf',
    slug: { current: 'nextjs-conf-2024' },
    description: 'Learn about the latest Next.js features',
    date: '2024-07-20',
    capacity: 800,
    location: 'San Francisco, USA',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
    category: 'Conference',
    isFeatured: true
  },
  {
    _id: '3',
    title: 'TypeScript Workshop',
    slug: { current: 'typescript-workshop-2024' },
    description: 'Hands-on TypeScript training',
    date: '2024-08-10',
    capacity: 50,
    location: 'Berlin, Germany',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    category: 'Workshop',
    isFeatured: true
  }
] as const; 