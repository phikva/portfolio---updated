import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function HomePage({ page, settings, preview }: HomePageProps) {
  const {
    body,
    overview,
    showcaseProjects,
    title = 'Personal website',
  } = page ?? {}

  return (
    <>
      <HomePageHead page={page} settings={settings} />

      <Layout settings={settings} preview={preview}>
        <div className="">
          {/* Header */}
          {title && <Header centered title={title} description={overview} />}
          {/* Showcase projects */}
          <h3 className="">Latest work</h3>
          {showcaseProjects && showcaseProjects.length > 0 && (
            <div className="">
              {/* <div className=''>
            
          </div> */}
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link key={key} href={href}>
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          )}
          <div className="mt-10">
            {/* <h3 className='pb-4 md:col-start-1'>Education</h3> */}
            <div className="">
              {/* Body */}
              {body && (
                <CustomPortableText
                  paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
                  value={body}
                />
              )}
              {/* <p>UI Design at Noroff, Oslo, 2021-2022.</p>
              <p>Front-End Development at Noroff, Oslo, 2019-2021.</p>
              <p>Personal trainer at Active education, Oslo, 2014.</p>
              <p>Medicine year study at Høyskolen Kristiania, Oslo, 2014-2015.</p> */}
            </div>
          </div>

          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
