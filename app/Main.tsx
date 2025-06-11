import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { BlurFade } from '@/components/magicui/blur-fade'
import MapComponent from '@/components/MapComponent'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import AboutMeSection from '@/components/AboutMeSection'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'

export default function Home({ posts }) {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex h-full w-full flex-col pt-4">
        <BlurFade delay={0.2}>
          <div className="h-[200px] w-full overflow-hidden rounded-4xl md:h-[250px]">
            <MapComponent />
          </div>
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="mt-4 mb-4 flex w-full flex-col gap-4 sm:mt-6 sm:mb-6 sm:h-[225px]">
            <HeroSection />
          </div>
        </BlurFade>
        <BlurFade delay={0.4}>
          <div className="mt-4 mb-4 flex w-full">
            <SkillsSection />
          </div>
        </BlurFade>
        <BlurFade delay={0.5}>
          <div className="mt-16 mb-4 flex w-full">
            <AboutMeSection />
          </div>
        </BlurFade>
        <BlurFade delay={0.6}>
          <div className="mt-16 mb-4 flex w-full">
            <ProjectsSection />
          </div>
        </BlurFade>
        <BlurFade delay={0.7}>
          <div className="mt-16 mb-4 flex w-full">
            <BlogSection />
          </div>
        </BlurFade>

        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </div>
  )
}
