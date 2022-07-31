import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

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
    <Card bg="light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>Account Info</Card.Header>
      <Card.Body>
        <Card.Title>Total amount:</Card.Title>
        <Card.Text>{totalAmount} $</Card.Text>
      </Card.Body>
      <Card.Footer>
        <p>Last withdrawal: {lastWithdrawal}$</p>
        <p>Last deposit: {lastDeposit}$</p>
      </Card.Footer>
    </Card>
  );
};

export default InfoPanel;
