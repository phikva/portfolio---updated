import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { MenuItem } from 'types'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 py-0">
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={` text-link hover:text-black ${
                menuItem?._type === 'home'
                  ? '  font-normal text-black'
                  : 'text-gray-600'
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
