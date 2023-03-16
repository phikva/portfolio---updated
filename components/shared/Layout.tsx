import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'

import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
}

export default function Layout({
  children,
  settings = fallbackSettings,
  preview,
}: LayoutProps) {
  return (
    <div className=" p-2 md:p-4 xl:p-5 bg-white flex min-h-screen flex-col max-w-[2000px] xl:mx-auto text-black">
      {preview && <PreviewBanner />}
      <Navbar menuItems={settings?.menuItems} />
      <div className="mt-10 flex-grow">{children}</div>
      <Footer footer={settings?.footer} />
    
    </div>
  )
}
