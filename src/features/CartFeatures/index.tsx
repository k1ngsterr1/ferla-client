"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "@shared/ui/Button";
import { CartFeatureTab, ICartFeatureTabProps } from "@entities/CartFeatureTab";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";

interface ICartsFeaturesProps {
  title: string;
  paragraph: string;
  miniText: string;
  image: StaticImageData;
  featureTabs: ICartFeatureTabProps[];
}

export const CartsFeatures: React.FC<ICartsFeaturesProps> = ({
  title,
  miniText,
  image,
  featureTabs,
}) => {
  return (
    <section className={styles.carts_features}>
      <Image className={styles.carts_features__image} src={image} alt={title} />
      <div className="flex flex-col items-start ml-16">
        <Fade delay={100} direction="right">
          <span className={styles.carts_features__mini_text}>{miniText}</span>
        </Fade>
        <Fade delay={150} direction="right">
          <h4 className={styles.carts_features__title}>{title}</h4>
        </Fade>
        <div className={styles.carts_features__tabs}>
          {featureTabs.map((featuerTab, index) => (
            <Fade cascade key={index}>
              <CartFeatureTab name={featuerTab.name} key={index} />
            </Fade>
          ))}
        </div>
        <Button text="View All" buttonType="filled" margin="mt-8" />
      </div>
    </section>
  );
};
