interface ATMscreenProps {
  screenAmount: number;
}

const ATMscreen: React.FC<ATMscreenProps> = ({ screenAmount }) => {
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
