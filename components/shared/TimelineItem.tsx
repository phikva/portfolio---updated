import ImageBox from 'components/shared/ImageBox'
import ReactPlayer from 'react-player'
import type { MilestoneItem } from 'types'

export function TimelineItem({
  isLast,
  milestone,
}: {
  isLast: boolean
  milestone: MilestoneItem
}) {
  const { description, duration, image, tags, title, backgroundVideo } =
    milestone
  const startYear = duration?.start
    ? new Date(duration.start).getFullYear()
    : undefined
  const endYear = duration?.end ? new Date(duration.end).getFullYear() : 'Now'

  return (
    <div className="">
      
      <div className="">
        {/* Title */}
        <h4 className="">{title}</h4>
        {/* Tags */}
        {tags?.map && (
          <div className="text-sm flex flex-wrap pb-4">
            {tags?.map((tag, key) => (
              <span key={key} className="mr-1 mt-2 ">
                <span className="break-words rounded-full border px-2 py-1 ">
                  #{tag}
                </span>
              </span>
            ))}
            {/* {startYear} - {endYear} */}
          </div>
        )}

        {/* Description */}
        <div className=" text-xl text-grey md:text-link">{description}</div>
      </div>
      <div className="flex flex-col">
        {/* Thumbnail */}
        {backgroundVideo?.url && (
          <ReactPlayer
            width="100%"
            height="100%"
            volume={null}
            loop={true}
            playing={true}
            muted={true}
            url={backgroundVideo.url}
            alt={`Cover video from ${backgroundVideo.alt}`}
          />
        )}
        {image?.asset && (
          <div
            className="bg-black relative overflow-hidden rounded-md border mt-2"
            // style={{ width: '100px', height: '100px' }}
          >
            <ImageBox
              image={image}
              alt={title || 'Timeline item icon'}
              // size="10vw"
              // width={50}
              // height={50}
              classesWrapper='timelineImage '
            />
          </div>
        )}

        {/* Vertical line */}
        {!isLast && <div className="bg-gray-200 mt-2 w-px grow self-center" />}
      </div>
    </div>
  )
}

// img thumb
