import React from 'react'
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { ImageCarousel } from './magicui/image-carousel'

const cards = [
  {
    name: 'MN',
    description: '@UB',
    className: 'col-span-1 lg:col-span-1 w-full',
    background: (
      <ImageCarousel
        mainSrc="/static/images/about/mn1.jpeg"
        imageSrcs={['/static/images/about/mn2.jpeg']}
        alt="Mongolia"
      />
    ),
  },
  {
    name: 'NY',
    description: '@NYC',
    className: 'col-span-1 lg:col-span-1 w-full',
    background: (
      <ImageCarousel
        mainSrc="/static/images/about/ny1.jpeg"
        imageSrcs={['/static/images/about/ny2.jpeg']}
        alt="NYC"
      />
    ),
  },
  {
    name: 'WI',
    description: '@Madison',
    className: 'col-span-1 lg:col-span-1',
    background: (
      <ImageCarousel
        mainSrc="/static/images/about/wisconsin1.jpeg"
        imageSrcs={['/static/images/about/wisconsin2.jpeg']}
        alt="Wisconsin"
      />
    ),
  },
  {
    name: 'SnowBoarding',
    description: 'Or skiing too!',
    className: 'col-span-2 lg:col-span-2',
    background: (
      <ImageCarousel
        mainSrc="/static/images/about/snowboard1.jpeg"
        imageSrcs={['/static/images/about/snowboard2.jpeg']}
        alt="Snowboarding"
        objectPosition="object-bottom"
      />
    ),
  },
  {
    name: 'Chess',
    description: 'Lets play!',
    className: 'col-span-1 lg:col-span-1',
    background: (
      <ImageCarousel
        mainSrc="/static/images/about/chess1.jpeg"
        imageSrcs={['/static/images/about/chess2.jpeg']}
        alt="Chess"
      />
    ),
  },
  {
    name: 'Currently...',
    description: 'Living life',
    className: 'col-span-3 lg:col-span-3',
    background: (
      <ImageCarousel
        mainSrc="/static/images/about/life1.jpeg"
        imageSrcs={['/static/images/about/life2.jpeg']}
        alt="Life"
      />
    ),
  },
]

export default function AboutMeSection() {
  return (
    <div className="w-full">
      <div className="bg-gray-label text-muted-foreground text-s dark:bg-dark-gray-label dark:text-light-gray-100 mb-1 w-fit rounded-md border px-4 py-1 dark:border-gray-100">
        About Me
      </div>
      <div className="my-3 w-full space-y-3">
        <BentoGrid>
          {cards.map((card, idx) => (
            <BentoCard key={idx} {...card} />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}
