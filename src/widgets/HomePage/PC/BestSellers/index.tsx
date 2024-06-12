"use client";
import React, { useState } from "react";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { AboutCard } from "@entities/AboutCard";
import { setComponentId } from "../../../../redux/idSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImageForm } from "@entities/ClientComponents/ImageForm";
import ArrowAnimation from "@shared/ui/ArrowRight";
import Button from "@shared/ui/Button";

import best_sellers_pc from "@assets/webp/pc/best_sellers_pc.png";

import styles from "./styles.module.scss";

export const BestSellers = () => {
  const dispatch = useDispatch();
  const componentId = useSelector((state: any) => state.id.componentId);
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
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
          componentId={componentId}
        />
      )}
      <section className={styles.best_sellers} id="business">
        <div className="flex flex-col items-start">
          <MiniText
            text="Best Sellers"
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_13"
          />
          <h3
            className={styles.best_sellers__heading}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_14"
          >
            Your Bike, Your Way
          </h3>
          <div className="flex items-center gap-10 mt-4">
            <p
              className={styles.best_sellers__paragraph}
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_15"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ArrowAnimation />
          </div>
          <Button
            id="form"
            text="Manage Your Business"
            buttonType="transparent"
            margin="mt-8"
            icon={faChevronRight}
          />
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_16"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_17"
                icon={faMoneyBill}
                name="Coffee Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_18"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_19"
                icon={faMoneyBill}
                name="Ice Cream Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="flex items-center gap-4 ">
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_20"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_21"
                icon={faMoneyBill}
                name="Modern Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_22"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_23"
                icon={faMoneyBill}
                name="Hot Dog Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
        </div>
        <img
          src={best_sellers_pc}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_20"
          alt="Best Sellers"
          onClick={handleImageFormVisible}
          className={styles.best_sellers__image}
        />
      </section>
    </>
  );
};
