import React from "react";
import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  placeholder: string;
  type: string;
  textAlign?: "left" | "center" | "right";
}

const AdminInput: React.FC<InputProps> = ({
  margin,
  placeholder,
  type,
  textAlign = "left",
  ...rest
}) => {
  const inputClass = `${styles.input} ${margin ? styles[margin] : ""}`;
  const inputStyle = { textAlign };

  return (
    <input
      className={inputClass}
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default AdminInput;
