import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { BlurFade } from './magicui/blur-fade'

export default function Footer() {
  return (
    <footer>
      <BlurFade key="footer" delay={0.8}>
        <div className="mt-16 mb-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="mb-3 flex space-x-6 text-gray-200 sm:mb-0 dark:text-white">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={7} />
            <SocialIcon kind="github" href={siteMetadata.github} size={7} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} />
          </div>
          <div className="flex flex-row items-center space-x-2 text-lg text-gray-100 dark:text-white">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
        </div>
      </BlurFade>
    </footer>
  )
}
