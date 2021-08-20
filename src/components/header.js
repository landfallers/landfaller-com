import React from "react";
import { Link } from "gatsby";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../images/logo.svg";
export function Header() {
  return (
    <header className="bg-info" >
      <Navbar expand="sm" variant="dark" style={{padding: "0.3rem 1rem"}}>
        <Navbar.Brand href="/" style={{marginLeft: "15px"}}>
          <div style={{width: "150px"}}>
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
