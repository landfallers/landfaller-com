import React from "react";
import * as style from "./blogPost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { Body } from "../components/bodytext.js";
import Iframely from "../components/iframely.js";
export default function Article({ data, location }) {
  const { frontmatter } = data.mdx;
  return (
    <Layout>
      <Iframely/>
      <Seo
      pagetitle={frontmatter.title}
      pagedesc={frontmatter.preface}
      pagepath={location.pathname}
      />
      <article className={style.contentwrapper}>
        <header style={{marginBottom: "40px"}}>
          <div className={style.top}>{frontmatter.date}に投稿</div>
          <h1 className={style.title}>{frontmatter.title}</h1>
          <div className={style.bottom}>
            <div>
              <div>
                <div className={style.tagbox}>
                  <FontAwesomeIcon
                    icon={faTags}
                    style={{ color: "rgba(0,0,0,0.6)", marginRight: "8px" }}
                  />
                  {frontmatter.tags.map((tag) => (
                    <Link to={`/tags/${tag}`} className={style.tag} key={`blogpost-${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <hr className={style.bar} /> */}
        <Body body={data.mdx.body}/>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id}) {
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        tags
        preface
      }
      body
    }
  }
`;
