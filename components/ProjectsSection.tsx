'use client'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from '@/components/Link'
import HomeCard from '@/components/HomeCard'
import { BlurFade } from '@/components/magicui/blur-fade'
import projectsData from '@/data/projectsData'

const cardColors = [
  'from-sky-200 dark:from-sky-800',
  'from-violet-200 dark:from-violet-800',
  'from-rose-200 dark:from-rose-800',
  'from-amber-200 dark:from-amber-800',
]

export default function ProjectsSection() {
  const [isHovered, setIsHovered] = useState(false)
  const twoMostRecentProjects = projectsData.slice(0, 2)

  return (
    <div className="w-full">
      <div className="bg-gray-label text-muted-foreground text-s dark:bg-dark-gray-label dark:text-light-gray-100 mb-4 w-fit rounded-md border px-4 py-1 dark:border-gray-100">
        Projects
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {twoMostRecentProjects.map((d, index) => (
          <div key={d.title} className="flex-1">
            <BlurFade delay={0.3 + index * 0.1}>
              <HomeCard
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                color={cardColors[index % cardColors.length]}
              />
            </BlurFade>
          </div>
        ))}
      </div>
      <div className="mt-4 flex w-full justify-start">
        <Link
          href="/projects"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hover:bg-gray-label flex items-center justify-center rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-colors dark:border-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          More Projects
          <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
