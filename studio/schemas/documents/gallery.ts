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
      of: [
        {
          name: 'extendedGalleriImage',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'altText',
              title: 'Alt text for image',
              type: 'string',
              description:
                'Alt-text (alternativ text) beskriver bilder för personer med synnedsättningar och hjälper sökmotorer. Lämna tomt om ingen beskrivning behövs.',
            },
            {
              name: 'caption',
              title: 'Caption (valfritt)',
              type: 'string',
              description:
                'Används för att lägga till en bildbeskrivning under varje bild i modalen.',
            },
          ],
        },
      ],
    },
  ],
}
