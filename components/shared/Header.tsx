import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  left?: boolean
  description?: any[]
  title?: string
 
}
export function Header(props: HeaderProps) {
  const { title, description,  centered = false, left=false } = props
  // if (!description && !title !title) {
  //   return null
  // }
  return (
    <div className={`${centered ? 'text-center max-w-[2000px] mb-24' : left ? 'text-left' : 'lg:w-4/6'}`}>
    

      {/* Title */}
      {title &&  (
        <div className="mb-4 text-4xl md:text-8xl xl:text-15xl">
          <h1 className='text-left font-neueHeavy'>A design and development portfolio</h1>
        </div>
      )}
      {/* Description */}
      {description && (
        <h2 className=" max-w-[1200px] text-left text-link md:text-2xl">
          <CustomPortableText value={description} />
        </h2>
      )}
    </div>
  )
}
