export default {
  title: "Joanna Blog",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "關於", link: "/about" },
      {
        text: "生活",
        items: [
          { text: "閱讀筆記", link: "/read-note/" },
          { text: "食譜", link: "/read-note/" },
        ],
      },
      {
        text: "學習筆記",
        items: [
          {
            text: "技術",
            items: [
              {
                text: "Javascript",
                link: "coding/javascript/",
              },
              {
                text: "Vue",
                link: "coding/vue/",
              },
              {
                text: "Nuxt",
                link: "coding/nuxt/",
              },
              {
                text: "HTML + CSS",
                link: "coding/css/",
              },
              {
                text: "其他",
                link: "coding/other/",
              },
            ],
          },
          {
            text: "練習",
            items: [
              {
                text: "JS30",
                link: "/javascript/",
              },
            ],
          },
          {
            text: "工具書",
            items: [
              {
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
        items: [
          { text: "work", link: "/project/" },
          { text: "slide project", link: "/vue/" },
        ],
      },
      { text: "Gitlab", link: "https://gitlab.com/joannayuan0905" },
    ],
    sidebar: {
      "/life/": [
        {
          text: "Guide",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      "/read-note/": [
        {
          // text: "Guide",
          items: [
            { text: "原子習慣", link: "/read-note/原子習慣" },
            { text: "複利效應", link: "/read-note/複利效應" },
            { text: "高情商的刻意練習", link: "/read-note/高情商的刻意練習" },
          ],
        },
      ],
      "coding/vue/": [
        {
          text: "Vue",
          items: [{ text: "認識Vue", link: "coding/vue/basic" }],
        },
      ],
      "coding/javascript/": [
        {
          text: "Javascript",
          items: [
            { text: "型別", link: "" },
            { text: "ES6", link: "" },
            { text: "Event Loop", link: "" },
            { text: "AJAX", link: "" },
            { text: "Promise", link: "" },
            { text: "Immutability", link: "" },
            { text: "Pure Functions", link: "" },
            { text: "遞迴", link: "" },
            { text: "閉包", link: "" },
            { text: "閉包", link: "" },
            { text: "Array Methods", link: "array-methods" },
          ],
        },
        {
          text: "CSS",
          items: [
            { text: "Box Model", link: "" },
            { text: "BFC", link: "" },
            { text: "Reflow", link: "" },
          ],
        },

        {
          text: "設計模式",
          items: [{ text: "Functional Programming", link: "" }],
        },
        {
          text: "網路",
          items: [{ text: "指令", link: "" }],
        },
      ],
    },
    footer: {
      copyright:
        'Copyright © 2023-present <a href="https://gitlab.com/joannayuan0905">Joanna Yuan</a>',
    },
  },
};
