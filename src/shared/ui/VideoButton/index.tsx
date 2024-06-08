import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface IVideoButton {
  onClick: () => void;
}

export const VideoButton: React.FC<IVideoButton> = ({ onClick }) => {
  return (
    <button className={`${styles.button} hoverable`} onClick={onClick}>
      <FontAwesomeIcon icon={faPlay} className={styles.button__icon} />
    </button>
  );
};
