import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface InfoPanelProps {
  totalValue: number;
}

const InfoPanel = ({ totalValue }: InfoPanelProps) => {
  const totalAmount = useSelector(
    (state: RootState) => state.moneyAmount.totalAmount
  );
  return (
    <Card bg="light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>Account Info</Card.Header>
      <Card.Body>
        <Card.Title>Total amount:</Card.Title>
        <Card.Text>{totalValue} $</Card.Text>
      </Card.Body>
      <Card.Footer>
        <p>Last withdraw:</p>
        <p>Last deposit:</p>
      </Card.Footer>
    </Card>
  );
};

export default InfoPanel;
