import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";
const ATMscreen = () => {
  const screenAmount = useSelector(
    (state: RootState) => state.moneyAmount.screenAmount
  );
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "rgba(13,110,253,0.5)",
      }}
    >
      {screenAmount || "0"}
    </div>
  );
};

export default ATMscreen;
