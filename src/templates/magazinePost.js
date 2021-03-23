import React from "react";
import * as style from "./magazinePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/layout";
import { RelatedArticle } from "../components/relatedarticle";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Button } from "react-bootstrap";
import { SEO } from "../components/seo";
export default function Article({ data, location }) {
  const { frontmatter } = data.mdx;
  const image = getImage(frontmatter.facephoto);
  return (
    <Layout>
          <SEO
      pagetitle={frontmatter.title}
      pagedesc={frontmatter.preface}
      pagepath={location.pathname}
      />
      <article className={style.contentwrapper}>
        <header>
          <div className={style.top}>LANDFALL Vol.{frontmatter.vol}</div>
          <h1 className={style.title}>{frontmatter.title}</h1>
          <div className={style.bottomContainer}>
            <div id={style.categoryBox}>
              <div className={style.categorybox}>
                <span
                  className={style.categorycolor}
                  style={{ background: "#aa5465" }}
                />
                <div className={style.categorytype}>
                  <Link to={`/category/${frontmatter.category}`}>{frontmatter.category}</Link>
                  <span className={style.slash} />
                  {frontmatter.url ? (
                    <a href={frontmatter.url}>
                      {frontmatter.interviewee} 研究室
                    </a>
                  ) : (
                    `${frontmatter.interviewee} 研究室`
                  )}
                </div>
              </div>
              <div>
                <div className={style.tagbox}>
                  <FontAwesomeIcon
                    icon={faTags}
                    style={{ color: "rgba(0,0,0,0.6)", marginRight: "8px" }}
                  />
                  {frontmatter.tags.map((tag) => (
                    <Link to={`/tags/${tag}`} className={style.tag} key={`magazinepost-${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </div>

                {data.mdx.wordCount.words ? (
                  <div className={style.pdfbox}>
                    <a href={frontmatter.pdf.publicURL}>pdfで読む</a>
                  </div>
                ) : (
                  ``
                )}
              </div>
            </div>
            {data.mdx.wordCount.words ? (
              <>
                <div id={style.facePhotoBox}>
                  <GatsbyImage image={image} alt={frontmatter.interviewee} />
                </div>
                <div id={style.careerBox}>
                  <span className={style.careerLabo}>
                    {frontmatter.interviewee} 先生　
                  </span>
                  {frontmatter.career}
                </div>
              </>
            ) : (
              ``
            )}
          </div>
        </header>
        <section className={style.preface}>{frontmatter.preface}</section>
        {data.mdx.wordCount.words ? (
          <section className={style.body}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </section>
        ) : (
          <div className={style.btnbox}>
            <div className={style.pdfbtn}>
              <Button
                variant="outline-info"
                size="lg"
                href={frontmatter.pdf.publicURL}
              >
                PDFで読む
              </Button>
            </div>
          </div>
        )}
      </article>
      <RelatedArticle />
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        facephoto {
          childImageSharp {
            gatsbyImageData(
              width: 160
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        pdf {
          publicURL
        }
        category
        career
        interviewee
        title
        tags
        preface
        vol
        url
      }
      body
      wordCount {
        words
      }
    }
  }
`;