export const PanelContentTrio = {
  name: 'panelContentTrio',
  title: 'Panel med Tre Delar',
  type: 'object',
  options: {
    collapsed: true,
  },
  fields: [
    {
      name: 'firstSection',
      title: 'First Section',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'secondSection',
      title: 'Second Section',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
    },
    {
      name: 'thirdSection',
      title: 'Third Section',
      type: 'panelImageAndText',
      options: {
        collapsed: true,
      },
    },
  ],
}
