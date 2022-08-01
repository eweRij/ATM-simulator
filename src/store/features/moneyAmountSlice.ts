import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../../types/state";

const initialState: State = {
  screenAmount: "",
  totalAmount: 2000000, // :) :)
  lastWithdrawal: 0,
  lastDeposit: 0,
};

const moneyAmountSlice = createSlice({
  name: "moneyAmount",
  initialState,
  reducers: {
    setScreenAmount: (state: State, action: PayloadAction<string>) => {
      return { ...state, screenAmount: state.screenAmount + action.payload };
    },
    withdrawMoney: (state: State, action: PayloadAction<number>) => {
      return { ...state, totalAmount: state.totalAmount - action.payload };
    },
    depositMoney: (state: State, action: PayloadAction<number>) => {
      return { ...state, totalAmount: state.totalAmount + action.payload };
    },
    setLastWithdrawal: (state: State, action: PayloadAction<number>) => {
      return { ...state, lastWithdrawal: action.payload };
    },
    setLastDeposit: (state: State, action: PayloadAction<number>) => {
      return { ...state, lastDeposit: action.payload };
    },
    clearScreenAmount: (state: State) => {
      return { ...state, screenAmount: "" };
    },
    deleteScreenAmount: (state: State) => {
      return {
        ...state,
        screenAmount: state.screenAmount.substring(
          0,
          state.screenAmount.length - 1
        ),
      };
    },
  },
});

export const {
  setScreenAmount,
  withdrawMoney,
  depositMoney,
  setLastWithdrawal,
  setLastDeposit,
  clearScreenAmount,
  deleteScreenAmount,
} = moneyAmountSlice.actions;

export default moneyAmountSlice.reducer;
