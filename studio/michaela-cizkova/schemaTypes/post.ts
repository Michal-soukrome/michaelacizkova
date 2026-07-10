import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog články',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nadpis',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Titulní obrázek',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'excerpt',
      title: 'Krátký popis',
      description: 'Použije se jako meta description pro článek',
      type: 'text',
    }),

    defineField({
      name: 'content',
      title: 'Obsah',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normální', value: 'normal'},
            {title: 'Nadpis H2', value: 'h2'},
            {title: 'Nadpis H3', value: 'h3'},
            {title: 'Citace', value: 'blockquote'},
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Odkaz',
                fields: [
                  {
                    name: 'href',
                    title: 'URL odkazu',
                    type: 'url',
                  },
                  {
                    name: 'blank',
                    title: 'Otevřít v nové kartě',
                    type: 'boolean',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {type: 'image'},
        {type: 'miniGallery'},
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Datum publikace',
      type: 'datetime',
    }),
  ],
})
