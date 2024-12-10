export const Gallery = {
  name: 'gallery',
  title: 'Galleri Inlägg',
  type: 'document',
  fields: [
    {
      name: 'hidden',
      title: 'Dold',
      description: 'Dölj detta inlägg från offentlig visning',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
    },
    {
      name: 'galleryImages',
      title: 'Bilder',
      type: 'array',
      of: [{type: 'extendedImage'}],
    },
  ],
}
