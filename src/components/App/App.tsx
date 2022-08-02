import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Alert, Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.scss";
import KeyboardPanel from "../KeyboardPanel/KeyboardPanel";
import InfoPanel from "../InfoPanel/InfoPanel";
import { useState } from "react";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // const handleShow = (total: number, withdraw: number): void => {
  //   if (total < withdraw) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };
  return (
    <Container className="app">
      <Row>
        <Col>
          <Navbar className="app-navbar" bg="primary">
            <div>ATM Machine</div>
          </Navbar>
        </Col>
      </Row>
      <div className="app-alert">
        <Alert
          show={isVisible}
          variant="danger"
          onClose={() => setIsVisible(false)}
          transition
          dismissible
        >
          You do not have enough money on your account!
        </Alert>
      </div>
      <Row>
        <Col>
          <KeyboardPanel setter={setIsVisible} />
        </Col>
        <Col>
          <InfoPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
