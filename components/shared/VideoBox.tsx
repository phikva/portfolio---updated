// import { urlForImage } from 'lib/sanity.image'

import ReactPlayer from 'react-player'

interface VideoBoxProps {
  video?: { asset?: any }
  alt?: string
  url?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  src?: string
}

export default function VideoBox({
  video,
  alt = 'video branding',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
}: VideoBoxProps) {
  return (
    <div className={`bg-gray-50 w-full  overflow-hidden ${classesWrapper}`}>
      {video && (
        <ReactPlayer
          className="absolute h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={video}
        />
      )}
    </div>
  )
}
