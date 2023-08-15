import { TimelineItem } from 'components/shared/TimelineItem'
import type { MilestoneItem } from 'types'

interface TimelineItem {
  title: string
  milestones: MilestoneItem[]
}

export function TimelineSection({ timelines }: { timelines: TimelineItem[] }) {
  return (
    <div className="text-black flex flex-col gap-1">
      {timelines?.map((timeline, key) => {
        const { title, milestones } = timeline

        if (milestones.length > 2) {
          return (
            <div
              className="xl:gap-x-4x flex flex-col md:grid  md:grid-cols-2 md:gap-x-5 xl:grid-cols-3 "
              key={key}
            >
              <h3 className=" mt-20 md:col-span-2 xl:col-span-3">{title}</h3>

              {milestones?.map((experience, index) => (
                <div className="md:pb-20" key={index}>
                  <TimelineItem
                    milestone={experience}
                    isLast={milestones.length - 1 === index}
                  />
                </div>
              ))}
            </div>
          )
        }
        if (milestones.length === 1) {
          return (
            <div className="flex flex-col" key={key}>
              <h3 className=" mt-20">{title}</h3>

              {milestones?.map((experience, index) => (
                <div className="md:pb-20" key={index}>
                  <TimelineItem
                    milestone={experience}
                    isLast={milestones.length - 1 === index}
                  />
                </div>
              ))}
            </div>
          )
        } else
          return (
            <div
              className="xl:gap-x-4x flex flex-col md:grid  md:grid-cols-2 md:gap-x-5 xl:grid-cols-2"
              key={key}
            >
              <h3 className=" mt-20 md:col-span-2 xl:col-span-3">{title}</h3>

              {milestones?.map((experience, index) => (
                <div className=" pt-4 md:pb-20 " key={index}>
                  <TimelineItem
                    milestone={experience}
                    isLast={milestones.length - 1 === index}
                  />
                </div>
              ))}
            </div>
          )
      })}
    </div>
  )
}
