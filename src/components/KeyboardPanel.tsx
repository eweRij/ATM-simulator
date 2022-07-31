import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import { actionsButtonsData, keyboardButtonsData } from "../helpers/buttons";
import {
  clearScreenAmount,
  setLastDeposit,
  setLastWithdrawal,
  withdrawMoney,
  depositMoney,
  deleteScreenAmount,
  setScreenAmount,
} from "../store/features/moneyAmountSlice";
import ATMscreen from "./ATMscreen";
import KeyboardButton from "./KeyboardButton";
import { AppDispatch, RootState } from "../store/store";

const KeyboardPanel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const screenAmount = Number(
    useSelector((state: RootState) => state.moneyAmount.screenAmount)
  );
  const keyboardHandleClick = (label: string): void => {
    if (label === "DEL") {
      dispatch(deleteScreenAmount());
    } else if (label === "CLEAR") {
      dispatch(clearScreenAmount());
    } else {
      dispatch(setScreenAmount(label));
    }
  };
  const actionsHandleClick = (name: string): void => {
    if (name === "WITHDRAW") {
      dispatch(withdrawMoney(screenAmount));
      dispatch(setLastWithdrawal(screenAmount));
    } else {
      dispatch(depositMoney(screenAmount));
      dispatch(setLastDeposit(screenAmount));
    }
    dispatch(clearScreenAmount());
  };
  return (
    <Card bg="light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>
        <ATMscreen screenAmount={screenAmount}></ATMscreen>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div className="keyboardButton-container">
            {keyboardButtonsData.map((button, id) => {
              const { name } = button;
              return (
                <KeyboardButton
                  key={id + name}
                  label={name}
                  handleClick={keyboardHandleClick}
                />
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
              onClick={() => actionsHandleClick(name)}
            >
              {name}
            </Button>
          );
        })}
      </Card.Footer>
    </Card>
  );
};

export default KeyboardPanel;
