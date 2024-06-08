"use client";
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

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex items-center justify-between w-full">
        <a href="#home">
          <img
            id="ferla-edit-48"
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
        <LinkButton buttonType="outline" text="Contact Us" href="#form" />
      </div>
      <div className="flex items-center justify-center w-full gap-4 mt-8">
        {socialMediaContent.map((icon, index) => (
          <SocialMediaIcon
            icon={icon.icon}
            href={icon.href}
            aria_label={icon.aria_label}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-12">
        <SparkLogo />
        <a href="https://sparkstudio.kz/home" className="text-white">
          sparkstudio.kz
        </a>
      </div>
    </footer>
  );
};
