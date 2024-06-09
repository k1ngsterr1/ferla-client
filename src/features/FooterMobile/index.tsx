import React from "react";
import dark_logo from "@assets/vectors/logo_dark.svg";
import Image from "next/image";
import LinkButton from "@shared/ui/LinkButton";
import { navLinks } from "@shared/lib/content/navLinks";
import { NavLink } from "@shared/ui/NavLink";
import { socialMediaContent } from "@shared/lib/content/socialMediaContent";
import { SocialMediaIcon } from "@shared/ui/SocialMediaIcon";
import { SparkLogo } from "@shared/ui/SparkLogo";

import styles from "./styles.module.scss";

export const FooterMobile = () => {
  return (
    <footer className={styles.footer}>
      <a href="#home">
        <Image
          className={styles.footer__logo}
          src={dark_logo}
          alt="Ferlabikes Logo"
        />
      </a>
      <nav className={styles.footer__nav}>
        {navLinks.map((link, index) => (
          <NavLink label={link.label} href={link.href} key={index} />
        ))}
      </nav>
      <LinkButton
        buttonType="outline"
        text="Contact Us"
        href="#form"
        margin="mt-8"
      />
      <div className=" flex flex-row w-full gap-6 mt-8 items-center justify-center mb-8">
        {socialMediaContent.map((icon, index) => (
          <SocialMediaIcon
            icon={icon.icon}
            href={icon.href}
            aria_label={icon.aria_label}
            key={index}
          />
        ))}
      </div>
      <SparkLogo />
      <a href="https://sparkstudio.kz/home" className="text-white">
        sparkstudio.kz
      </a>
    </footer>
  );
};
