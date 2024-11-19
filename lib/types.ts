export interface Event {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  date: string;
  capacity: number;
  location: string;
  imageUrl: string;
  category: 'Conference' | 'Workshop' | 'Meetup' | 'Webinar';
  isFeatured: boolean;
} 