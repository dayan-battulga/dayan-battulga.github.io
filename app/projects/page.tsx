import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { BlurFade } from '@/components/magicui/blur-fade'

export const metadata = genPageMetadata({ title: 'Projects' })

const cardColors = [
  'from-sky-200 dark:from-sky-800',
  'from-violet-200 dark:from-violet-800',
  'from-rose-200 dark:from-rose-800',
  'from-amber-200 dark:from-amber-800',
]

export default function Projects() {
  return (
    <>
      <BlurFade delay={0.2}>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white">
              Projects
            </h1>
          </div>
          <div className="container py-12">
            <div className="-m-4">
              {projectsData.map((d, index) => (
                <BlurFade key={d.title} delay={0.3 + index * 0.1}>
                  <Card
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                    source={d.source}
                    WIP={d.WIP}
                    color={cardColors[index % cardColors.length]}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  )
}
