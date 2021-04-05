import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Pagenation } from "../components/pagination";
import { ListItem } from "../components/listitem";
import { SEO } from "../components/seo";
import * as style from "./tags.module.css";
import { ListHeader } from "../components/listheader";
export default function blogsList({ data, pageContext, location }) {
  return (
    <Layout>
        <SEO 
      pagetitle={`CATEGORY: 「${pageContext.tag}`}
      pagedesc={`「${pageContext.tag}」の記事。`}
      pagepath={location.pathname}/>
      <div className={style.wrapper}>
        <ListHeader
          pageContext={pageContext}
          title={pageContext.tag}
          discription={``}
          pre="tag"
        />
        {data.allMdx.edges.map(({ node }) => (
          <ListItem
            items={node.frontmatter}
            slug={node.slug}
            key={`tags-${node.slug}`}
          />
        ))}
      </div>
      <Pagenation pageContext={pageContext} slug={`/tags/${pageContext.tag}/`} />
    </Layout>
  );
}

export const query = graphql`
  query($tag: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___vol, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date
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
`;
