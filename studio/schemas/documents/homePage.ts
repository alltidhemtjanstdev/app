import {PreviewProps} from '../../types'

export const HomePage = {
  name: 'homePage',
  title: 'Hemsida',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Fliktitel för sidan',
      type: 'string',
    },
    // {
    //   name: 'image',
    //   title: 'Omslagsbild',
    //   type: 'extendedImage',
    // },
    {
      name: 'mainHeadingSection',
      title: 'Huvudrubrik',
      type: 'string',
    },
    {
      name: 'strengthsSection',
      title: 'Styrkor',
      type: 'panelContentTrio',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'servicesSection',
      title: 'Tjänster',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'locationsSection',
      title: 'Verksamhetsområden',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
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
      name: 'customerSection',
      title: 'Bli Kund',
      type: 'panelHeadingAndText',
      options: {
        collapsed: true,
      },
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
        title: title || 'Hemsida',
        media: image,
      }
    },
  },
}
