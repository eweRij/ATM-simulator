import "./ATMscreen.scss";
import { ATMscreenProps } from "./ATMscreen.types";

const ATMscreen: React.FC<ATMscreenProps> = ({ screenAmount }) => {
  return <div className="ATMscreen">{screenAmount || "0"}</div>;
};

export default ATMscreen;
