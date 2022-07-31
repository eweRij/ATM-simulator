import { configureStore } from "@reduxjs/toolkit";
import moneyAmountReducer from "./features/moneyAmountSlice";

export const store = configureStore({
  reducer: { moneyAmount: moneyAmountReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
