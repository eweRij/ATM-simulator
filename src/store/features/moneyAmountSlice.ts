import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../../types/state";

const initialState: State = {
  screenAmount: "",
  totalAmount: 2000,
  lastWithdrawn: 0,
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
    setLastWithdrawn: (state: State, action: PayloadAction<number>) => {
      return { ...state, lastWithdrawn: action.payload };
    },
    setLastDeposit: (state: State, action: PayloadAction<number>) => {
      return { ...state, lastDeposit: action.payload };
    },
    clearScreenAmount: (state: State) => {
      return { ...state, screenAmount: "" };
    },
  },
});

export const {
  setScreenAmount,
  withdrawMoney,
  depositMoney,
  setLastWithdrawn,
  setLastDeposit,
  clearScreenAmount,
} = moneyAmountSlice.actions;
export const moneyAmountSelector = (state: { store: any }) => state.store;
export default moneyAmountSlice.reducer;
