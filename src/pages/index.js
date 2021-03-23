import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

import "../components/layout.scss";
import * as style from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import { SEO } from "../components/seo";

const IndexPage = ({ location }) => {
  return (
    <div className={style.home}>
      <SEO />
      <Header />
      <article className={style.wrapper}>
        <section className={style.top}>
          <StaticImage
            src="../images/indexhero.png"
            alt=""
            placeholder="tracedSVG"
            layout="fullWidth"
            quality={40}
            className={style.pic}
          />
          <div className={style.shadow}></div>
          <div className={style.title}>
            <h1>
              <strong>WELCOME </strong>
              TO THE <strong> LONGEST </strong>
              ESTABLISHED<strong> PUBLISHING</strong> GROUP IN
              <strong> TOKYO TECH</strong>.
            </h1>
          </div>
          <div className={style.wave}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1366 229.5"
              fill="rgb(206, 229, 238)"
            >
              <path
                d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
                opacity=".53"
              />
              <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" />
            </svg>
          </div>
        </section>
        <section className={style.about}>
          <h2 className={style.bar}>
            <strong>LANDFALL</strong>とは
          </h2>
          <div className={style.container}>
            <StaticImage
              src="../images/landfall-ship.png"
              alt="landfallの船"
              loading="lazy"
              layout="fullWidth"
              placeholder="tracedSVG"
              quality={40}
              className={style.ship}
            />
            <p>
              LANDFALL(ランドフォール)は、東京工業大学生活協同組合の学生委員会です。東京工業大学の研究室紹介冊子LANDFALLや新入生に配布するTOKOWALKERを作成しています。東工大の研究室について知りたい、みんなに知ってもらいたいという思いから制作が始まりました。
            </p>
          </div>
        </section>
        <section className={style.food}>
          <div className={style.container}>
            <h2 className={style.bar}>
              <strong>PUBLICATIONS</strong>
            </h2>
            <div className={style.details}>
              <div className={style.detail}>
                <StaticImage
                  src="../images/landfall92.png"
                  alt="landfall92号"
                  placeholder="blurred"
                  loading="lazy"
                  layout="fullWidth"
                  quality={100}
                  className={style.pic}
                />

                <p>
                  東工大の研究室紹介の冊子
                  <br />
                  LANDFALLの部員が研究室にいき、そこでの取材をもとに作成しています。
                </p>
                <Link to={`/magazines`} className={style.btn}>
                  <Button variant="outline-info">LANDFALL本誌を読む</Button>
                </Link>
              </div>
              <div className={style.detail}>
                <StaticImage
                  src="../images/tokowalker21.png"
                  alt="tokowalker21"
                  placeholder="blurred"
                  loading="lazy"
                  layout="fullWidth"
                  quality={100}
                  className={style.pic}
                />

                <p>
                  新入生の「知りたい」がこの一冊に
                  <br />
                  東工大のあれこれについて毎年新入生に向けて作成しています。
                </p>
                <Link to={`/category/tokowalker`} className={style.btn}>
                  <Button variant="outline-info">TOKO WALKERを読む</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={style.join}>
          <div className={style.r1}>
            <div className={style.picbox}>
              <StaticImage
                src="../images/joinus2.JPG"
                alt="landfall部員が議論している風景"
                placeholder="blurred"
                loading="lazy"
                layout="fullWidth"
                quality={100}
                className={style.pic}
              />
              <StaticImage
                src="../images/joinus1.JPG"
                alt="landfall部員の作業風景"
                placeholder="blurred"
                loading="lazy"
                layout="fullWidth"
                quality={100}
                className={style.pic}
              />
            </div>
          </div>
          <div className={style.r2}></div>
          <div className={style.r3}>
            <div className={style.one}>
              <h2 className={style.h2}>新入部員募集中</h2>
            </div>
            <div className={style.two}>
              <p>
                あなたもLANDFALLに入って一緒に活動しませんか。LANFALLは部員を募集しています。いつでもどなたでも大歓迎いたします。
              </p>
              <Link to={`/category/新歓`} className={style.btn}>
                <Button variant="outline-light" size="lg">
                  LANDFALLの新歓について
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </article>
      <figure>
        <StaticImage
          src="../images/footer.png"
          alt=""
          placeholder="blurred"
          loading="lazy"
          layout="fullWidth"
          quality={50}
          className={style.footpic}
        />
      </figure>
      <Footer />
    </div>
  );
};

export default IndexPage;
