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
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Conference', value: 'Conference' },
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Meetup', value: 'Meetup' },
          { title: 'Webinar', value: 'Webinar' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'createdBy',
      title: 'Created By',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: any) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      user: 'createdBy.name'
    },
    prepare(selection: any) {
      const {title, user} = selection
      return {
        title: title,
        subtitle: `Created by ${user}`
      }
    }
  }
} 