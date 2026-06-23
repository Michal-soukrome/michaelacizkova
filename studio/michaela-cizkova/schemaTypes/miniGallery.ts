import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'miniGallery',
  title: 'Mini galerie (1–5 fotek)',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Fotky',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
  ],
  preview: {
    select: {
      media: 'images.0',
      count: 'images.length',
    },
    prepare({media, count}) {
      return {
        title: `Mini galerie (${count} fotek)`,
        media,
      }
    },
  },
})
