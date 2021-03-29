import React from "react";
import * as style from "./magazinePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/layout";
import { RelatedArticle } from "../components/relatedarticle";
import { Body } from "../components/bodytext.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Button } from "react-bootstrap";
import { SEO } from "../components/seo";
export default function Article({ data, location }) {
  const { frontmatter } = data.mdx;
  const image = getImage(frontmatter.facephoto);
  const colorCode = data.site.siteMetadata.categoryColor;
  const categorydict = {
    sos: "理学院",
    soe: "工学院",
    mct: "物質理工学院",
    soc: "情報理工学院",
    ses: "環境・社会理工学院",
    lst: "生命理工学院",
    ila: "リベラルアーツ研究教育院",
  };
  let key = Object.keys(categorydict).filter((key) => {
    return categorydict[key] === frontmatter.category;
  });
  if (key.length === 0) {
    key = "blog";
  }
  const itemCategoryColor = colorCode[key];
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
                  style={{ background: itemCategoryColor }}
                />
                <div className={style.categorytype}>
                  <Link to={`/category/${frontmatter.category}`}>
                    {frontmatter.category}
                  </Link>
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
                    <Link
                      to={`/tags/${tag}`}
                      className={style.tag}
                      key={`magazinepost-${tag}`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                {data.mdx.wordCount.words ? (
                  <div className={style.pdfbtn}>
                    <Button
                      variant="outline-success"
                      href={frontmatter.pdf.publicURL}
                    >
                      PDFで読む
                    </Button>
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
          <Body body={data.mdx.body}/>
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
    site {
      siteMetadata {
        categoryColor {
          blog
          ila
          lst
          mct
          oth
          ses
          soc
          soe
          sos
        }
      }
    }
  }
`;
