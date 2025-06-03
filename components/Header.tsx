'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { BlurFade } from './magicui/blur-fade'
import { motion, LayoutGroup } from 'framer-motion'

const Header = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const pathname = usePathname()

  let headerClass = 'flex items-center w-full justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <BlurFade
        key="nav-bar"
        delay={0.1}
        inView
        className="flex w-full items-center justify-between"
      >
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between text-gray-200 dark:text-white">
            {typeof siteMetadata.headerTitle === 'string' ? (
              <>
                <div className="hidden h-6 pb-8 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
                <div className="h-6 text-6xl font-semibold sm:hidden">DB</div>
              </>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <div
            className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto pr-1 sm:flex md:max-w-72 lg:max-w-96"
            onMouseLeave={() => setHoveredPath(null)}
          >
            <LayoutGroup>
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((navLink) => {
                  const isActive = pathname === navLink.href
                  const isHovered = hoveredPath === navLink.href

                  return (
                    <div
                      key={navLink.title}
                      onMouseEnter={() => setHoveredPath(navLink.href)}
                      className="relative m-1"
                    >
                      <Link
                        href={navLink.href}
                        className={`block rounded-md px-3 py-1.5 font-medium transition-colors duration-150 ${
                          isActive || isHovered
                            ? 'text-gray-200 dark:text-white'
                            : 'text-gray-100 dark:text-white'
                        }`}
                      >
                        {navLink.title}
                      </Link>
                      {(isHovered || (isActive && !hoveredPath)) && (
                        <motion.div
                          className="bg-light-gray-100/70 dark:bg-light-gray-200/50 absolute inset-0 -z-10 rounded-md"
                          layoutId="activeLinkBackground"
                          animate={{ scale: isHovered ? 1.1 : 1 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  )
                })}
            </LayoutGroup>
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </BlurFade>
    </header>
  )
}

export default Header
