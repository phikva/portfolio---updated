import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseProject } from 'types'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div
      className={` p-4 flex flex-col gap-x-5 transition xl:flex-row`}
    >
      {/* ${
        odd && 'xl:flex-row-reverse'
      }`} */}
      <div className="w-full xl:w-9/12">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9] "
        />
      </div>
      <div className="flex xl:w-1/4">
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="relative pt-4 flex w-full flex-col justify-center xl:mt-0">
      <div className='xl:flex justify-center'>
        {/* Title */}
        <div className="text-xl">
          {project.title}
        </div>
        {/* Overview  */}
        {/* <div className="font-serif text-gray-500">
          <CustomPortableText value={project.overview} />
        </div> */}
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
