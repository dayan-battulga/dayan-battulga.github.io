'use client'

import React, { useState, useEffect } from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Turtle, Cat, Hamburger, Youtube, Volleyball, BookMarked, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const SMALL_SCREEN_BREAKPOINT = 640 // Tailwind's sm breakpoint, adjust if needed

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
        setRadius1(95)
        setRadius2(70)
        setImageWidth(100)
        setImageHeight(100)
      }
    }

    // Set initial radius based on current window size
    handleResize()

    window.addEventListener('resize', handleResize)
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex h-full w-full flex-row items-center sm:flex-row">
      <div className="relative flex h-[225px] w-full items-center justify-center overflow-hidden md:h-[500px] md:w-1/2">
        <Image
          src="/avatar.png"
          alt="Dayan Battulga"
          width={imageWidth}
          height={imageHeight}
          className="absolute rounded-full border-2 border-gray-300 dark:border-gray-700"
        />
        <OrbitingCircles radius={radius1} iconSize={20}>
          <Cat />
          <Hamburger />
          <Turtle />
          <Youtube />
        </OrbitingCircles>
        <OrbitingCircles radius={radius2} iconSize={20} reverse>
          <Volleyball />
          <ShoppingCart />
          <BookMarked />
        </OrbitingCircles>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight">{siteMetadata.author}</h1>
        <p className="text-muted-foreground mt-4 text-lg">{siteMetadata.description}</p>
      </div>
    </div>
  )
}
