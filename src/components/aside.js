import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as style from "./aside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import CategoryIcon from "../images/category.svg";
export function Aside() {
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
      allMdx {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  const colorCode = data.site.siteMetadata.categoryColor;
  const categorys = [
    {
      title: "理学院",
      color: colorCode.sos,
      url: "/category/理学院/",
    },
    {
      title: "工学院",
      color: colorCode.soe,
      url: "/category/工学院/",
    },
    {
      title: "物質理工学院",
      color: colorCode.mct,
      url: "/category/物質理工学院/",
    },
    {
      title: "情報理工学院",
      color: colorCode.soc,
      url: "/category/情報理工学院/",
    },
    {
      title: "環境・社会理工学院",
      color: colorCode.ses,
      url: "/category/環境・社会理工学院/",
    },
    {
      title: "生命理工学院",
      color: colorCode.lst,
      url: "/category/生命理工学院",
    },
    {
      title: "リベラルアーツ教育研究院",
      color: colorCode.ila,
      url: "/category/リベラルアーツ教育研究院",
    },
    /*
    {
      title: "一覧へ",
      color: colorCode.oth,
      url: "/",
    },
    */
  ];
  const tags = data.allMdx.group.sort(function (a, b) {
    if (a.totalCount < b.totalCount) return 1;
    if (a.totalCount > b.totalCount) return -1;
    return 0;
  });
  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <h2 className={style.title}>
            <CategoryIcon className={style.categoryicon}/>
        
          &nbsp;学院から探す
        </h2>
        {categorys.map(({ title, color, url }) => (
          <Link to={url} className={style.category} key={`aside-${color}`}>
            <span
              className={style.categorycolor}
              style={{ background: color }}
            />
            {title}
          </Link>
        ))}
      </div>
      <div className={style.box}>
        <h2 className={style.title}>
          <FontAwesomeIcon icon={faTags} />
          &ensp;タグ
        </h2>
        {tags.map((node) => (
          <Link to={`/tags/${node.fieldValue}/`} className={style.tags} key={`aside-${node.fieldValue}`}>
            {node.fieldValue}
          </Link>
        ))}
      </div>
    </div>
  );
}
