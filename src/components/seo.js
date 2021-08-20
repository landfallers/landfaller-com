import React from "react"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"

export function Seo(props) {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                description
                lang
                title
                siteUrl
                locale
            }
        }
    }
    `)
    const title = props.pagetitle ? `${props.pagetitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
    const description = props.pagedesc || data.site.siteMetadata.description
    const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`: data.site.siteMetadata.siteUrl
    const imgurl = props.pageimg
    ? `${data.site.siteMetadata.siteUrl}${props.pageimg}` 
    : props.blogimg || `${data.site.siteMetadata.siteUrl}/thumb.png`
    const imgw = props.pageimgw || 1280
    const imgh = props.pageimgh || 640

    return (
    <Helmet>
        <html lang={ data.site.siteMetadata.lang } prefix="og: https://ogp.me/ns#" />
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link rel="canonical" href={url}/>
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={data.site.siteMetadata.locale} />
        {/* <meta property="og:app_id" content={data.site.siteMetadata.fbappid} /> */}

        <meta property="og:image" content={imgurl} />
        <meta property="og:image:width" content={imgw} />
        <meta property="og:image:height" content={imgh} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LANDFALL_PR"/>
    </Helmet>
    )
}

