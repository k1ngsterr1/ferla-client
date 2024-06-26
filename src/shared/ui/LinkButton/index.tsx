import React from "react";
import styles from "./styles.module.scss";

interface IButtonLink {
  margin?: string;
  text: string;
  animation?: string;
  href: string;
  buttonType: "filled" | "outline";
}

const LinkButton: React.FC<IButtonLink> = ({
  margin,
  text,
  href,
  animation,
  buttonType,
  ...rest
}) => {
  const linkClass = `${styles.link} hoverable ${
    styles["link--" + buttonType]
  } ${margin || ""}`;

  return (
    <span className={linkClass} {...rest}>
      {text}
    </span>
  );
};

export default LinkButton;
