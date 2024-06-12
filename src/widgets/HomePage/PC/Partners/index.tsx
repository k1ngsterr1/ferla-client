import React, { useState } from "react";
import illustration from "@assets/vectors/illustrations.svg";
import { setComponentId } from "../../../../redux/idSlice";
import { useDispatch, useSelector } from "react-redux";
import { clientContent } from "@shared/lib/content/clientsContent";

import styles from "./styles.module.scss";
import { ImageForm } from "@entities/ClientComponents/ImageForm";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

export const PartnersScreen = () => {
  const { content, loading, error } = useFetchContent();
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
      <section className={styles.partners} id="partners">
        <div className={styles.partners__upper}>
          <img
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_31"
            src={illustration}
            className={styles.partners__upper__image}
            alt="Illustration"
          />
          <h5
            className={styles.partners__upper__heading}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_32"
          >
            {/* Partnering with Industry Giants <br />
            <strong
              className="text-red"
              // id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_32"
            >
              Ferla’s {""}
            </strong>
            
            Trusted Collaborators */}
            {content && content["31"]
              ? content["31"].value
              : "Content Not Found"}
          </h5>
        </div>
        <div className={styles.partners__images}>
          {clientContent.map((image, index) => (
            <img
              id={`editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_${
                33 + index
              }`}
              onClick={handleImageFormVisible}
              src={
                content && content[`${32 + index}`]
                  ? content[`${32 + index}`].value
                  : "Partnering with Industry Giants Ferla’s Trusted Collaborators"
              }
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
