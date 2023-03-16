import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link'
import type { ShowcaseProject } from 'types'
interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div
      className={`mb-10 border-t md:mb-20 flex flex-col gap-x-5 transition`}
    >
      {/* ${
        odd && 'xl:flex-row-reverse'
      }`} */}
      <div className="pt-4 flex">
        <TextBox project={project} />
      </div>
      <div className="pt-4 md:pt-6 w-full xl:w-9/12">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9] rounded-md border"
        />
      </div>
      
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="relative flex w-full flex-col justify-between">
      <div className='flex flex-col md:flex-row justify-between'>
        {/* Title */}
        <div className="text-link md:text-2xl leading-none">
          {project.title}
        </div>
        <div>
          <div className=' mt-5 text-xl md:text-link md:m-0 hover:underline'>
            View project
            </div>
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
