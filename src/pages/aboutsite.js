import React from "react";
import * as style from "./aboutsite.module.css";
import { graphql} from "gatsby";
import { Layout } from "../components/layout";
import { RelatedArticle } from "../components/relatedarticle";
import { MDXRenderer } from "gatsby-plugin-mdx";
export default function AboutSite({ data }) {
  const { frontmatter } = data.mdx;
  return (
    <Layout>
      <article className={style.contentwrapper}>
        <header>
          <div className={style.top}>{frontmatter.jaDate}に更新</div>
          <h1 className={style.title}>{frontmatter.title}</h1>
        </header>
        <hr className={style.bar} />
        <section className={style.body}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </section>
      </article>
      <RelatedArticle />
    </Layout>
  );
}

export const query = graphql`
  query {
    mdx(slug: { eq: "aboutsite/" }) {
      body
      frontmatter {
        title
        jaDate: date(formatString: "YYYY年MM月DD日")
        date
      }
    }
  }
`;
