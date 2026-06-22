import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blogový článek",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nadpis",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Titulní obrázek",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "excerpt",
      title: "Krátký popis",
      type: "text",
    }),

    defineField({
      name: "content",
      title: "Obsah",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),

    defineField({
      name: "publishedAt",
      title: "Datum publikace",
      type: "datetime",
    }),
  ],
});
