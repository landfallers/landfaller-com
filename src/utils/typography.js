import Typography from "tyjs"
let theme = {
  baseFontSize: `15px`,
  headerFontFamily: [`Cooper Hewitt`, `sans-serif`],
  bodyFontFamily: [`Cooper Hewitt`, `sans-serif`],
  baseLineHeight: 1.45,
  blockMarginBottom: 0.85,
  breakpoints: {
    "@media screen and (min-width:700px)": {
      // any valid media query.
      scaleRatio: 0.5 ,
      baseLineHeight: 2.5,
      baseFontSize: "20px"
    },
    "@media screen and (min-width:1200px)": {
      scaleRatio: 3 // Override the 800px scale
    },
    "@media screen and (min-width:1500px) and (max-height: 900px)": {
      baseFontSize: "17px", // Override the default base font size
      scaleRatio: 4 // Override the 1200px scale
    }
  },
  overrideThemeStyles: ({ rhythm }) => ({
    a: {
      color: `#3A69A8`,
    },
    blockquote: {
      marginLeft: 0,
      paddingLeft: rhythm(5 / 8),
      borderLeft: `${rhythm(3 / 8)} solid #CDf4f4`,
    },
    "blockquote > *": {
      fontStyle: `italic`,
    },
    "blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4": {
      marginTop: 0,
    },
    "li > p": {
      marginBottom: rhythm(1 / 2),
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
    pre: {
      lineHeight: 1.22,
    },
  }),
}

const typography = new Typography(theme)

export default typography
