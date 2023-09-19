export default {
  title: "Joanna Blog",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
    lastUpdated: true,
    nav: [
      { text: "關於", link: "/getting-started" },
      { text: "生活日誌", link: "/life/" },
      { text: "作品集", link: "/project/" },
      {
        text: "Dropdown Menu",
        items: [{ text: "Item A", link: "/item-1" }],
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
    },
    footer: {
      copyright:
        'Copyright © 2023-present <a href="https://gitlab.com/joannayuan0905">Joanna Yuan</a>',
    },
  },
};
