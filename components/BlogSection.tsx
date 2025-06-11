'use client'

import { useState } from 'react'
import Link from '@/components/Link'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { motion, LayoutGroup } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function BlogSection() {
  const [isHovered, setIsHovered] = useState(false)
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const threeMostRecentPosts = posts.slice(0, 3)
  const [hoveredPostPath, setHoveredPostPath] = useState<string | null>(null)

  return (
    <div className="w-full">
      <div className="bg-gray-label text-muted-foreground text-s dark:bg-dark-gray-label dark:text-light-gray-100 mb-4 w-fit rounded-md border px-4 py-1 dark:border-gray-100">
        Blogs
      </div>
      <div className="relative mb-6">
        <LayoutGroup>
          <ul onMouseLeave={() => setHoveredPostPath(null)}>
            {threeMostRecentPosts.map((post) => {
              const { path, date, title } = post
              const isHovered = hoveredPostPath === path

              return (
                <li key={path} className="w-fit" onMouseEnter={() => setHoveredPostPath(path)}>
                  <Link href={`/${path}`} aria-label={`Read more about ${title}`}>
                    <article className="relative p-2 px-4">
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-lg leading-7 font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                          </h2>
                        </div>
                      </div>
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm leading-6 font-medium text-gray-500 dark:text-gray-100">
                          <time dateTime={date} suppressHydrationWarning>
                            {new Date(date).toLocaleDateString(siteMetadata.locale, {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              timeZone: 'UTC',
                            })}
                          </time>
                        </dd>
                      </dl>
                      {isHovered && (
                        <motion.div
                          className="bg-light-gray-100/30 absolute inset-0 -z-10 rounded-md dark:bg-gray-100/30"
                          layoutId="blog-hover-background"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { duration: 0.15 } }}
                          exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                        />
                      )}
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        </LayoutGroup>
      </div>
      <div className="mt-4 flex w-full justify-start">
        <Link
          href="/blog"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hover:bg-gray-label flex items-center justify-center rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-colors dark:border-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          More Posts
          <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
