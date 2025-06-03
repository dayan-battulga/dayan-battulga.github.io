import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { BlurFade } from './magicui/blur-fade'

export default function Footer() {
  return (
    <footer>
      <BlurFade key="footer" delay={0.1} inView>
        <div className="mt-16 flex flex-row items-center justify-between">
          <div className="mb-3 flex space-x-6 text-gray-200 dark:text-white">
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
