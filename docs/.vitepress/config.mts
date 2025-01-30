import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs teeeeest",
  description: "first docs",
  base: '/doc_test/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'test2', link: '/test2' }
    ],

    sidebar: [
      {
        text: 'first docssssssssss',
        items: [
          { text: 'abssss', link: '/test1' },
          { text: 'avs', link: '/test2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
