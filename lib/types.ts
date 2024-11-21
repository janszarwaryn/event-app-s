export interface Event {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  capacity: number;
  location: string;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
  createdBy?: {
    _ref: string;
    _type: 'reference';
    name?: string;
    username?: string;
  };
} 