import siteMetadata from './siteMetadata'

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  source?: string
}

const projectsData: Project[] = [
  {
    title: 'Signisa',
    description: `Sign Language Teaching Application`,
    imgSrc: '/static/images/p_website.png',
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    source: siteMetadata.siteRepo,
  },
  {
    title: 'This website lol',
    description: `this is gonna take me forever to make`,
    imgSrc: '/static/images/p_website.png',
    href: 'https://www.youtube.com',
    source: 'https://github.com/dayan-battulga/personal-website',
  },
]

export default projectsData
