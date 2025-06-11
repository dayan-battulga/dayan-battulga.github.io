'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ShineBorder } from '@/components/magicui/shine-border'
import { useTheme } from 'next-themes'
import { cn } from '@/components/lib/utils'

interface SkillCardProps {
  title: string
  icon: string | React.ReactNode
  colors: string[]
}

export default function SkillCard({ title, icon, colors }: SkillCardProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="bg-background h-[150px] w-full rounded-xl border p-6" />
  }

  const handleInteraction = () => {
    setIsClicked(!isClicked)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleInteraction()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        'group bg-background relative h-[100px] w-full cursor-pointer rounded-xl border p-3 text-center transition-colors duration-300 hover:bg-[#eeeeee] dark:border-gray-100 dark:hover:bg-gray-800',
        isClicked
          ? 'border-transparent dark:border-transparent'
          : 'border-gray-100/30 text-gray-100/70'
      )}
      onClick={handleInteraction}
      onKeyDown={handleKeyDown}
    >
      {isClicked && (
        <ShineBorder
          borderWidth={2}
          shineColor={colors.length === 1 ? colors[0] : colors}
          duration={10}
          isAnimated={true}
          className="rounded-xl"
        />
      )}
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-2 h-12 w-12">
          {typeof icon === 'string' && icon ? (
            <Image
              src={icon}
              alt={`${title} icon`}
              fill
              className={cn(
                'object-contain transition-all duration-300',
                !isClicked && 'grayscale',
                theme === 'dark' && (title === 'Next.js' || title === 'Git') && 'invert'
              )}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ color: isClicked ? colors[0] : 'inherit' }}
            >
              {icon}
            </div>
          )}
        </div>
        <h3
          className={cn(
            'text-sm font-semibold transition-colors duration-300',
            isClicked && title !== 'Git' && 'bg-clip-text text-transparent',
            isClicked && title === 'Git' && 'text-black dark:text-white'
          )}
          style={
            isClicked && title !== 'Git'
              ? {
                  backgroundImage: `linear-gradient(to right, ${colors[0]}, ${
                    colors[1] || colors[0]
                  })`,
                }
              : {}
          }
        >
          {title}
        </h3>
      </div>
    </div>
  )
}
