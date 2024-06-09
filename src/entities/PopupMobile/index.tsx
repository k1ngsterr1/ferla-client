"use client";
import React from "react";
import Image from "next/image";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const PopupMobile = () => {
  const { isCartPopupVisible, toggleCartPopup, cartData } = useCartPopup();

  if (!isCartPopupVisible) return null;

  return (
    <>
      {cartData ? (
        <div className={styles.layout} onClick={() => toggleCartPopup()}>
          <div className={styles.popup}>
            <div className="flex flex-col items-center justify-center">
              <div className={`${styles.popup__x} flex items-end justify-end`}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-red text-4xl hoverable"
                />
              </div>
              <span className={styles.popup__title}>{cartData.title}</span>
              <Image
                src={cartData?.image}
                alt={cartData?.title}
                className={styles.popup__image}
              />
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
