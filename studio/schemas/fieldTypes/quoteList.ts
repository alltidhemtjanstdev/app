export const QuoteList = {
  name: 'quoteList',
  title: 'Citat List',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'hidden',
          title: 'Dold',
          description: 'Dölj detta citat från offentlig visning',
          type: 'boolean',
        },
        {
          name: 'quote',
          title: 'Citat',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'author',
          title: 'Författare',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
}
