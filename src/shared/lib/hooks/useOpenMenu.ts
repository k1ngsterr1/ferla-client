import { useState } from "react";

export function useOpenMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { handleOpen, isOpen };
}
