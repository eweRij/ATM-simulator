import {
  clearScreenAmount,
  setLastDeposit,
  setLastWithdrawal,
  withdrawMoney,
  depositMoney,
  deleteScreenAmount,
  setScreenAmount,
} from "../store/features/moneyAmountSlice";
import { AppDispatch } from "../store/store";
import { handleShowAlert } from "./handleShow";

export const keyboardHandler = (label: string, dispatch: any): void => {
  if (label === "DEL") {
    dispatch(deleteScreenAmount());
  } else if (label === "CLEAR") {
    dispatch(clearScreenAmount());
  } else {
    dispatch(setScreenAmount(label));
  }
};

export const actionsHandler = (
  name: string,
  total: number,
  screen: number,
  setter: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: AppDispatch
): void => {
  if (name === "WITHDRAW" && total < screen) {
    handleShowAlert(total, screen, setter);
  } else if (name === "WITHDRAW") {
    handleShowAlert(total, screen, setter);
    dispatch(withdrawMoney(screen));
    dispatch(setLastWithdrawal(screen));
  } else {
    dispatch(depositMoney(screen));
    dispatch(setLastDeposit(screen));
  }
  dispatch(clearScreenAmount());
};

export const checkVariant = (
  variant: string | undefined,
  label: string
): string => {
  if (variant) {
    return variant;
  }
  return isNaN(Number(label)) ? "danger" : "secondary";
};

export const checkDisabled = (label: string, screenAmount: number): boolean => {
  if (screenAmount.toString().length > 20 ? true : false) {
    if (isNaN(Number(label))) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};
