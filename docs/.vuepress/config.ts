import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions, BundlerConfig } from 'vuepress'


export default defineUserConfig<DefaultThemeOptions, BundlerConfig>({
  // 站点配置
  lang: 'en-US',
  title: `CheckLu's Blog`,
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/notebook.svg',
    navbar:[
        {text: '首页', link: '/'},
        {
            text: '前端规范',
            link: '/stardard/1.Lint规范和配置.md',
        },
        {
            text: '常用笔记',
            link: '/work_note/1.Git常用.md',
        },
        { text: '排序算法', link: '/sorting_algorithm/1.冒泡排序.md' },
        { 
            text: '路的博客', 
            children: [
                { text: 'Github', link: 'https://github.com/Check-121' },
                { text: '掘金', link: 'https://juejin.cn/' }
            ]
        },
    ],
    sidebar: {
        // {
        //     text: '欢迎学习',
        //     link: '/page1/',
        //     collapsible: false, // 折叠侧边栏
        //     children: [
        //         { text: "github", link: "https://github.com" },
        //         { text: "baidu", link: "https://baidu.com" },
        //         { text: "page2", link: "/page1/page2.md" },
        //     ]
        // },
        '/stardard/': ["/stardard/1.Lint规范和配置.md","/stardard/2.Prettier规范和配置.md","/stardard/3.Git-commit规范.md","/stardard/4.GitFlow规范.md"],
        '/sorting_algorithm/': ["/sorting_algorithm/1.冒泡排序.md","/sorting_algorithm/2.插入排序.md","/sorting_algorithm/3.选择排序.md","/sorting_algorithm/4.希尔排序.md","/sorting_algorithm/5.快速排序.md","/sorting_algorithm/6.归并排序.md","/sorting_algorithm/7.堆排序.md","/sorting_algorithm/8.计数排序.md","/sorting_algorithm/9.基数排序.md","/sorting_algorithm/10.桶排序.md"],
        '/work_note/': ["/work_note/1.Git常用.md"]
    }
  },
})