"use client";
import React, { useState } from "react";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { AboutCard } from "@entities/AboutCard";
import { setComponentId } from "../../../../redux/idSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowAnimation from "@shared/ui/ArrowRight";
import { ImageForm } from "@entities/ClientComponents/ImageForm";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";
import Button from "@shared/ui/Button";

import best_sellers_pc from "@assets/webp/pc/best_sellers_pc.png";

import styles from "./styles.module.scss";

export const BestSellers = () => {
  const { content } = useFetchContent();
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
            text={
              content && content["14"] ? content["14"].value : "Best Sellers"
            }
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_15"
          />
          <h3
            className={styles.best_sellers__heading}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_16"
          >
            {content && content["15"] ? content["15"].value : "Best Sellers"}
          </h3>
          <div className="flex items-center gap-10 mt-4">
            <p
              className={styles.best_sellers__paragraph}
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_17"
            >
              {content && content["16"]
                ? content["16"].value
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            </p>
            <ArrowAnimation />
          </div>
          <Button
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_18"
            text={
              content && content["17"] ? content["17"].value : "Best Sellers"
            }
            buttonType="transparent"
            margin="mt-8"
            icon={faChevronRight}
          />
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_19"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_20"
                icon={faMoneyBill}
                name={
                  content && content["18"]
                    ? content["18"].value
                    : "Coffee Bikes"
                }
                text={
                  content && content["19"]
                    ? content["19"].value
                    : "Coffee Bikes"
                }
              />
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_21"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_22"
                icon={faMoneyBill}
                name={
                  content && content["20"]
                    ? content["20"].value
                    : "Ice Cream Bikes"
                }
                text={
                  content && content["21"]
                    ? content["21"].value
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="flex items-center gap-4 ">
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_23"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_24"
                icon={faMoneyBill}
                name={
                  content && content["22"]
                    ? content["22"].value
                    : "Modern Bikes"
                }
                text={
                  content && content["23"]
                    ? content["23"].value
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
              <AboutCard
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_25"
                secondId="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_26"
                icon={faMoneyBill}
                name={
                  content && content["24"]
                    ? content["24"].value
                    : "Hot Dog Bikes"
                }
                text={
                  content && content["25"]
                    ? content["25"].value
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
          </div>
        </div>
        <img
          src={
            content && content["26"] ? content["26"].value : "Ice Cream Bikes"
          }
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_27"
          alt="Best Sellers"
          onClick={handleImageFormVisible}
          className={styles.best_sellers__image}
        />
      </section>
    </>
  );
};
