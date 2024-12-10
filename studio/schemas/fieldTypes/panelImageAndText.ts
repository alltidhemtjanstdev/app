export const PanelImageAndText = {
  name: 'panelImageAndText',
  title: 'Panel med Bild och Text',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'extendedImage',
      options: {
        collapsed: false,
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'object',
      options: {
        collapsed: false,
      },
      fields: [
        {
          name: 'heading',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'editedText',
          title: 'Text',
          type: 'basicTextEditor',
        },
      ],
    },
  ],
}
