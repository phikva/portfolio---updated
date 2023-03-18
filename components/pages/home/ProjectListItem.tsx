import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { start } from 'repl'
import type { ShowcaseProject } from 'types'
interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div
      className={`mb-10 border-t  md:mb-20 flex flex-col gap-x-5 transition`}
    >
      {/* ${
        odd && 'xl:flex-row-reverse'
      }`} */}
      <div className="pt-4 flex">
        <TextBox project={project} />
      </div>
      
      <div className="relative pt-4  md:pt-6 w-full  md:grid md:grid-cols-2  md:gap-x-4 md:gap-y-4 ">
      {project.coverImage && (
        
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="projectImageHome relative aspect-[16/9] rounded-md border mb-4  md:col-start-1 md:row-start-1 md:row-span-2 "
        />
        
      )}
      
       <div className='relative mb-4 md:col-start-1 md:mb-0 md:row-start-2 xl:max-w-[700px] projectHomeText '>
      <CustomPortableText value={project.overviewHomePage}
      />
      </div>
    
        {project.backgroundVideo.url && (
            <ReactPlayer
            style={{
              gridColumnStart: '2',
              
            }}
             width='100%'
            
             height='100%'
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
      <div className='flex  flex-col md:flex-row justify-between'>
        {/* Title */}
        <div className="text-link   md:text-2xl leading-none ">
          {project.title}
        </div>
        <div>
          <div className=' mt-4 text-right text-xl md:text-link md:m-0 hover:underline'>
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
