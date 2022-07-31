import Button from "react-bootstrap/Button";

interface KeyboardButtonProps {
  label: string;
  variant?: string;
  handleClick: (label: string) => void;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  label,
  variant,
  handleClick,
}) => {
  const checkVariant = (): string => {
    if (variant) {
      return variant;
    }
    return isNaN(Number(label)) ? "danger" : "secondary";
  };
  return (
    <Button onClick={() => handleClick(label)} variant={checkVariant()}>
      {label}
    </Button>
  );
};

export default KeyboardButton;
