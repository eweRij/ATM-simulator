import "./ATMscreen.scss";
interface ATMscreenProps {
  screenAmount: number;
}

const ATMscreen: React.FC<ATMscreenProps> = ({ screenAmount }) => {
  return <div className="ATMscreen">{screenAmount || "0"}</div>;
};

export default ATMscreen;
