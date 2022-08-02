import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";

import "./KeyboardPanel.scss";
import {
  actionsKeyboardButtonsState,
  keyboardButtonsState,
} from "../../store/initialState";
import ATMscreen from "../ATMscreen/ATMscreen";
import KeyboardButton from "../KeyboardButton/KeyboardButton";
import { AppDispatch, RootState } from "../../store/store";
import { KeyboardPanelProps } from "./KeyboardPanel.types";
import {
  keyboardHandler,
  actionsHandler,
  checkDisabled,
  checkVariant,
} from "../../helpers/buttonsHandlers";

const KeyboardPanel: React.FC<KeyboardPanelProps> = ({ setter }) => {
  const dispatch: AppDispatch = useDispatch();

  const screenAmount = Number(
    useSelector((state: RootState) => state.moneyAmount.screenAmount)
  );
  const totalAmount = Number(
    useSelector((state: RootState) => state.moneyAmount.totalAmount)
  );

  return (
    <Card className="keyboardPanel" bg="light">
      <Card.Header>
        <ATMscreen screenAmount={screenAmount}></ATMscreen>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div className="keyboardPanel-buttonsContainer">
            {keyboardButtonsState.map((button, id) => {
              const { name } = button;
              return (
                <KeyboardButton
                  key={id + name}
                  label={name}
                  className="keyboardPanel-keyboardButton"
                  screenAmount={screenAmount}
                  handleButton={() => keyboardHandler(name, dispatch)}
                  checkVariant={checkVariant}
                  checkDisabled={() => checkDisabled(name, screenAmount)}
                />
              );
            })}
          </div>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="keyboardPanel-actionButtonsContainer">
        {actionsKeyboardButtonsState.map((button, id) => {
          const { name, variant } = button;
          return (
            <KeyboardButton
              key={id + name}
              label={name}
              variant={variant}
              className="keyboardPanel-actionButton"
              screenAmount={screenAmount}
              handleButton={() => {
                actionsHandler(
                  name,
                  totalAmount,
                  screenAmount,
                  setter,
                  dispatch
                );
              }}
              checkVariant={checkVariant}
            />
          );
        })}
      </Card.Footer>
    </Card>
  );
};

export default KeyboardPanel;
