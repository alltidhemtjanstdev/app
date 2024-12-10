export const Person = {
  name: 'person',
  type: 'object',
  title: 'Person',
  fields: [
    {
      name: 'image',
      title: 'Bild',
      type: 'extendedImage',
    },
    {
      name: 'name',
      title: 'Namn',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Befattning',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
    prepare({title, subtitle, media}: any) {
      return {
        title: title || 'No Name',
        subtitle: subtitle || 'No Description',
        media: media,
      }
    },
  },
}
