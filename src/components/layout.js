import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Aside } from "./aside";
//import { EyeCatch } from "../eycatch"
import "./layout.scss";
import { Col, Container, Row } from "react-bootstrap";

export function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* <EyeCatch/> */}
      <Container fluid="lg" as="section">
        <Row>
          <Col
            md={9}
            sm={8}
            style={{ paddingRight: "8px", paddingLeft: "8px" }}
          >
            {children}
          </Col>
          <Col
            as="aside"
            md={3}
            sm={4}
            style={{ paddingRight: "8px", paddingLeft: "8px" }}
          >
            <Aside />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
