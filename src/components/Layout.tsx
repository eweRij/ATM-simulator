import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardPanel from "./KeyboardPanel";
import React from "react";
import InfoPanel from "./InfoPanel";
import { Navbar } from "react-bootstrap";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="primary">
            <Container>
              <Navbar.Brand href="#">ATM</Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <KeyboardPanel></KeyboardPanel>
        </Col>
        <Col>
          <InfoPanel totalValue={10000} />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;