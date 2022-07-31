import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import {
  setScreenAmount,
  deleteScreenAmount,
  clearScreenAmount,
} from "../store/features/moneyAmountSlice";

interface KeyboardButtonProps {
  label: string;
  value: number;
}

const KeyboardButton = ({ label, value }: KeyboardButtonProps) => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    if (label === "DEL") {
      dispatch(deleteScreenAmount());
    } else if (label === "CLEAR") {
      dispatch(clearScreenAmount());
    } else {
      dispatch(setScreenAmount(label));
    }
  };
  return (
    <Button
      onClick={() => handleClick()}
      variant={isNaN(Number(label)) ? "danger" : "secondary"}
    >
      {label}
    </Button>
  );
};

export default KeyboardButton;
