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
    <div className={`${centered ? 'text-center max-w-[1500px] mb-20' : left ? 'text-left' : 'w-5/6 lg:w-3/5'}`}>
    

      {/* Title */}
      {title &&  (
        <div className="px-4 text-5xl md:text-7xl">
          <h1 className='text-left font-neueHeavy font-bold'>A portfolio of design and development work by Philip Kvam</h1>
        </div>
      )}
      {/* Description */}
      {description && (
        <h2 className="px-4  mt-10  text-xl md:text-2xl text-left">
          <CustomPortableText value={description} />
        </h2>
      )}
    </div>
  )
}
