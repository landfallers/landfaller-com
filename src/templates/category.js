import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Pagenation } from "../components/pagination";
import { ListItem } from "../components/listitem";
import { SEO } from "../components/seo";
import * as style from "./category.module.css";
import { ListHeader } from "../components/listheader";
export default function blogsList({ data, pageContext, location }) {
  return (
    <Layout>
      <SEO 
      pagetitle={`CATEGORY: 「${pageContext.category}`}
      pagedesc={`「${pageContext.category}」　カテゴリーの記事。`}
      pagepath={location.pathname}/>
      <div className={style.wrapper}>
        <ListHeader
          pageContext={pageContext}
          title={pageContext.category}
          discription={``}
          pre="category"
        />
        {data.allMdx.edges.map(({ node }) => (
          <ListItem
            items={node.frontmatter}
            slug={node.slug}
            key={`category-${node.slug}`}
          />
        ))}
      </div>
      <Pagenation pageContext={pageContext} slug={`/category/${pageContext.category}/`} />
    </Layout>
  );
}

export const query = graphql`
  query($category: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
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
