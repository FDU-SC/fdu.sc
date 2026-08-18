import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Fudan Supercomputing Team",
  description: "FDUSC",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/fudan-seal-x-fdusc.svg',
      dark: '/fudan-seal-x-fdusc-dark.svg',
      alt: 'FDUSC logo'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: '战队成员', link: '/team-members' },
      { text: '团队成就', link: '/team-achivements' },
      { text: '联系我们', link: '/contact-us' }
    ],

    sidebar: [
      {
        text: 'Team',
        items: [
          { text: '战队成员', link: '/team-members' },
          { text: '团队成就', link: '/team-achivements' },
          { text: '联系我们', link: '/contact-us' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FDU-SC' }
    ]
  }
})
