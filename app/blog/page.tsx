import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/components/layouts/ListLayout'
import { BlurFade } from '@/components/magicui/blur-fade'

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const initialDisplayPosts = posts

  return (
    <>
      <div className="flex flex-col gap-4 divide-y divide-gray-200 dark:divide-gray-700">
        <BlurFade delay={0.2}>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white">
              All Posts
            </h1>
          </div>
        </BlurFade>
        <div className="container">
          <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} title="All Posts" />
        </div>
      </div>
    </>
  )
}
