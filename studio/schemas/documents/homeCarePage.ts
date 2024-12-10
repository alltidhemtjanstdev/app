import {PreviewProps} from '../../types'

export const HomeCarePage = {
  name: 'homeCarePage',
  title: 'Hemtjänst',
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
      title: 'Hemtjäns Beskrivning',
      type: 'panelHeadingAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'personalizedCareSection',
      title: 'Personlig omsorg section',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'servicesSection',
      title: 'Våra Tjänster',
      type: 'panelHeadingAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'customerSection',
      title: 'Bli Kund',
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
        title: title || 'Hemtjänst',
        media: image,
      }
    },
  },
}
