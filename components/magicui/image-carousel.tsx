'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/components/lib/utils'

interface ImageCarouselProps {
  mainSrc: string
  imageSrcs: string[]
  alt: string
  className?: string
  interval?: number
  objectPosition?: string
}

export const ImageCarousel = ({
  mainSrc,
  imageSrcs,
  alt,
  className,
  interval = 3000,
  objectPosition = 'object-center',
}: ImageCarouselProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  useEffect(() => {
    if (isHovering && imageSrcs.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length)
      }, interval)
      return () => clearInterval(timer)
    }
  }, [isHovering, imageSrcs.length, interval])

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={`${basePath}${mainSrc}`}
        alt={alt}
        fill
        className={cn(
          'object-cover transition-opacity duration-1000',
          objectPosition,
          className,
          isHovering ? 'opacity-0' : 'opacity-100'
        )}
        unoptimized
      />
      {imageSrcs.map((src, index) => (
        <Image
          key={index}
          src={`${basePath}${src}`}
          alt={alt}
          fill
          className={cn(
            'absolute object-cover transition-opacity duration-1000',
            objectPosition,
            className,
            isHovering && currentIndex === index ? 'opacity-100' : 'opacity-0'
          )}
          unoptimized
        />
      ))}
    </div>
  )
}
