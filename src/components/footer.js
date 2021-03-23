import React from "react";
import { Link } from "gatsby";
import * as style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.logobox}>
          <Link to={`/`}>
            <img
              src={`/images/landfall-title2.svg`}
              className={style.logo}
              alt="landfall"
            />
          </Link>
        </div>
        <div className={style.links}>
          <div className={style.brand}>
            <a href="https://forms.gle/8RDb5DC3qKwHBSQs5">
              <FontAwesomeIcon icon={faDiscord} size="2x" color="#99AAB5" />
            </a>
            <a href="https://twitter.com/LANDFALL_PR?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
            </a>
          </div>
          <div className={style.toalign}>
            <Link to={`/aboutsite/`}>サイトについて</Link>
            <a href="https://google.com">お問い合わせ</a>
          </div>
          <div className={style.toalign}>
            <Link to={`/blogs/`}>BLOG</Link>
            <Link to={`/magazines/`}>MAGAZINE</Link>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <FontAwesomeIcon icon={faCopyright} /> 東京工業大学
        生協学生委員会LANDFALL編集委員会
      </div>
    </footer>
  );
}
