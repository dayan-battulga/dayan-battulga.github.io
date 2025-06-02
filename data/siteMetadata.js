/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'DB',
  author: 'Dayan Battulga',
  headerTitle: 'Dayan Battulga',
  description: 'hmmm',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app', //CHANGE
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog', //CHANGE
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`, //CHANGE
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`, //CHANGE
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
