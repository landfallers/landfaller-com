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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-6HGFXL5J96",
        ],
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
        icon: `src/images/icon.png`
      }
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
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            // options: {
            //   // Class prefix for <pre> tags containing syntax highlighting;
            //   // defaults to 'language-' (e.g. <pre class="language-js">).
            //   // If your site loads Prism into the browser at runtime,
            //   // (e.g. for use with libraries like react-live),
            //   // you may use this to prevent Prism from re-processing syntax.
            //   // This is an uncommon use-case though;
            //   // If you're unsure, it's best to use the default value.
            //   classPrefix: "language-",
            //   // This is used to allow setting a language for inline code
            //   // (i.e. single backticks) by creating a separator.
            //   // This separator is a string and will do no white-space
            //   // stripping.
            //   // A suggested value for English speakers is the non-ascii
            //   // character '›'.
            //   inlineCodeMarker: null,
            //   // This lets you set up language aliases.  For example,
            //   // setting this to '{ sh: "bash" }' will let you use
            //   // the language "sh" which will highlight using the
            //   // bash highlighter.
            //   aliases: {},
            //   // This toggles the display of line numbers globally alongside the code.
            //   // To use it, add the following line in gatsby-browser.js
            //   // right after importing the prism color scheme:
            //   //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
            //   // Defaults to false.
            //   // If you wish to only show line numbers on certain code blocks,
            //   // leave false and use the {numberLines: true} syntax below
            //   showLineNumbers: false,
            //   // If setting this to true, the parser won't handle and highlight inline
            //   // code used in markdown i.e. single backtick code like `this`.
            //   noInlineHighlight: false,
            //   // This adds a new language definition to Prism or extend an already
            //   // existing language definition. More details on this option can be
            //   // found under the header "Add new language definition or extend an
            //   // existing language" below.
            //   languageExtensions: [
            //     {
            //       language: "superscript",
            //       extend: "javascript",
            //       definition: {
            //         superscript_types: /(SuperType)/,
            //       },
            //       insertBefore: {
            //         function: {
            //           superscript_keywords: /(superif|superelse)/,
            //         },
            //       },
            //     },
            //   ],
            //   // Customize the prompt used in shell output
            //   // Values below are default
            //   prompt: {
            //     user: "root",
            //     host: "localhost",
            //     global: false,
            //   },
            //   // By default the HTML entities <>&'" are escaped.
            //   // Add additional HTML escapes by providing a mapping
            //   // of HTML entities and their escape value IE: { '}': '&#123;' }
            //   escapeEntities: {},
            // },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/ 
        }
      }
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
