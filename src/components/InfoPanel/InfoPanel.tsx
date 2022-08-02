import Card from "react-bootstrap/Card";

import "./InfoPanel.scss";
import { InfoPanelProps } from "./InfoPanel.types";

const InfoPanel: React.FC<InfoPanelProps> = ({
  totalAmount,
  lastWithdrawal,
  lastDeposit,
}) => {
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
