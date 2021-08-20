import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
export function Body(props) {
  return (
    <section className={`mdcontent`}>
      <MDXRenderer>{props.body}</MDXRenderer>
    </section>
  );
}