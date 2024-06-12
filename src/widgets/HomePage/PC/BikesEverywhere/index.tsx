"use client";
import React, { useState } from "react";
import Button from "@shared/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setComponentId } from "../../../../redux/idSlice";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

import bike01 from "@assets/webp/pc/bike_01_pc.webp";
import bike02 from "@assets/webp/pc/bike_02_pc.webp";
import bike03 from "@assets/webp/pc/bike_03_pc.webp";
import bike04 from "@assets/webp/pc/bike_04_pc.webp";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

export const BikesEverywhere = () => {
  const [imageFormVisible, setImageFormVisible] = useState<boolean>(false);

  const handleImageFormVisible = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    const id = e.currentTarget.id;
    const componentId = id.split("_")[3];
    dispatch(setComponentId(componentId));
    setImageFormVisible(!imageFormVisible);
  };

  return (
    <>
      {imageFormVisible && (
        <ImageForm
          componentId={componentId}
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
        />
      )}
      <section className={styles.everywhere_block}>
        <div className={styles.everywhere_block__upper}>
          <h4
            className={styles.everywhere_block__upper__heading}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_25"
          >
            Ferla Bikes{" "}
            <strong
              className="text-red"
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_22"
            >
              Everywhere
            </strong>
          </h4>
          <div className="flex flex-col items-end">
            <p
              className={styles.everywhere_block__upper__paragraph}
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_26"
            >
              {content && content["25"]
                ? content["25"].value
                : "Content Not Found"}
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
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_27"
            src={
              content && content["26"]
                ? content["26"].value
                : "Content Not Found"
            }
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_24"
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
          <img
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_28"
            src={bike02}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_25"
            src={
              content && content["27"]
                ? content["27"].value
                : "Content Not Found"
            }
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
          <img
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_29"
            src={bike03}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_26"
            src={
              content && content["28"]
                ? content["28"].value
                : "Content Not Found"
            }
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
          <img
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_30"
            src={bike04}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_27"
            src={
              content && content["29"]
                ? content["29"].value
                : "Content Not Found"
            }
            onClick={handleImageFormVisible}
            className={styles.everywhere_block__photos__photo}
            alt="Ferla Bike"
          />
        </div>
      </section>
    </>
  );
};
