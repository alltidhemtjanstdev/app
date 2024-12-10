export const ContactInfo = {
  name: 'contactInfo',
  title: 'Kontaktinformation',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Telefonnummer',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-postadress',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adress',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Gatuadress',
          type: 'string',
        },
        {
          name: 'postNumber',
          title: 'Postnummer',
          type: 'string',
        },
        {
          name: 'municipality',
          title: 'Kommun',
          type: 'string',
        },
      ],
    },
    {
      name: 'openingHours',
      title: 'Öppettider',
      type: 'object',
      fields: [
        {
          name: 'days',
          title: 'Dagar',
          type: 'string',
          description: 'T.ex. Måndag - Fredag',
        },
        {
          name: 'time',
          title: 'Tider',
          type: 'string',
          description: 'T.ex. 09:00 - 15:00',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Kontaktinformation',
      }
    },
  },
}
