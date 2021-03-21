import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "../components/layout.scss";
import * as style from "./index.module.css";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Button, Card } from "react-bootstrap";

const IndexPage = () => {
  return (
    <div className={style.home}>
      <Header />
      <article className={style.wrapper}>
        <section className={style.top}>
          <StaticImage
            src="../images/indexhero.png"
            alt=""
            placeholder="blurred"
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
        </section>
        <section className={style.aboutUs}>
          <StaticImage
            src="../images/indexhero.png"
            alt=""
            placeholder="blurred"
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
        />
      </figure>
      <Footer />
    </div>
  );
};

export default IndexPage;
