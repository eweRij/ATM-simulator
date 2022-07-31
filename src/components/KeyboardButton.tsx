import Button from "react-bootstrap/Button";

interface KeyboardButtonProps {
  label: string;
  handleClick: (label: string) => void;
}

const KeyboardButton = ({ label, handleClick }: KeyboardButtonProps) => {
  return (
    <Button
      onClick={() => handleClick(label)}
      variant={isNaN(Number(label)) ? "danger" : "secondary"}
    >
      {label}
    </Button>
  );
};

export default KeyboardButton;
