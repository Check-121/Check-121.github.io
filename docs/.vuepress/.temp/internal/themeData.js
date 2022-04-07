export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "前端标准化",
      "link": "/stardard/1.Lint规范和配置.md"
    },
    {
      "text": "排序算法",
      "link": "/sorting_algorithm/1.冒泡排序.md"
    },
    {
      "text": "路的博客",
      "children": [
        {
          "text": "Github",
          "link": "https://github.com/Check-121"
        },
        {
          "text": "掘金",
          "link": "https://juejin.cn/"
        }
      ]
    }
  ],
  "sidebar": {
    "/stardard/": [
      "/stardard/1.Lint规范和配置.md",
      "/stardard/2.Prettier规范和配置.md",
      "/stardard/3.Git-commit规范.md",
      "/stardard/4.GitFlow规范.md"
    ],
    "/sorting_algorithm/": [
      "/sorting_algorithm/1.冒泡排序.md",
      "/sorting_algorithm/2.插入排序.md",
      "/sorting_algorithm/3.选择排序.md",
      "/sorting_algorithm/4.希尔排序.md",
      "/sorting_algorithm/5.快速排序.md",
      "/sorting_algorithm/6.归并排序.md",
      "/sorting_algorithm/7.堆排序.md",
      "/sorting_algorithm/8.计数排序.md",
      "/sorting_algorithm/9.基数排序.md",
      "/sorting_algorithm/10.桶排序.md"
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
