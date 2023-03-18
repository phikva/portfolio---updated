import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Link from 'next/link'
import type { ProjectPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import ProjectPageHead from './ProjectPageHead'
import ReactPlayer from 'react-player'

export interface ProjectPageProps {
  project: ProjectPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function ProjectPage({
  project,
  settings,
  homePageTitle,
  preview,
}: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    backgroundVideo,
    description,
    duration,
    overview,
    site,
    tags,
    title,
  } = project || {}

  const startYear = new Date(duration?.start).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      <ProjectPageHead project={project} title={homePageTitle} />

      <Layout settings={settings} preview={preview}>
        <div>
          <div className="mb-20 space-y-2 xl:space-y-4">
          <div className="">
          <h1 className='text-left font-neueHeavy text-4xl md:text-8xl xl:text-15xl'> {title}</h1>
        </div>
          
            {/* Header */}
            <Header  description={overview} />

            

              <div className="divide-inherit grid grid-cols-1 lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
                {/* Duration */}
                {!!(startYear && endYear) && (
                  <div className="p-3 lg:p-4 border-t lg:border-t-0">
                    <div className="text-link">Duration</div>
                    <div className=" text-xl">{`${startYear} -  ${endYear}`}</div>
                  </div>
                )}

                {/* Client */}
                {client && (
                  <div className="p-3 lg:p-4 border-t lg:border-t-0">
                    <div className="text-link">Client</div>
                    <div className="text-xl">{client}</div>
                  </div>
                )}

                {/* Site */}
                {site && (
                  <div className="p-3 lg:p-4 border-t lg:border-t-0">
                    <div className="text-link">Site</div>
                    {site && (
                      <Link
                        target="_blank"
                        className="text-xl break-words"
                        href={site}
                      >
                        {site}
                      </Link>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="p-3 lg:p-4 border-t lg:border-t-0">
                  <div className="text-link">Tags</div>
                  <div className="text-md flex flex-row flex-wrap md:text-lg">
                    {tags?.map((tag, key) => (
                      <div key={key} className="mr-1 mt-1 break-words px-3 py-1 rounded-full border ">
                        #{tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:grid grid-cols-2 gap-x-4">
      {project.coverImage && (
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9] rounded-md border mb-2"
        />
      )}
        {project.backgroundVideo.url && (
            <ReactPlayer
            //  style={ {aspectRatio: '16/9', objectFit: 'contain'} }
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
   {/* Description */}
   {description && (
              <CustomPortableText
                paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
                value={description}
              />
            )}
          
           
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen" />
        </div>
      </Layout>
    </>
  )
}
