import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'string',
    }),
    defineField({
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'welcomeMessage',
      media: 'Image',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
