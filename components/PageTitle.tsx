import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-5xl leading-15 font-extrabold tracking-tight text-gray-900 sm:leading-12 md:leading-16 dark:text-gray-100">
      {children}
    </h1>
  )
}
