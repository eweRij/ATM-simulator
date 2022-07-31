import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../store/store";
import { setScreenAmount } from "../store/features/moneyAmountSlice";

interface KeyboardButtonProps {
  label: string;
  value: number;
}

const KeyboardButton = ({ label, value }: KeyboardButtonProps) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(setScreenAmount(label))}
      variant={isNaN(Number(label)) ? "danger" : "secondary"}
    >
      {label}
    </Button>
  );
};

export default KeyboardButton;
