import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  text: string;
  buttonType: "filled";
}

const AdminButton: React.FC<ButtonProps> = ({ margin, text, ...rest }) => {
  const buttonClass = `${styles.button} ${margin || ""}`;

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
};

export default AdminButton;
