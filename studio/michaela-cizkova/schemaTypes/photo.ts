import {defineType, defineField} from 'sanity'

export const photo = defineType({
  name: 'photo',
  title: 'Fotografie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'alt',
      title: 'ALT text',
      type: 'string',
      description: 'Popis fotky pro SEO a přístupnost',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Obrázek',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Rodinné', value: 'family'},
          {title: 'Párové', value: 'couples'},
          {title: 'Těhotenské', value: 'maternity'},
          {title: 'Newborn', value: 'newborn'},
          {title: 'Děti', value: 'children'},
          {title: 'Portrétní', value: 'portrait'},
          {title: 'Brandové', value: 'brand'},
          {title: 'Ateliérové', value: 'atelier'},
          {title: 'Boudoir', value: 'boudoir'},
          {title: 'Reportážní', value: 'reportage'},
          {title: 'Romantické', value: 'romantic'},
          {title: 'Svatební', value: 'wedding'},
          {title: 'Homepage', value: 'homepage'},
        ],
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'size',
      title: 'Velikost v gridu',
      type: 'string',
      options: {
        list: [
          {title: 'Malá', value: 'small'},
          {title: 'Střední', value: 'medium'},
          {title: 'Velká', value: 'large'},
        ],
      },
      initialValue: 'small',
    }),
  ],
})
