'use client'

import { useState } from 'react'
import Image from './Image'
import Link from './Link'
import { motion } from 'framer-motion'
import { Github, Link as LinkIcon, GitBranch } from 'lucide-react'

type CardProps = {
  title: string
  description: string
  imgSrc?: string
  href?: string
  source?: string
  WIP?: boolean
  color: string
}

const Card = ({ title, description, imgSrc, href, source, WIP, color }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="md w-full p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`dark:from-dark-gray-label h-full transform overflow-hidden rounded-md bg-gradient-to-b to-white transition-all duration-200 hover:shadow-lg dark:to-gray-950 dark:hover:shadow-[0_4px_6px_rgba(255,255,255,0.3)] ${
          isHovered ? color : 'dark:from-dark-gray-label from-[#eeeeee]'
        }`}
      >
        <motion.div
          animate={{ y: isHovered ? -12 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative"
        >
          {imgSrc && (
            <div className="relative m-5">
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )}
        </motion.div>
        <div className="relative z-10 -mt-16 bg-white p-6 text-left dark:bg-gray-950">
          <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight text-black dark:text-white">
            {title}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <div className="flex space-x-4">
            {WIP ? (
              <div className="text-muted-foreground flex items-center rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm font-medium dark:border-gray-700">
                Work in Progress
              </div>
            ) : (
              <>
                {source && (
                  <Link
                    href={source}
                    className="hover:bg-gray-label border-light-gray-100 flex items-center rounded-lg border-1 bg-white px-4 py-2 text-sm font-medium text-black shadow-md transition-colors dark:bg-black dark:text-white dark:hover:bg-gray-800"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </Link>
                )}
                {href && (
                  <Link
                    href={href}
                    className="dark:hover:bg-gray-label flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-gray-800 dark:bg-white dark:text-black"
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Visit
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
