const emailX = require('./email-x');

const config = {
  emailX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'ovd-daily': {
    name: 'Daily Report',
    logoSrc: '/files/base/randallreilly/all/image/static/ovd-logo-white.png',
    subscribeLink: 'https://www.overdrive.com/subscribe',
    contactLinks: [
      { href: 'https://www.google.com', label: 'Advertising' },
      { href: 'https://www.google.com', label: 'Editorial' },
    ],
    socialMedia: {
      imagePath: '/files/base/randallreilly/all/image/static/newsletter',
      links: [
        { provider: 'facebook', href: 'https://www.facebook.com/OverdriveTrucking/', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/overdriveupdate', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/overdrive-partner-solutions/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/channel/UCCJiBY50M2ie-QBjdDU4p1A', target: '_blank' },
      ],
    },
  },
  'ccj-daily': {
    name: 'Daily Report',
    logoSrc: '/files/base/randallreilly/all/image/static/ccj-logo-white.png',
    subscribeLink: 'https://www.ccjdigital.com/subscribe',
    contactLinks: [
      { href: 'https://www.google.com', label: 'Advertising' },
      { href: 'https://www.google.com', label: 'Editorial' },
    ],
    socialMedia: {
      imagePath: '/files/base/randallreilly/all/image/static/newsletter',
      links: [
        { provider: 'facebook', href: 'https://www.facebook.com/CCJMagazine/', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/ccjdigital', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/commercial-carrier-journal/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/user/CCJDigital', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
