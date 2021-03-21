import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import * as style from "./pagination.module.css";

export function Pagenation(props) {
  const { pageContext } = props;
  return (
    <nav aria-label="pagination" className={style.nav}>
      <ul className={style.pagination}>
        {!pageContext.isFirst && (
          <li className={style.prev}>
            <Link
              to={
                pageContext.currentPage === 2
                  ? props.slug
                  : `${props.slug}${pageContext.currentPage - 1}/`
              }
              rel="prev"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>前のページ</span>
            </Link>
          </li>
        )}

        {!pageContext.isLast && (
          <li className={style.next}>
            <Link
              to={`${props.slug}${pageContext.currentPage + 1}/`}
              rel="next"
            >
              <span>次のページ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
