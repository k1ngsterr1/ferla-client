"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

import { ICard } from "../content/cartsContent";

interface AppContextType {
  // Popup for cart
  isCartPopupVisible: boolean;
  toggleCartPopup: (data?: ICard | null | undefined) => void;
  cartData: ICard | null | undefined;
  // Popup for form
  isFormPopupVisible: boolean;
  toggleFormPopup: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useCartPopup = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a AppProvider");
  }
  return context;
};

export const useFormPopup = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a AppProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState<boolean>(false);
  const [isFormPopupVisible, setIsFormPopupVisible] = useState<boolean>(false);

  const [cartData, setCartData] = useState<ICard | null | undefined>(null);

  const toggleCartPopup = useCallback((data?: ICard | null | undefined) => {
    setCartData(data);
    setIsCartPopupVisible((prev) => !prev);
  }, []);

  const toggleFormPopup = useCallback(() => {
    setIsFormPopupVisible((prev) => !prev);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isCartPopupVisible,
        toggleCartPopup,
        cartData,
        isFormPopupVisible,
        toggleFormPopup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
