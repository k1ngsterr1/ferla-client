import React, { useState } from "react";
import illustration from "@assets/vectors/illustrations.svg";
import { clientContent } from "@shared/lib/content/clientsContent";

import styles from "./styles.module.scss";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

export const PartnersScreen = () => {
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
      <section className={styles.partners} id="partners">
        <div className={styles.partners__upper}>
          <img
            id="ferla-edit-24"
            src={illustration}
            className={styles.partners__upper__image}
            alt="Illustration"
          />
          <h5 className={styles.partners__upper__heading} id="ferla-edit-25">
            Partnering with Industry Giants <br />
            <strong className="text-red" id="ferla-edit-26">
              Ferla’s {""}
            </strong>
            Trusted Collaborators
          </h5>
        </div>
        <div className={styles.partners__images}>
          {clientContent.map((image, index) => (
            <img
              id={`ferla-edit-${27 + index}`}
              onClick={handleImageFormVisible}
              src={image.image}
              alt={image.alt}
              key={index}
              className={styles.partners__images__image}
            />
          ))}
        </div>
      </section>
    </>
  );
};
