"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SubmitForm } from "../SubmitForm";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

import ferla_logo from "@assets/vectors/logo_dark.svg";
import form_image from "@assets/webp/pc/form_image_pc.webp";

import styles from "./styles.module.scss";

export const Form = () => {
  const [imageFormVisible, setImageFormVisible] = useState<boolean>(false);

  const handleImageFormVisible = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setImageFormVisible(!imageFormVisible);
  };

  return (
    <>
      {imageFormVisible && (
        <ImageForm
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
        />
      )}
      <section className={styles.form_section} id="form">
        <div className={styles.form_section__upper}>
          <div className="flex flex-col items-start">
            <h6
              className={styles.form_section__upper__heading}
              id="ferla-edit-44"
            >
              Book A Meeting
            </h6>
            <p
              className={styles.form_section__upper__paragraph}
              id="ferla-edit-45"
            >
              Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do
              eiusmod tempor incid idunt ut enem os..
            </p>
          </div>
          <img
            src={ferla_logo}
            id="ferla-edit-46"
            alt="Ferla logotype"
            className={styles.form_section__upper__logo}
          />
        </div>
        <SubmitForm />
        <img
          id="ferla-edit-47"
          src={form_image}
          onClick={handleImageFormVisible}
          alt="Ferla Bikes Form Image Alternative"
          className={styles.form_section__image}
        />
      </section>
    </>
  );
};
