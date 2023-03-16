import { CustomPortableText } from 'components/shared/CustomPortableText'
import { PortableTextBlock } from 'sanity'

export function Footer({ footer }: { footer: PortableTextBlock[] }) {
  return (
    <footer className="mt-32 bottom-0 w-full md:flex justify-between flex-wrap">
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )}
    </footer>
  )
}
