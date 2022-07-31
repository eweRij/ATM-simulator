import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Alert, Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import KeyboardPanel from "./KeyboardPanel";
import InfoPanel from "./InfoPanel";
import { useState } from "react";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleShow = (total: number, withdraw: number): void => {
    if (total < withdraw) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
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
      <Alert
        show={isVisible}
        variant="danger"
        onClose={() => setIsVisible(false)}
        transition
        dismissible
      >
        You do not have enough money on your account!
      </Alert>
      <Row>
        <Col>
          <KeyboardPanel handleShow={handleShow} />
        </Col>
        <Col>
          <InfoPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
