import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Link from 'next/link'
import type { ProjectPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import ProjectPageHead from './ProjectPageHead'

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
          <div className="mb-20 space-y-6">
          <div className="">
          <h1 className='text-left font-neueHeavy text-4xl md:text-8xl xl:text-15xl'> {title}</h1>
        </div>
          
            {/* Header */}
            <Header  description={overview} />

            

              <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
                {/* Duration */}
                {!!(startYear && endYear) && (
                  <div className="p-3 lg:p-4">
                    <div className="text-link">Duration</div>
                    <div className=" text-xl">{`${startYear} -  ${endYear}`}</div>
                  </div>
                )}

                {/* Client */}
                {client && (
                  <div className="p-3 lg:p-4">
                    <div className="text-link">Client</div>
                    <div className="text-xl">{client}</div>
                  </div>
                )}

                {/* Site */}
                {site && (
                  <div className="p-3 lg:p-4">
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
                <div className="p-3 lg:p-4">
                  <div className="text-link">Tags</div>
                  <div className="text-md flex flex-row flex-wrap md:text-lg">
                    {tags?.map((tag, key) => (
                      <div key={key} className="mr-1 mt-1 break-words px-5 py-2 rounded-full border ">
                        #{tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="">
              {/* Image  */}
              <ImageBox
                image={coverImage}
                alt={`Cover image for ${title}`}
                classesWrapper="relative aspect-[16/9] rounded-md border"
              />
                {/* Description */}
            {description && (
              <CustomPortableText
                paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
                value={description}
              />
            )}
            </div>

          
           
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
        </div>
      </Layout>
    </>
  )
}
