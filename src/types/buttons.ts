import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import {
  withdrawMoney,
  depositMoney,
} from "../store/features/moneyAmountSlice";
import { AppDispatch } from "../store/store";

export interface KeyboardButtonsData {
  name: string;
  value: number;
}
export interface ActionsButtonsData {
  name: string;
  variant: string;
}

export const useAtmDispatcher = (): Dispatch<PayloadAction<number, string>> => {
  const dispatch = useDispatch();
  return (action: PayloadAction<number, string>) => {
    dispatch(action);
  };
}; //custom hook

export const keyboardButtonsData: KeyboardButtonsData[] = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "0", value: 0 },
  { name: "DEL", value: 0 },
  { name: "CLEAR", value: 0 },
];

export const actionsButtonsData: ActionsButtonsData[] = [
  {
    name: "WITHDRAW",
    variant: "primary",
  },
  {
    name: "DEPOSIT",
    variant: "success",
  },
];
