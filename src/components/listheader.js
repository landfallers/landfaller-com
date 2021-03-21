import React from "react";
import * as style from "./listheader.module.css";

export function ListHeader(props) {
  const { pageContext } = props;
  return (
    <div className={style.info}>
      <h1 className={style.title}>
        
        {props.pre ? `「${props.title}」の記事` : props.title}
      </h1>
      <div className={style.discriptionBox}>{props.discription}</div>
      <div className={style.count}>Total Count: {pageContext.total}</div>
      <div className={style.count}>
        {pageContext.total < pageContext.limit + pageContext.skip
          ? `Current Page: ${pageContext.skip+1}～${pageContext.total}`
          : `Current Page: ${pageContext.skip+1}～${
              pageContext.skip + pageContext.limit
            }`}
      </div>
    </div>
  );
}
