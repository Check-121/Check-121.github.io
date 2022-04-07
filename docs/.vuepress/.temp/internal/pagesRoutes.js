import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-a203403e","/sorting_algorithm/1.%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html",{"title":"冒泡排序"},["/sorting_algorithm/1.冒泡排序.html","/sorting_algorithm/1.%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F","/sorting_algorithm/1.冒泡排序.md","/sorting_algorithm/1.%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.md"]],
  ["v-926c3650","/sorting_algorithm/10.%E6%A1%B6%E6%8E%92%E5%BA%8F.html",{"title":"桶排序"},["/sorting_algorithm/10.桶排序.html","/sorting_algorithm/10.%E6%A1%B6%E6%8E%92%E5%BA%8F","/sorting_algorithm/10.桶排序.md","/sorting_algorithm/10.%E6%A1%B6%E6%8E%92%E5%BA%8F.md"]],
  ["v-c9f49908","/sorting_algorithm/2.%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.html",{"title":"插入排序"},["/sorting_algorithm/2.插入排序.html","/sorting_algorithm/2.%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F","/sorting_algorithm/2.插入排序.md","/sorting_algorithm/2.%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.md"]],
  ["v-291b5eb4","/sorting_algorithm/3.%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.html",{"title":"选择排序"},["/sorting_algorithm/3.选择排序.html","/sorting_algorithm/3.%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F","/sorting_algorithm/3.选择排序.md","/sorting_algorithm/3.%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.md"]],
  ["v-4fe57e91","/sorting_algorithm/4.%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.html",{"title":"希尔排序"},["/sorting_algorithm/4.希尔排序.html","/sorting_algorithm/4.%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F","/sorting_algorithm/4.希尔排序.md","/sorting_algorithm/4.%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.md"]],
  ["v-e8f2c7e4","/sorting_algorithm/5.%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html",{"title":"快速排序"},["/sorting_algorithm/5.快速排序.html","/sorting_algorithm/5.%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F","/sorting_algorithm/5.快速排序.md","/sorting_algorithm/5.%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.md"]],
  ["v-10bab225","/sorting_algorithm/6.%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html",{"title":"归并排序"},["/sorting_algorithm/6.归并排序.html","/sorting_algorithm/6.%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F","/sorting_algorithm/6.归并排序.md","/sorting_algorithm/6.%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.md"]],
  ["v-e51c7a84","/sorting_algorithm/7.%E5%A0%86%E6%8E%92%E5%BA%8F.html",{"title":"堆排序"},["/sorting_algorithm/7.堆排序.html","/sorting_algorithm/7.%E5%A0%86%E6%8E%92%E5%BA%8F","/sorting_algorithm/7.堆排序.md","/sorting_algorithm/7.%E5%A0%86%E6%8E%92%E5%BA%8F.md"]],
  ["v-83f7e76e","/sorting_algorithm/8.%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.html",{"title":"计数排序"},["/sorting_algorithm/8.计数排序.html","/sorting_algorithm/8.%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F","/sorting_algorithm/8.计数排序.md","/sorting_algorithm/8.%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.md"]],
  ["v-39deb5cd","/sorting_algorithm/9.%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F.html",{"title":"基数排序"},["/sorting_algorithm/9.基数排序.html","/sorting_algorithm/9.%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F","/sorting_algorithm/9.基数排序.md","/sorting_algorithm/9.%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F.md"]],
  ["v-cb3286c0","/stardard/1.Lint%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE.html",{"title":"Lint规范和配置"},["/stardard/1.Lint规范和配置.html","/stardard/1.Lint%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE","/stardard/1.Lint规范和配置.md","/stardard/1.Lint%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE.md"]],
  ["v-0d6a42e2","/stardard/2.Prettier%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE.html",{"title":"Prettier 规范和配置"},["/stardard/2.Prettier规范和配置.html","/stardard/2.Prettier%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE","/stardard/2.Prettier规范和配置.md","/stardard/2.Prettier%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE.md"]],
  ["v-0e085ea6","/stardard/3.Git-commit%E8%A7%84%E8%8C%83.html",{"title":"Git Commit 规范"},["/stardard/3.Git-commit规范.html","/stardard/3.Git-commit%E8%A7%84%E8%8C%83","/stardard/3.Git-commit规范.md","/stardard/3.Git-commit%E8%A7%84%E8%8C%83.md"]],
  ["v-7398ba1e","/stardard/4.GitFlow%E8%A7%84%E8%8C%83.html",{"title":"GitFlow 规范"},["/stardard/4.GitFlow规范.html","/stardard/4.GitFlow%E8%A7%84%E8%8C%83","/stardard/4.GitFlow规范.md","/stardard/4.GitFlow%E8%A7%84%E8%8C%83.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
