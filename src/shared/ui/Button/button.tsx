"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHandleScroll } from "@shared/lib/hooks/useHandleScroll";

import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  icon?: any;
  animation?: string;
  text: string;
  targetId?: string;
  buttonType: "filled" | "outline" | "underline" | "transparent";
}

const ActualButton: React.FC<ButtonProps> = ({
  margin,
  text,
  animation,
  icon,
  buttonType,
  targetId,
  ...rest
}) => {
  const buttonClass = `${styles.button} hoverable ${
    styles["button--" + buttonType]
  } ${margin || ""} ${animation}`;

  const { handleScroll } = useHandleScroll();

  return (
    <button
      className={buttonClass}
      {...rest}
      onClick={() => handleScroll(targetId)}
    >
      {text}
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          data-testid="icon"
        />
      )}
    </button>
  );
};

export default ActualButton;
