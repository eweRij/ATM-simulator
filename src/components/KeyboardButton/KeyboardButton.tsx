import Button from "react-bootstrap/Button";

import { KeyboardButtonProps } from "./KeyboardButton.types";

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  label,
  variant,
  className,
  screenAmount,
  handleButton,
  checkVariant,
  checkDisabled,
}) => {
  return (
    <Button
      className={className}
      onClick={() => handleButton(label)}
      variant={checkVariant && checkVariant(variant, label)}
      disabled={checkDisabled && checkDisabled(label, screenAmount)}
    >
      {label}
    </Button>
  );
};

export default KeyboardButton;
