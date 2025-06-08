'use client'

import * as React from 'react'

import { cn } from '@/components/lib/utils'

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number
  /**
   * Duration of the animation in seconds
   * @default 14
   */
  duration?: number
  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  shineColor?: string | string[]
  /**
   * Whether the border should be animated
   * @default false
   */
  isAnimated?: boolean
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = '#000000',
  isAnimated = false,
  className,
  style,
  ...props
}: ShineBorderProps) {
  const generateGradient = (colors: string | string[]): string => {
    let colorArray: string[]
    if (typeof colors === 'string') {
      colorArray = [colors, 'rgba(255, 255, 255, 0.8)', colors]
    } else if (colors.length === 2) {
      colorArray = [colors[0], colors[1], colors[0]]
    } else {
      colorArray = colors
    }
    return `linear-gradient(to right, ${colorArray.join(',')})`
  }

  return (
    <div
      style={
        {
          '--border-width': `${borderWidth}px`,
          '--duration': `${duration}s`,
          backgroundImage: generateGradient(shineColor),
          backgroundSize: '200% 200%',
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: 'var(--border-width)',
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]',
        isAnimated && 'motion-safe:animate-shine',
        className
      )}
      {...props}
    />
  )
}
