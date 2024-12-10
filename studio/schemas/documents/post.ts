export const Post = {
  name: 'post',
  title: 'Aktuellt Inlägg',
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
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
    {
      name: 'content',
      title: 'Innehåll',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
