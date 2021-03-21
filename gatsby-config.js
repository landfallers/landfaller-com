module.exports = {
  siteMetadata: {
    title: `LANDFALL`,
    description: `東京工業大学生協学生委員会LANDFALLのサイトです。LANDFALLは東工大の研究室紹介冊子LANDFALL誌や毎年新入生に配布するTOKOWALKER誌を作成している組織です。`,
    lang: `ja`,
    locales: `ja_JP`,
    siteUrl: `https:landfaller.com`,
    categoryColor: {
      sos: "#2B439A",
      soe: "#3F9E80",
      mct: "#4D3A50",
      soc: "#AF4978",
      ses: "#A23B21",
      lst: "#656D9B",
      ila: "#445F47",
      oth: "#E89C68",
      blog: "#E89C68",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/publication/blogs`,
      },
      __key: "blogs",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `magazines`,
        path: `${__dirname}/publication/magazines`,
      },
      __key: "magazines",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `siteInfo`,
        path: `${__dirname}/publication/siteInfo`,
      },
      __key: "siteInfo",
    },
  ],
};
