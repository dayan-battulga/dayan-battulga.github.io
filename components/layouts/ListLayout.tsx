'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { BlurFade } from '../magicui/blur-fade'
import { motion, LayoutGroup } from 'framer-motion'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
}

export default function ListLayout({ posts, title, initialDisplayPosts = [] }: ListLayoutProps) {
  const pathname = usePathname()
  const [hoveredPostPath, setHoveredPostPath] = useState<string | null>(null)

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="flex sm:space-x-24">
          <div className="relative" onMouseLeave={() => setHoveredPostPath(null)}>
            <LayoutGroup>
              <ul>
                {displayPosts.map((post, index) => {
                  const { path, date, title, summary } = post
                  const isHovered = hoveredPostPath === path

                  return (
                    <BlurFade key={path} delay={0.3 + index * 0.1}>
                      <li className="my-6 w-fit" onMouseEnter={() => setHoveredPostPath(path)}>
                        <Link href={`/${path}`} aria-label={`Read more about ${title}`}>
                          <article className="relative p-2">
                            <div className="space-y-3">
                              <div>
                                <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white">
                                  {title}
                                </h2>
                              </div>
                            </div>
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-100">
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
                                layoutId="hover-background"
                                animate={{ scale: isHovered ? 1.05 : 1 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                aria-hidden="true"
                              />
                            )}
                          </article>
                        </Link>
                      </li>
                    </BlurFade>
                  )
                })}
              </ul>
            </LayoutGroup>
          </div>
        </div>
      </div>
    </>
  )
}
