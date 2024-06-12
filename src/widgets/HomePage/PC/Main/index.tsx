"use client";
import React, { useState } from "react";
import { ImageForm } from "@entities/ClientComponents/ImageForm";
import { useDispatch, useSelector } from "react-redux";
import { setComponentId } from "../../../../redux/idSlice";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";
import Button from "@shared/ui/Button";

import main_pc from "@assets/webp/pc/mainImage_pc.png";

import styles from "./styles.module.scss";

export const MainScreen = () => {
  const { content } = useFetchContent();
  const dispatch = useDispatch();
  const componentId = useSelector((state: any) => state.id.componentId);
  const [imageFormVisible, setImageFormVisible] = useState<boolean>(false);

  const handleImageFormVisible = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const id = e.currentTarget.id;
    const componentId = id.split("_")[3];
    dispatch(setComponentId(componentId));
    setImageFormVisible(!imageFormVisible);
  };

  return (
    <>
      {imageFormVisible && (
        <ImageForm onClick={handleImageFormVisible} componentId={componentId} />
      )}
      <main className={styles.main_screen} id="home">
        <h1
          className={`${styles.main_screen__heading} animate__fadeInLeft`}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_1"
        >
          {/* Let us introduce{" "}
          <strong
            className="text-red"
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_2"
          >
            ferla bikes
          </strong> */}
          {content && content["0"] ? content["0"].value : "Content not found"}
        </h1>
        <p
          className={styles.main_screen__paragraph}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_3"
        >
          {content && content["2"] ? content["2"].value : "Content not found"}
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
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_4"
        >
          {content && content["3"] ? content["3"].value : "Content not found"}
        </a>
        <img
          src={
            content && content["4"] ? content["4"].value : "Content not found"
          }
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_5"
          onClick={handleImageFormVisible}
          alt="Ferla Bikes Main Image"
          className={styles.main_screen__image}
        />
      </main>
    </>
  );
};
