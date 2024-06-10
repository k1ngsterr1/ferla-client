"use client";
import React, { useState } from "react";
import { ImageForm } from "@entities/ClientComponents/ImageForm";
import Button from "@shared/ui/Button";

import main_pc from "@assets/webp/pc/mainImage_pc.png";

import styles from "./styles.module.scss";

export const MainScreen = () => {
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
      <main className={styles.main_screen} id="home">
        <h1
          className={`${styles.main_screen__heading} animate__fadeInLeft`}
          id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_1"
        >
          Let us introduce{" "}
          <strong
            className="text-red"
            id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_2"
          >
            ferla bikes
          </strong>
        </h1>
        <p
          className={styles.main_screen__paragraph}
          id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_3"
        >
          From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes,
          Hospitality Bikes, Vending Carts and more, we provide the perfect
          solution for your mobile retail pop-u
        </p>
        <Button
          text="Get A Free Consultation"
          animation="fade-reveal-left"
          buttonType="filled"
          targetId="form"
          margin="mt-8"
        />
        <a
          className={`${styles.main_screen__link} hoverable`}
          href="#video"
          id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_4"
        >
          Watch the true story
        </a>
        <img
          src={main_pc}
          id="ferla-edit-4"
          onClick={handleImageFormVisible}
          alt="Ferla Bikes Main Image"
          className={styles.main_screen__image}
        />
      </main>
    </>
  );
};
