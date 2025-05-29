interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Signisa',
    description: `Sign Language Teaching Application`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'This website lol',
    description: `this is gonna take me forever to make`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.youtube.com',
  },
]

export default projectsData
