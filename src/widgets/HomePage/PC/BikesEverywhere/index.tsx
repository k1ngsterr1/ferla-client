"use client";
import React, { useState } from "react";
import Button from "@shared/ui/Button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

import bike01 from "@assets/webp/pc/bike_01_pc.webp";
import bike02 from "@assets/webp/pc/bike_02_pc.webp";
import bike03 from "@assets/webp/pc/bike_03_pc.webp";
import bike04 from "@assets/webp/pc/bike_04_pc.webp";

import styles from "./styles.module.scss";

export const BikesEverywhere = () => {
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
      <section className={styles.everywhere_block}>
        <div className={styles.everywhere_block__upper}>
          <h4
            className={styles.everywhere_block__upper__heading}
            id="ferla-edit-18"
          >
            Ferla Bikes <strong className="text-red">Everywhere</strong>
          </h4>
          <div className="flex flex-col items-end">
            <p
              className={styles.everywhere_block__upper__paragraph}
              id="ferla-edit-19"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              text="Start Selling"
              buttonType="transparent"
              margin="mt-4"
              icon={faChevronRight}
            />
          </div>
        </div>
        <div className={styles.everywhere_block__photos}>
          <img
            src={bike01}
            id="ferla-edit-20"
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
          <img
            id="ferla-edit-21"
            src={bike02}
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
          <img
            id="ferla-edit-22"
            src={bike03}
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
          <img
            id="ferla-edit-23"
            src={bike04}
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
        </div>
      </section>
    </>
  );
};
