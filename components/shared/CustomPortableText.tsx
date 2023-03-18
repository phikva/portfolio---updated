import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageBox from 'components/shared/ImageBox'
import { TimelineSection } from 'components/shared/TimelineSection'
import ReactPlayer from 'react-player'
import { Image, PortableTextBlock} from 'sanity'
import { backgroundVideo } from 'types'

import VideoBox from './videoBox'


export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className=" text-xl md:text-link transition hover:opacity-50 rounded-full border border-black px-5 py-2"
            href={value?.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-4 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9] rounded-md border"
            />
            {value?.caption && (
              <div className="text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },

      
      video: ({
        value,
      }: {
        value: backgroundVideo & { alt?: string; caption?: string; url?: string }
      }) => {
        return (
          <div className="my-4 space-y-2">
            <ReactPlayer
              src={value.url}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9] rounded-md border"
            />
            {value?.caption && (
              <div className="text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },

   
      
      
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
    },
    
  }

  return <PortableText components={components} value={value} />
}
