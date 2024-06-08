"use client";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";

export const Popup = () => {
  const { isCartPopupVisible, toggleCartPopup, cartData } = useCartPopup();

  if (!isCartPopupVisible) return null;

  return (
    <>
      {cartData ? (
        <div className={styles.layout} onClick={() => toggleCartPopup()}>
          <div className={styles.popup}>
            <img
              src={cartData?.image}
              alt={cartData?.title}
              className={styles.popup__image}
            />
            <div className="flex flex-col items-start ml-12">
              <span className={styles.popup__title}>{cartData.title}</span>
              <p className={styles.popup__paragraph}>{cartData?.paragraph}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
