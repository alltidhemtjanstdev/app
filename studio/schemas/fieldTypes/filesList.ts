export const FilesList = {
  name: 'filesList',
  type: 'array',
  of: [
    {
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      fields: [
        {name: 'description', title: 'Beskrivning', type: 'string'},
        // {name: 'author', type: 'string', title: 'Author'},
      ],
    },
  ],
}
