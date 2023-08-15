import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ReactPlayer from 'react-player'
import type { ShowcaseProject } from 'types'
interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div
      className={`mb-10 flex  flex-col gap-x-5 border-t transition md:mb-20`}
    >
      {/* ${
        odd && 'xl:flex-row-reverse'
      }`} */}
      <div className="flex pt-4">
        <TextBox project={project} />
      </div>

      <div className="relative w-full  pt-4 md:grid  md:grid-cols-2 md:gap-x-4  md:gap-y-4 md:pt-6 ">
        {project.coverImage && (
          <ImageBox
            image={project.coverImage}
            alt={`Cover image from ${project.title}`}
            classesWrapper="projectImageHome relative aspect-[16/9] rounded-md border mb-4  md:col-start-1 md:row-start-1 md:row-span-2 "
          />
        )}

        <div className="projectHomeText relative mb-4 md:col-start-1 md:row-start-2 md:mb-0 xl:max-w-[700px]">
          <CustomPortableText value={project.overviewHomePage} />
        </div>

        {project.backgroundVideo.url && (
          <ReactPlayer
            style={{
              gridColumnStart: '2',
            }}
            width="100%"
            height="100%"
            volume={null}
            loop={true}
            playing={true}
            muted={true}
            url={project.backgroundVideo.url}
            alt={`Cover video from ${project.title}`}
          />
        )}
      </div>
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="relative flex w-full flex-col justify-between">
      <div className="flex  flex-col justify-between md:flex-row">
        {/* Title */}
        <div className="text-link   leading-none md:text-2xl ">
          {project.title}
        </div>
        <div>
          <div className=" mt-4 text-right text-xl hover:underline md:m-0 md:text-link">
            View project
          </div>
        </div>
        {/* Overview  */}
      </div>

      {/* Tags */}
      {/* <div className="mt-4 flex flex-row flex-wrap gap-x-2">
        {project.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div> */}
    </div>
  )
}
