import React from "react";
import styles from "./styles.module.scss";

interface IAdminTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  margin?: string;
  placeholder: string;
}

export const AdminTextArea: React.FC<IAdminTextAreaProps> = ({
  margin,
  placeholder,
  ...rest
}) => {
  const textArea = `${styles.admin_text_area} ${margin ? styles[margin] : ""}`;

  return (
    <textarea
      className={textArea}
      placeholder={placeholder}
      {...rest}
    ></textarea>
  );
};
