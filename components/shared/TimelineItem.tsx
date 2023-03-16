import ImageBox from 'components/shared/ImageBox'
import type { MilestoneItem } from 'types'

export function TimelineItem({
  isLast,
  milestone,
}: {
  isLast: boolean
  milestone: MilestoneItem
}) {
  const { description, duration, image, tags, title } = milestone
  const startYear = duration?.start
    ? new Date(duration.start).getFullYear()
    : undefined
  const endYear = duration?.end ? new Date(duration.end).getFullYear() : 'Now'

  return (
    <div className={`flex ${!isLast && 'pb-2'}`}>
      <div className="">
        {/* Thumbnail */}
        
        {/* Vertical line */}
        {!isLast && <div className="mt-2 w-px grow self-center bg-gray-200" />}
      </div>
      <div className="">
        {/* Title */}
        <h4 className="">{title}</h4>
        {/* Tags */}
        <div className="text-sm pb-4">
          {tags?.map((tag, key) => (
            <span key={key}>
              
              <span className="mr-1 mt-1 break-words px-2 py-1 rounded-full border ">#{tag}</span>
            </span>
          ))}
          {/* {startYear} - {endYear} */}
        </div>
        {/* Description */}
        <div className=" text-grey text-xl md:text-link">{description}</div>
      </div>
    </div>
  )
}


// img thumb
{/* <div
          className="relative overflow-hidden rounded-md bg-black"
          style={{ width: '65px', height: '65px' }}
        >
          <ImageBox
            image={image}
            alt={title || 'Timeline item icon'}
            size="10vw"
            width={65}
            height={65}
          />
        </div> */}