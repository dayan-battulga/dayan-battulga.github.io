/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'DB',
  author: 'Dayan Battulga',
  headerTitle: 'Dayan Battulga',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app', //CHANGE
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`, //CHANGE
  email: 'dayanbattulga8@gmail.com',
  github: 'https://github.com/dayan-battulga',
  linkedin: 'https://www.linkedin.com/in/dayan-battulga',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
}

module.exports = siteMetadata
