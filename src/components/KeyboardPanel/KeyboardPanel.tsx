import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";

import "./KeyboardPanel.scss";
import {
  actionsKeyboardButtonssData,
  keyboardButtonsData,
} from "../../helpers/buttons";
import {
  clearScreenAmount,
  setLastDeposit,
  setLastWithdrawal,
  withdrawMoney,
  depositMoney,
  deleteScreenAmount,
  setScreenAmount,
} from "../../store/features/moneyAmountSlice";
import ATMscreen from "../ATMscreen/ATMscreen";
import KeyboardButton from "../KeyboardButton/KeyboardButton";
import { AppDispatch, RootState } from "../../store/store";

interface KeyboardPanelProps {
  handleShow: (total: number, withdraw: number) => void;
}
const KeyboardPanel: React.FC<KeyboardPanelProps> = ({ handleShow }) => {
  const dispatch: AppDispatch = useDispatch();

  const screenAmount = Number(
    useSelector((state: RootState) => state.moneyAmount.screenAmount)
  );
  const totalAmount = Number(
    useSelector((state: RootState) => state.moneyAmount.totalAmount)
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
    if (name === "WITHDRAW" && totalAmount < screenAmount) {
      handleShow(totalAmount, screenAmount);
    } else if (name === "WITHDRAW") {
      handleShow(totalAmount, screenAmount);
      dispatch(withdrawMoney(screenAmount));
      dispatch(setLastWithdrawal(screenAmount));
    } else {
      dispatch(depositMoney(screenAmount));
      dispatch(setLastDeposit(screenAmount));
    }
    dispatch(clearScreenAmount());
  };
  return (
    <Card className="keyboardPanel" bg="light">
      <Card.Header>
        <ATMscreen screenAmount={screenAmount}></ATMscreen>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div className="keyboardPanel-buttonsContainer">
            {keyboardButtonsData.map((button, id) => {
              const { name } = button;
              return (
                <KeyboardButton
                  key={id + name}
                  label={name}
                  className="keyboardPanel-keyboardButton"
                  setDisabled={
                    screenAmount.toString().length > 20 ? true : false
                  }
                  handleClick={keyboardHandleClick}
               
                />
              );
            })}
          </div>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="keyboardPanel-actionButtonsContainer">
        {actionsKeyboardButtonssData.map((button, id) => {
          const { name, variant } = button;
          return (
            <KeyboardButton
              key={id + name}
              label={name}
              variant={variant}
              className="keyboardPanel-actionButton"
              handleClick={actionsHandleClick}
            />
          );
        })}
      </Card.Footer>
    </Card>
  );
};

export default KeyboardPanel;
