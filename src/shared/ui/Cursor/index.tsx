import { useRef } from "react";
import { useCustomCursor } from "@shared/lib/hooks/useCustomCursor";

import wheel from "@assets/vectors/wheel.svg";
import styles from "./styles.module.scss";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(cursorRef);

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <img src={wheel} className={styles.cursor__wheel} alt="cursor" />
    </div>
  );
};
