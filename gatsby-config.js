const { config } = require("@fortawesome/fontawesome-svg-core");
require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `LANDFALL`,
    description: `東京工業大学生協学生委員会LANDFALLのサイトです。LANDFALLは東工大の研究室紹介冊子LANDFALL誌や毎年新入生に配布するTOKOWALKER誌を作成している組織です。`,
    lang: `ja`,
    locale: `ja_JP`,
    siteUrl: `https://landfaller.com`,
    categoryColor: {
      sos: "#FF3F3A",
      soe: "#62FF5E",
      mct: "#FA8F12",
      soc: "#E6DF4D",
      ses: "#57E8FA",
      lst: "#2C64FA",
      oth: "#A80AFF",
      blog: "#FF8DFF",
      ila: "#2EB362",
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-6HGFXL5J96"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LANDFALL|東京工業大学生協学生委員会`,
        short_name: `LANDFALL`,
        start_url: `/`,
        background_color: `#e9e9e9`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: require.resolve(`./plugins/gatsby-remark-og-image`),
            options: {
              output: {
                directory: '',
                fileName: 'thumbnail.png'
              },
              image: {
                width: 1200,
                height: 630,
                backgroundImage: './static/base.png'
              },
              style: {
                title: {
                  fontFamily: 'Noto Sans JP',
                  fontColor: '#fff',
                  fontWeight: 'Bold',
                  fontSize: 64,
                  paddingTop: 100,
                  paddingBottom: 200,
                  paddingLeft: 150,
                  paddingRight: 150
                },
                author: {
                  fontFamily: 'Noto Sans JP',
                  fontColor: '#fff',
                  fontWeight: 'Bold',
                  fontSize: 42,
                }
              },
              meta: {
                title: '',
                author: ''
              },
              fontFile: [
                {
                  path: require.resolve('./src/assets/fonts/NotoSansJP-Bold.otf'),
                  family: 'Noto Sans JP',
                  weight: 'Bold',
                },
              ],
              iconFile: require.resolve('./static/null.png'),
              timeout: 10000,
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
