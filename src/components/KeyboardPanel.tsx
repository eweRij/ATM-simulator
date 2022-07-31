import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import {
  actionsButtonsData,
  keyboardButtonsData,
  useAtmDispatcher,
} from "../types/buttons";
import {
  clearScreenAmount,
  setScreenAmount,
  withdrawMoney,
  depositMoney,
} from "../store/features/moneyAmountSlice";
import ATMscreen from "./ATMscreen";
import KeyboardButton from "./KeyboardButton";
import { AppDispatch, RootState } from "../store/store";

const KeyboradPanel: React.FC = () => {
  const dispatchActionButton = useAtmDispatcher();
  const dispatch: AppDispatch = useDispatch();

  const screenAmount = Number(
    useSelector((state: RootState) => state.moneyAmount.screenAmount)
  );
  const totalAmount = useSelector(
    (state: RootState) => state.moneyAmount.totalAmount
  );

  const handleActionButton = (name: string): void => {
    if (name === "WITHDRAW") {
      dispatchActionButton(withdrawMoney(screenAmount));
    } else {
      dispatchActionButton(depositMoney(screenAmount));
    }
    dispatch(clearScreenAmount());
  };
  console.log(totalAmount);
  return (
    <Card bg="light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>
        <ATMscreen></ATMscreen>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div className="keyboardButton-container">
            {keyboardButtonsData.map((button, id) => {
              const { name, value } = button;
              return (
                <KeyboardButton key={id + name} label={name} value={value} />
              );
            })}
          </div>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        {actionsButtonsData.map((button, id) => {
          const { name, variant } = button;
          return (
            <Button
              key={id + name}
              variant={variant}
              onClick={() => handleActionButton(name)}
            >
              {name}
            </Button>
          );
        })}
      </Card.Footer>
    </Card>
  );
};

export default KeyboradPanel;
