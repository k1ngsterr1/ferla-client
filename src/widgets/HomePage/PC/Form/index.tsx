"use client";
import React, { useState } from "react";
import { SubmitForm } from "../SubmitForm";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

import ferla_logo from "@assets/vectors/logo_dark.svg";
import form_image from "@assets/webp/pc/form_image_pc.webp";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

export const Form = () => {
  const { content } = useFetchContent();
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
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_53"
            >
              {content && content["54"]
                ? content["54"].value
                : "Content Not Found"}
            </h6>
            <p
              className={styles.form_section__upper__paragraph}
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_54"
            >
              {content && content["59"]
                ? content["59"].value
                : "Content Not Found"}
            </p>
          </div>
          <img
            src={ferla_logo}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_55"
            alt="Ferla logotype"
            className={styles.form_section__upper__logo}
          />
        </div>
        <SubmitForm />
        <img
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_56"
          src={
            content && content["58"] ? content["58"].value : "Content Not Found"
          }
          onClick={handleImageFormVisible}
          alt="Ferla Bikes Form Image Alternative"
          className={styles.form_section__image}
        />
      </section>
    </>
  );
};
