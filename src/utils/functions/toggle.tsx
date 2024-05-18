// Define a toggle function to handle state toggling
export const toggle = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpen((prevState) => !prevState);
  };
  