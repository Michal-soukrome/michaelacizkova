import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Reference',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Jméno klienta',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role nebo doplňující popis',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Text reference',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Hodnocení',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: 'order',
      title: 'Pořadí na webu',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.integer(),
    }),
  ],
  orderings: [
    {
      title: 'Pořadí na webu',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
