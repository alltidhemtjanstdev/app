export const BasicTextEditor = {
  name: 'basicTextEditor',
  title: 'Text',
  type: 'array',
  description: 'OBS: Använd Shift (⇧) + Enter (⏎) för radbrytning',
  of: [
    {
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
      },
    },
  ],
}
