export const ExtendedImage = {
  name: 'extendedImage',
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
  ],
}
