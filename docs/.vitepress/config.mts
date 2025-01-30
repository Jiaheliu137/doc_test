import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "最左上角的加粗黑体即为标题",
  description: "随便写点介绍",
  // 显示上一次更新
  lastUpdated: true,
  //baseurl即为自己仓库的名字
  base: '/doc_test/',
  // 接入谷歌站点分析，google analysis-左下角管理-数据收集和修改-数据流，可以创建新的监控站点，得到代码替换掉G-4BF04JZ4L9即可
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4BF04JZ4L9' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4BF04JZ4L9');`
    ]
  ],
  themeConfig: {
    //增加编辑当前页面按钮
    editLink: {
      pattern: 'https://github.com/Jiaheliu137/doc_test/tree/main/docs/:path'
    },
    //增加搜索功能
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    //头部栏
    nav: [
      { text: '首页home', link: '/' },
      { text: '随便娶个名字', link: '/random.md' },
      { text: '随便加个链接', link: '/原index.md' }
    ],
    //侧边栏，侧边栏中每个大括号之间的内容渲染的时候会自动带分割线，text内容会被加粗显示，类似于每一个分块的标题
    sidebar: [
      {
        text: '第一块',
        items: [
          { text: '随便写名字', link: '/test1' },
          { text: 'random name', link: '/test2' }
        ]
      },
      {
        text: '第二块',
        items: [
          { text: '取名好难', link: '/test3' },
          { text: '懒得想', link: '/test4' }
        ]
      },
      {
        text: '第三块',
        items: [
          { text: '测试', link: '/test5' },
          { text: '乱写得了', link: '/test6' }
        ]
      },
      {
        text: '插入外部链接也可以',
        items: [
          { text: '这是一个外部链接', link: 'https://github.com/Jiaheliu137/doc_test' }
        ]
      }
    ],

    //社交链接，可以改为自己的，默认为vitepress链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})


