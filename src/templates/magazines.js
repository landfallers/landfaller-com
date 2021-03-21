import React from "react"
import { graphql} from "gatsby"
import { Layout } from "../components/layout"
import { Pagenation } from "../components/pagination";
import { ListItem } from "../components/listitem";
import * as style from "./magazines.module.css";
import { ListHeader } from "../components/listheader";
export default function blogsList({ data, pageContext}) {
    return (
      <Layout>
        <div className={style.wrapper}>
          <ListHeader
          pageContext={pageContext}
          title="LANDFALL誌"
          discription="LANDFALL誌はLANDFALL編集委員会が創設された当初からすべての研究室の記事を書くということを目標に作成してきました。"
          />
          {
          data.allFile.edges.map(({node}) => (
            <ListItem  items={node.childMdx.frontmatter} slug={node.childMdx.slug}/>
          ))
        }
        </div>
        <Pagenation pageContext={pageContext} slug={`/magazines/`} />
      </Layout>
    )
  }
  export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allFile(
      filter: {sourceInstanceName: {eq: "magazines"}, internal: {mediaType: {eq: "text/mdx"}}}
      sort: {fields: childrenMdx___frontmatter___vol, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              vol
              title
              tags
              category
              interviewee
              pdf {
                publicURL
              }
            }
            slug
          }
        }
      }
    }
  }
`  