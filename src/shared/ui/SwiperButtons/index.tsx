"use client";
import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ISwiperButtonProps {
  direction: string;
  position: string;
  onClick: () => void;
}

const SwiperButton: React.FC<ISwiperButtonProps> = ({
  direction,
  onClick,
  position,
}) => {
  const buttonClass = direction === "prev" ? styles.prev : styles.next;

  return (
    <button
      className={`${styles.swiperButton} ${buttonClass} hoverable ${position}`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction === "prev" ? faChevronLeft : faChevronRight}
      />
    </button>
  );
};

export default SwiperButton;
