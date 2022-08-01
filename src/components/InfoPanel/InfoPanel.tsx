import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

import "./InfoPanel.scss";
import { RootState } from "../../store/store";

const InfoPanel: React.FC = () => {
  const totalAmount = useSelector(
    (state: RootState) => state.moneyAmount.totalAmount
  );
  const lastWithdrawal = useSelector(
    (state: RootState) => state.moneyAmount.lastWithdrawal
  );
  const lastDeposit = useSelector(
    (state: RootState) => state.moneyAmount.lastDeposit
  );
  return (
    <Card className="infoPanel" bg="light">
      <Card.Header>
        <div className="infoPanel-header">Account Info</div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="infoPanel-title">Total amount:</Card.Title>
        <Card.Text className="infoPanel-content">{totalAmount} $</Card.Text>
      </Card.Body>
      <Card.Footer className="infoPanel-footer">
        <p>Last withdrawal: {lastWithdrawal}$</p>
        <p>Last deposit: {lastDeposit}$</p>
      </Card.Footer>
    </Card>
  );
};

export default InfoPanel;
