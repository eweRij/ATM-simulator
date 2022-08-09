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
import { showHandler } from "./showHandler";

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
    showHandler(total, screen, setter);
  } else if (name === "WITHDRAW") {
    showHandler(total, screen, setter);
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
  if (
    label !== "DEL" &&
    label !== "CLEAR" &&
    screenAmount.toString().length >= 20
  ) {
    return true;
  }
  return false;
};
