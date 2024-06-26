"use client";
import React from "react";
import logo from "@assets/vectors/logo.svg";
import Button from "@shared/ui/Button";
import { useFormPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";

export const FormPopup = () => {
  const { toggleFormPopup, isFormPopupVisible } = useFormPopup();

  if (!isFormPopupVisible) return null;

  return (
    <div className={styles.layout} onClick={() => toggleFormPopup()}>
      <div className={styles.popup}>
        <img src={logo} className={styles.popup__logo} alt="Ferla Logo" />
        <span className={styles.popup__heading}>
          Thank you for your request!
        </span>
        <p className={styles.popup__paragraph}>
          Our managers will contact you as soon as possiblу
        </p>
        <Button
          text="Close"
          buttonType="filled"
          onClick={() => toggleFormPopup()}
          margin="mt-8"
        />
      </div>
    </div>
  );
};
