import Typography from "tyjs"
let theme = {
  baseFontSize: `15px`,
  baseLineHeight: 1.4,
  scaleRatio: 2.2,
  headerFontFamily: ["Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "Yu Gothic Medium", "游ゴシック Medium", "YuGothic", "游ゴシック体", "メイリオ"],
  bodyFontFamily: ["Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "Yu Gothic Medium", "游ゴシック Medium", "YuGothic", "游ゴシック体", "メイリオ"],
  bodyGray: 5,
  blockMarginBottom: 1.3,
  breakpoints: {
    "@media screen and (min-width:800px)": {
      baseLineHeight: 1.5,
      baseFontSize: "16px"
    },
  },
  overrideThemeStyles: ({ rhythm }) => ({
    // ".mdcontent > h2" : {
    //   marginTop: rhythm(1.2),
    //   borderBottom: `1px solid #ddd`,
    //   paddingBottom: `0.1em`,
    // },
    "blockquote": {
      marginLeft: 0,
      padding: `10px 0 10px ${rhythm(1.4)}`,
      borderLeft: `${rhythm(3 / 10)} solid rgba(139, 196, 194,0.5)`,
      color: "rgba(0,0,0,0.6)",
      letterSpacing: "0.03rem",
    },
    "blockquote > *": {
      fontStyle: `italic`,

    },
    "blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4": {
      marginTop: 0,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    "@media screen and (min-width: 800px)": {
      "blockquote": {
        marginLeft: 0,
        marginBottom: "1.95rem",
        marginRight: 0,
      },
    },
    "p > strong": {
      letterSpacing: "0.07rem",
    },
    ".mdcontent a": {
      color: `#3080cf`,
    },
    ".mdcontent a:hover": {
      color: `#3078A0`,
      textDecoration: `underline`,
    },
    "ul li": {
      marginBottom: `4px`
    },
    "table": {
      borderCollapse: `collapse`,
      width: `100%`,
    },
    "table th:last-child, table th:last-child" : {
      padding: `8px`,
    },
    "table th:first-child, table td:first-child" : {
      padding: `8px`,
    },
    "table td, table th": {
      border: `1px solid #ddd`,
      padding: `8px`,
    },
    "table tr:nth-child(even)": {
      backgroundColor: `#f2f2f2`,
    },
    "tbody > tr:hover" : {
      backgroundColor: `#ddd`
    },
    "table th": {
      paddingTop: `12px`,
      paddingBottom: `12px`,
      textAlign: `left`,
      backgroundColor: `rgba(36, 191, 80, 0.7)`,
      color: `white`,
    },

    "p code": {
      fontSize: "75%",
    },
    "tt,code": {
      fontSize: "85%",
    },
    "p del": {
      padding: "0 2px",
    },
    "pre": {
      lineHeight: 1.22,
    },
  
  }),
}

const typography = new Typography(theme)

export default typography
