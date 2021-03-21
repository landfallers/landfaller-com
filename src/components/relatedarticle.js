import React from "react";
import { graphql, useStaticQuery,Link } from "gatsby";
import * as style from "./relatedarticle.module.css";

export function RelatedArticle(props) {
  const data = useStaticQuery(graphql`
    query {
      articles: allMdx {
        edges {
          node {
            frontmatter {
              title
              interviewee
              vol
              date(formatString: "YYYY年MM月DD日")
              tags
            }
            slug
          }
        }
      }
    }
  `);
  const posts = data.articles.edges
    .filter((post) => post.node.frontmatter.title !== "")
    .slice(0, 5);
  return (
    <article className={style.relatedWrapper}>
      <h2 className={style.relatedArticle}>最新記事</h2>
      <div>
        {posts.map(({node}) => (
          <article className={style.relatedPost}>
            <div className={style.categoryIcon}>
              {/*将来的にカテゴリーのアイコンを表示させる*/}
            </div>
            {node.frontmatter.vol ? (
              <div className={style.relatedContent}>
                <p className={style.relatedAttribute}>
                  landfall vol.{node.frontmatter.vol}
                  &emsp;{node.frontmatter.interviewee} 研究室
                </p>
                <h3 >
                 <Link to={`/magazines/${node.slug}`} className={style.relatedTitle}>{node.frontmatter.title}</Link>
                </h3>
              </div>
            ) : (
              <div className={style.relatedContent}>
                <p className={style.relatedAttribute}>
                  {node.frontmatter.date}に投稿
                </p>
                <h3 className={style.relatedTitle}>
                <Link to={`/blogs/${node.slug}`} className={style.relatedTitle}>{node.frontmatter.title}</Link>
                </h3>
              </div>
            )}
          </article>
        ))}
      </div>
    </article>
  );
}
