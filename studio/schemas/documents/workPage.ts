import {PreviewProps} from '../../types'

export const WorkPage = {
  name: 'workPage',
  title: 'Jobb',
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
      title: 'Work beskrivning',
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
        title: title || 'Jobb',
        media: image,
      }
    },
  },
}
