import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Alert, Navbar, Container, Row, Col } from "react-bootstrap";

import "./App.scss";
import KeyboardPanel from "../KeyboardPanel/KeyboardPanel";
import InfoPanel from "../InfoPanel/InfoPanel";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const totalAmount = useSelector(
    (state: RootState) => state.moneyAmount.totalAmount
  );
  const lastWithdrawal = useSelector(
    (state: RootState) => state.moneyAmount.lastWithdrawal
  );
  const lastDeposit = useSelector(
    (state: RootState) => state.moneyAmount.lastDeposit
  );

  const screenAmount = useSelector(
    (state: RootState) => state.moneyAmount.screenAmount
  );
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
          <KeyboardPanel
            screenAmount={Number(screenAmount)}
            totalAmount={totalAmount}
            setter={setIsVisible}
          />
        </Col>
        <Col>
          <InfoPanel
            totalAmount={totalAmount}
            lastWithdrawal={lastWithdrawal}
            lastDeposit={lastDeposit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
