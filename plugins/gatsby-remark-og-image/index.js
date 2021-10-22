const catchy = require('catchy-image')

module.exports = async ({markdownNode, reporter}, pluginOptions ) => {
    // reporter.info(markdownNode.frontmatter.title)
    // if (markdownNode.frontmatter.title === ``) {
    //     return
    // }
    // if (markdownNode.frontmatter.vol) {
    //     return
    // }
    // const result = await catchy.generate({
    //     ...pluginOptions,
    //     output: {
    //         ...pluginOptions.output,
    //         directory: `./static/blogOGP/`,
    //         fileName: `${markdownNode.frontmatter.title}.png`,
    //     },
    //     meta: {
    //         ...pluginOptions.meta, 
    //         title: markdownNode.frontmatter.title
    //     }
    // })
    // reporter.info(`gatsby-remark-og-image: Successful generated: ${result}`)
}


