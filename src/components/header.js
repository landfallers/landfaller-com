import React from "react";
import { Link } from "gatsby";
import { Nav, Navbar } from "react-bootstrap";
import * as style from "./header.module.css"
export function Header() {
  return (
    <header className="bg-info">
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/">
        <img
              src={`/images/landfall-title2.svg`}
              className={style.logo}
              alt="landfall"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to={"/"} className="nav-link" activeClassName="active">
                HOME
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to={`/blogs/`}
                className="nav-link"
                activeClassName="active"
              >
                BLOG
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to={`/magazines/`}
                className="nav-link"
                activeClassName="active"
              >
                MAGAZINE
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
