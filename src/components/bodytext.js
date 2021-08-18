import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as style from "./bodytext.module.css";
export function Body(props) {
  return (
    <section className={style.body}>
      <MDXRenderer>{props.body}</MDXRenderer>
    </section>
  );
}