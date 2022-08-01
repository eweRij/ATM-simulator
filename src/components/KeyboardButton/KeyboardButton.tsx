import Button from "react-bootstrap/Button";

interface KeyboardButtonProps {
  label: string;
  variant?: string;
  className: string;
  setDisabled?: boolean;
  handleClick: (label: string) => void;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  label,
  variant,
  className,
  setDisabled,
  handleClick,
}) => {
  const checkVariant = (): string => {
    if (variant) {
      return variant;
    }
    return isNaN(Number(label)) ? "danger" : "secondary";
  };
  const checkDisabled = (): boolean | undefined => {
    if (isNaN(Number(label))) {
      return false;
    } else {
      return setDisabled;
    }
  };
  return (
    <Button
      className={className}
      onClick={() => handleClick(label)}
      variant={checkVariant()}
      disabled={checkDisabled()}
    >
      {label}
    </Button>
  );
};

export default KeyboardButton;
