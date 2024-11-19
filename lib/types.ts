export interface Event {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  date: string;
  capacity: number;
  location: string;
  imageUrl: string;
  category?: string;
  isFeatured?: boolean;
} 