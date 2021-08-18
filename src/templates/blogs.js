import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Pagenation } from "../components/pagination";
import { ListItem } from "../components/listitem";
import * as style from "./blogs.module.css";
import { ListHeader } from "../components/listheader";
export default function blogsList({ data, pageContext, location }) {
  return (
    <Layout>
      <SEO
      pagetitle="BLOG"
      pagedesc="LANDFALL編集委員会の部員が作成しているブログです。新歓の情報や大学のこと、landfall部員の日常についていろいろ記事にしてみました。"
      pagepath={location.pathname}

      />
      <div className={style.wrapper}>
        <ListHeader
          pageContext={pageContext}
          title="LANDFALL BLOG"
          discription="LANDFALL編集委員会の部員が作成しているブログです。新歓の情報や大学のこと、landfall部員の日常についていろいろ記事にしてみました。"
        />
        {data.allFile.edges.map(({ node }) => (
          <ListItem
            items={node.childMdx.frontmatter}
            slug={node.childMdx.slug}
            key={`blogs-${node.childMdx.slug}`}
          />
        ))}
      </div>
      <Pagenation pageContext={pageContext} slug={`/blogs/`} />
    </Layout>
  );
}
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blogs" }
        internal: { mediaType: { eq: "text/mdx" } }
      }
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              tags
              date
              category
            }
            slug
          }
        }
      }
    }
  }
`;
