import React from "react";
import { INavLink } from "@shared/lib/content/navLinks";

import styles from "./styles.module.scss";

export const NavLink: React.FC<INavLink> = ({ label, href }) => {
  return (
    <a href={href} className={`${styles.nav_link} hoverable`}>
      {label}
    </a>
  );
};
