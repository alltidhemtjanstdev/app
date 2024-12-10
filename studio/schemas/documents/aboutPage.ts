import {PreviewProps} from '../../types'

export const AboutPage = {
  name: 'aboutPage',
  title: 'Om Oss',
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
      title: 'Om Alltid Hemtjänst',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'panelHeadingAndText',
        },
        {
          name: 'person',
          title: 'Person',
          type: 'person',
          options: {
            collapsed: true,
          },
        },
      ],
    },
    {
      name: 'socialAgencyResultsSection',
      title: 'Socialstyrelsens resultat',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'socialAgencyDocumentsSection',
      title: 'Socialstyrelsens dokument',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [
        {name: 'document', title: 'Rubrik och text', type: 'panelHeadingAndText'},
        {name: 'files', title: 'Dokument (PDF)', type: 'filesList'},
      ],
    },
    {
      name: 'testimonialsSection',
      title: 'Kundomdömen',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [{name: 'quoteList', title: 'Lista med citat', type: 'quoteList'}],
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
      image: 'image',
    },
    prepare({title, image}: PreviewProps) {
      return {
        title: title || 'Om oss',
        media: image,
      }
    },
  },
}
