"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitForm } from "../SubmitForm";
import { setComponentId } from "../../../../redux/idSlice";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

import ferla_logo from "@assets/vectors/logo_dark.svg";
import form_image from "@assets/webp/pc/form_image_pc.webp";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

export const Form = () => {
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
        <ImageForm
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
          componentId={componentId}
        />
      )}
      <section className={styles.form_section} id="form">
        <div className={styles.form_section__upper}>
          <div className="flex flex-col items-start">
            <h6
              className={styles.form_section__upper__heading}
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_65"
            >
              {content && content["61"]
                ? content["61"].value
                : "Content Not Found"}
            </h6>
            <p
              className={styles.form_section__upper__paragraph}
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_62"
            >
              {content && content["58"]
                ? content["58"].value
                : "Content Not Found"}
            </p>
          </div>
          <img
            src={ferla_logo}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_63"
            alt="Ferla logotype"
            className={styles.form_section__upper__logo}
          />
        </div>
        <SubmitForm />
        <img
          src={
            content && content["60"] ? content["60"].value : "Content Not Found"
          }
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_64"
          onClick={handleImageFormVisible}
          alt="Ferla Bikes Form Image Alternative"
          className={styles.form_section__image}
        />
      </section>
    </>
  );
};
