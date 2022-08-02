export interface KeyboardButtonProps {
  key: string;
  label: string;
  variant?: string;
  className: string;
  screenAmount: number;
  handleButton: (label: string) => void;
  checkVariant: (variant: string | undefined, label: string) => string;
  checkDisabled?: (label: string, screenAmount: number) => boolean | undefined;
}
