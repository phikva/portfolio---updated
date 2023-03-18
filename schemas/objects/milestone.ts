import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'milestone',
  title: 'Milestone',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: "This image will be used as the milestone's cover image.",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'backgroundVideo',
    title: 'Background Video',
    type: 'document',
    description: 'copy the url from assets manager',
  
    fields: [
      
      {
        name: 'url',
        title: 'Url',
        type: 'url',
        description:
          'Please make sure this is a short loopable video, does not have sound, and is a video file. Please do not use a link from youtube, vemeo, or any other video hosting wesbite link.',
      },
      defineField({
        title: 'Caption',
        name: 'caption',
        type: 'string',
      }),
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alt text',
        description:
          'Alternative text for screenreaders. Falls back on caption if not set',
      }),
    ],
   
      
    
    preview: {
      select: {
        title: 'title',
        subtitle: 'url',
      },
      prepare({ title, subtitle }) {
        return {
          title,
          subtitle,
        };
      },
    },
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description:
        'Tags to help categorize the milestone. For example: name of the university course, name of the project, the position you held within the project etc. ',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      type: 'duration',
      name: 'duration',
      title: 'Duration',
      validation: false,
    }),
  ],
  preview: {
    select: {
      duration: 'duration',
      image: 'image',
      title: 'title',
    },
    prepare({ duration, image, title }) {
      return {
        media: image,
        subtitle: [
          duration?.start && new Date(duration.start).getFullYear(),
          duration?.end && new Date(duration.end).getFullYear(),
        ]
          .filter(Boolean)
          .join(' - '),
        title,
      }
    },
  },
})
