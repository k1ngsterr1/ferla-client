"use client";
import logo from "@assets/vectors/logo_dark.svg";
import LinkButton from "@shared/ui/LinkButton";

import { NavLink } from "@shared/ui/NavLink";
import { navLinks } from "@shared/lib/content/navLinks";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ferla Bikes Logo" className={styles.header__logo} />
      <nav className={styles.header__nav}>
        {navLinks.map((link, index) => (
          <NavLink label={link.label} href={link.href} key={index} />
        ))}
      </nav>
      <LinkButton text="Contact Us" buttonType="outline" href="#form" />
    </header>
  );
};
