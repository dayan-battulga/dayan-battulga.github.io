'use client'

import { useState } from 'react'
import Image from './Image'
import Link from './Link'
import { motion } from 'framer-motion'

const HomeCard = ({ title, description, imgSrc, href, color }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <div
        className="md w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`dark:from-dark-gray-label border-light-gray-100 hover:bg-gray-label h-full transform overflow-hidden rounded-md border-1 bg-gradient-to-b to-white transition-all duration-200 dark:border-gray-100 dark:to-gray-950 ${
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
            <h2 className="mb-2 text-xl leading-7 font-bold tracking-tight text-black dark:text-white">
              {title}
            </h2>
            <p className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HomeCard
