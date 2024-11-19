export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      description: 'Enter the URL of the event image'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Conference', value: 'Conference'},
          {title: 'Workshop', value: 'Workshop'},
          {title: 'Meetup', value: 'Meetup'},
          {title: 'Webinar', value: 'Webinar'}
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Set to true to show this event in the featured section',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'imageUrl'
    }
  }
} 