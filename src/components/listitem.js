import React from "react";
import * as style from "./listitem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendarTimes } from "@fortawesome/free-regular-svg-icons";
import { Link, useStaticQuery, graphql } from "gatsby";
import Pdf  from "../images/PDF.svg";
export function ListItem(props) {
  const { items } = props;
  const data = useStaticQuery(graphql`
    query {
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
  `);
  const colorCode = data.site.siteMetadata.categoryColor;
  const categorydict = {
    sos: "理学院",
    soe: "工学院",
    mct: "物質理工学院",
    soc: "情報理工学院",
    ses: "環境・社会理工学院",
    lst: "生命理工学院",
    ila: "リベラルアーツ教育研究院",
  };
  let key = Object.keys(categorydict).filter((key) => {
    return categorydict[key] === items.category;
  });
  if (key.length === 0) {
    key = "blog";
  }
  const itemCategoryColor = colorCode[key];
  return (
    <article className={style.wrapper}>
      <header>
        {items.vol ? (
          <div className={style.header}>
            landfall vol.{items.vol}&emsp;{items.interviewee} 研究室
          </div>
        ) : (
          <div className={style.header}>
            <FontAwesomeIcon
              icon={faCalendarTimes}
              style={{ display: "inline" }}
            />
            <time dateTime="" className={style.date}>
              {items.date}に投稿
            </time>
          </div>
        )}
      </header>
      <h2>
        <Link
          to={items.vol ? `/magazines/${props.slug}` : `/blogs/${props.slug}`}
          className={style.title}
        >
          {items.title}
        </Link>
      </h2>
      <footer className={style.footerbox}>
        <div>
          <div className={style.tagbox}>
            <FontAwesomeIcon
              icon={faTags}
              style={{ color: "rgba(0,0,0,0.6)", marginRight: "8px" }}
            />
            {items.tags.map((tag) => (
              <Link to={`/tags/${tag}/`} className={style.tag} key={tag}>
                {tag}
              </Link>
            ))}
          </div>
          <div className={style.categorybox}>
            <span
              className={style.categorycolor}
              style={{ background: itemCategoryColor }}
            />
            <div className={style.categorytype}>
              <Link to={`/category/${items.category}/`}>{items.category}</Link>
            </div>
          </div>
        </div>
        <div>
          {items.pdf ? (
            <a href={items.pdf.publicURL} className={style.pdfbox}>
              <Pdf/>
            </a>
          ) : (
            ``
          )}
        </div>
      </footer>
    </article>
  );
}
