import React from "react";
import { Link } from "gatsby";
import { Nav, Navbar } from "react-bootstrap";
import * as style from "./header.module.css";
import Logo from "../images/logo.svg";
export function Header() {
  return (
    <header className="bg-info">
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/" style={{marginLeft: "15px"}}>
          <div className={style.logo}>
           <Logo/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" key="header-home">
              <Link to={"/"} className="nav-link" activeClassName="active">
                HOME
              </Link>
            </Nav.Item>

            <Nav.Item as="li" key="header-magazines">
              <Link
                to={`/magazines/`}
                className="nav-link"
                activeClassName="active"
              >
                LANDFALL本誌
              </Link>
            </Nav.Item>
            <Nav.Item as="li" key="header-blogs">
              <Link
                to={`/blogs/`}
                className="nav-link"
                activeClassName="active"
              >
                BLOG
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
