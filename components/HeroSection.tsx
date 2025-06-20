'use client'

import React, { useState, useEffect } from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Turtle, Cat, Hamburger, Youtube, Volleyball, BookMarked, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'

const SMALL_SCREEN_BREAKPOINT = 640 // Tailwind's sm breakpoint, adjust if needed
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function HeroSection() {
  const [radius1, setRadius1] = useState(90)
  const [radius2, setRadius2] = useState(70)
  const [imageWidth, setImageWidth] = useState(100)
  const [imageHeight, setImageHeight] = useState(100)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < SMALL_SCREEN_BREAKPOINT) {
        setRadius1(75) // 90 - 10
        setRadius2(55) // 70 - 10
        setImageWidth(80)
        setImageHeight(80)
      } else {
        setRadius1(120)
        setRadius2(100)
        setImageWidth(150)
        setImageHeight(150)
      }
    }

    // Set initial radius based on current window size
    handleResize()

    window.addEventListener('resize', handleResize)
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">
      <div className="relative flex h-[225px] w-full items-center justify-center overflow-hidden sm:w-1/2">
        <Image
          src={`${basePath}/static/avatar.png`}
          alt="Dayan Battulga"
          width={150}
          height={150}
          className="absolute rounded-full border-2 border-gray-300 dark:border-gray-700"
        />
        <OrbitingCircles radius={100} iconSize={20} reverse>
          <Volleyball />
          <ShoppingCart />
          <BookMarked />
          <Cat />
          <Hamburger />
          <Turtle />
          <Youtube />
        </OrbitingCircles>
      </div>

      <div className="w-full sm:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight">{siteMetadata.author}</h1>
        <p className="text-muted-foreground mt-4 text-lg">{siteMetadata.description}</p>
        <div className="mt-3 flex flex-row items-center justify-start space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={7} />
          <SocialIcon kind="github" href={siteMetadata.github} size={7} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} />
        </div>
      </div>
    </div>
  )
}
