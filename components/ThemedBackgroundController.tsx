'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Particles } from '@/components/magicui/particles'

const ThemedBackgroundController: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const [particleQuantity, setParticleQuantity] = useState(25)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setParticleQuantity(10) // Less particles on smaller screens
      } else {
        setParticleQuantity(25)
      }
    }

    // Set initial quantity on mount
    handleResize()

    // Add resize listener
    window.addEventListener('resize', handleResize)

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      <div className="aura-container">
        <div className="aura-content">
          <div className="aura-wrapper aura">
            <div className="aura-rays-wrapper aura-rays">
              <div className="aura-rainbow-element aura-rainbow"></div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        className="fixed inset-0 -z-20 h-full w-full" // Ensure particles are between aura and content
        quantity={particleQuantity}
        color={particleColor}
        ease={50}
        size={1}
        staticity={50}
        refresh={true}
        vy={0.1}
      />
    </>
  )
}

export default ThemedBackgroundController
