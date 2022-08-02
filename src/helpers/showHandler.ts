export const showHandler = (
  total: number,
  withdraw: number,
  setter: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  if (total < withdraw) {
    setter(true);
  } else {
    setter(false);
  }
};
