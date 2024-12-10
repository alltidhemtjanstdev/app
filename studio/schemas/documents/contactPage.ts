import {PreviewProps} from '../../types'

export const ContactPage = {
  name: 'contactPage',
  title: 'Kontakt',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Fliktitel för sidan',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Omslagsbild',
      type: 'extendedImage',
    },
    {
      name: 'descriptionSection',
      title: 'Kontakta oss beskrivning',
      type: 'panelHeadingAndText',
      options: {
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
      image: 'image',
    },
    prepare({title, image}: PreviewProps) {
      return {
        title: title || 'Kontakt',
        media: image,
      }
    },
  },
}
