'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Particles } from '@/components/magicui/particles'

const ThemedBackgroundController: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set the initial theme once mounted, and update if resolvedTheme changes
    if (resolvedTheme === 'dark' || resolvedTheme === 'light') {
      setCurrentTheme(resolvedTheme)
    }
  }, [resolvedTheme])

  // Determine particle color based on the current theme
  const particleColor = currentTheme === 'dark' ? '#FFFFFF' : '#000000'

  // Avoid rendering theme-dependent UI until the client has mounted and theme is resolved
  // This helps prevent hydration mismatches with SSR if initial theme is different.
  if (!mounted) {
    // Optionally, render a static fallback or nothing during initial mount
    // For a background, rendering nothing until mounted is often fine.
    return null
  }

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 h-full w-full" // Ensure particles are behind content but above gradient
        quantity={100} // Default or make this configurable
        color={particleColor}
        ease={80}
        refresh
      />
    </>
  )
}

export default ThemedBackgroundController
