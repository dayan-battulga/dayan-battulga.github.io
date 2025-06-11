import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Button } from '@/components/components/ui/button'
import { cn } from '@/components/lib/utils'

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string
  className: string
  description: string
  href?: string
  cta?: string
  background?: ReactNode
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[12rem] grid-cols-3 gap-4 sm:auto-rows-[16rem]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  description,
  href,
  cta,
  background,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
      // light styles
      'bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'dark:bg-background transform-gpu dark:border dark:border-gray-100',
      className
    )}
    {...props}
  >
    {background}
    <div
      className={cn(
        'pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300',
        href && cta && 'group-hover:-translate-y-10'
      )}
    >
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-white">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    {href && cta && (
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
