import React from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { File, Settings, Search } from 'lucide-react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function HeroSection() {
  return (
    <div className="flex h-full w-full flex-col items-center md:flex-row">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden md:w-1/2">
        <Image
          src="/avatar.png"
          alt="Dayan Battulga"
          width={100}
          height={100}
          className="absolute rounded-full border-2 border-gray-300 dark:border-gray-700"
        />
        <OrbitingCircles radius={90} iconSize={20}>
          <File />
          <Settings />
          <File />
        </OrbitingCircles>
        <OrbitingCircles radius={70} iconSize={20} reverse>
          <File />
          <Settings />
          <File />
          <Search />
        </OrbitingCircles>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight">{siteMetadata.author}</h1>
        <p className="text-muted-foreground mt-4 text-lg">{siteMetadata.description}</p>
      </div>
    </div>
  )
}
