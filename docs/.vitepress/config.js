export default {
  title: "Joanna Blog",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
      nav: [{
              text: "關於我",
              link: "/about"
          },
          {
              text: "生活日誌",
              items: [{
                      text: "閱讀",
                      link: "life/read-note/"
                  },
                  {
                      text: "食譜",
                      link: "life/cookbook/"
                  },
              ],
          },
          {
              text: "技術筆記",
              items: [{
                      text: "前端框架",
                      items: [{
                              text: "Vue",
                              link: "coding/vue/",
                          },
                          {
                              text: "Nuxt",
                              link: "coding/nuxt/",
                          }
                      ],
                  },
                  {
                      text: "閱讀筆記",
                      items: [{
                              text: "忍者開發技巧密探",
                              link: "/javascript/",
                          },
                          {
                              text: "Clean Code 學派的實踐風格",
                              link: "/javascript/",
                          },
                      ],
                  },
              ],
          },
          {
              text: "作品集",
              items: [{
                  text: "9mna-trip",
                  link: "/project/9mna-trip/"
              }, ],
          },
          {
              text: "Gitlab",
              link: "https://gitlab.com/joannayuan0905"
          },
      ],
      sidebar: {
          "/read-note/": [{
              items: [{
                      text: "原子習慣",
                      link: "/read-note/原子習慣"
                  },
                  {
                      text: "複利效應",
                      link: "/read-note/複利效應"
                  },
                  {
                      text: "高情商的刻意練習",
                      link: "/read-note/高情商的刻意練習"
                  },
              ],
          }, ],
          "coding/vue/": [{
              text: "Vue",
              items: [{
                  text: "認識Vue",
                  link: "coding/vue/basic"
              }],
          }, ],
          "project/9mna-trip/": [{
                  text: "介紹",
                  collapsed: false,
                  items: [{
                      text: "User Story",
                      link: "project/9mna-trip/user-story"
                  }],
              },
              {
                  text: "一般功能",
                  collapsed: false,
                  items: [{
                          text: "首頁",
                          link: "project/9mna-trip/general/home"
                      },
                      {
                          text: "登入",
                          link: "project/9mna-trip/general/login"
                      },
                      {
                          text: "功能選單",
                          link: "project/9mna-trip/general/tab-bar"
                      }
                  ],
              },
              {
                  text: "規劃行程",
                  collapsed: false,
                  items: [{
                      text: "我的行程",
                      link: "project/9mna-trip/travel/itinerary"
                  }],
              },
              {
                  text: "多人分帳",
                  collapsed: false,
                  items: [{
                      text: "認識Nuxt",
                      link: "coding/nuxt/basic"
                  }],
              },
          ],
      },
      footer: {
          copyright: 'Copyright © 2023-present <a href="https://gitlab.com/joannayuan0905">Joanna Yuan</a>',
      },
  },
  srcDir: './src',
  outDir: '../public',
  assetsDir: 'static',
  ignoreDeadLinks: true,
  base: "/9mna-blog/",
};