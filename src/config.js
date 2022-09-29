module.exports = {
  siteTitle: 'Yash Singh | Web Developer ',
  siteDescription:
    'Yash Singh is a Web Developer, who is passionate about learning new things.',
  siteKeywords:
    'Yash Singh, Yash, Singh, yashsingh14, software developer, software engineer, content freelancer, color blast, cube ninja game, web developer, java developer, spotify clone, jaipur,',
  siteUrl: 'https://yashjri.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Yash Singh',
  location: 'Jaipur, India',
  email: 'yashsingh0675@gmail.com',
  github: 'https://github.com/yashjri',
  twitterHandle: '@yash23611061',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/yashjri',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yash-s-79352b220/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its.yashsingh__',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yashsingh14_',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
