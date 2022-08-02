import { State } from "../types/state";
import { ButtonsData } from "../types/buttons";

export const initialAppState: State = {
  screenAmount: "",
  totalAmount: 2000000, // :) :)
  lastWithdrawal: 0,
  lastDeposit: 0,
};

export const keyboardButtonsState: ButtonsData[] = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "0" },
  { name: "DEL" },
  { name: "CLEAR" },
];

export const actionsKeyboardButtonsState: ButtonsData[] = [
  {
    name: "WITHDRAW",
    variant: "primary",
  },
  {
    name: "DEPOSIT",
    variant: "success",
  },
];
