import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import * as shortcodes from "../../publication/blog_ui";
export function Body(props) {
  return (
    <section className={`mdcontent`}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{props.body}</MDXRenderer>
      </MDXProvider>
    </section>
  );
}