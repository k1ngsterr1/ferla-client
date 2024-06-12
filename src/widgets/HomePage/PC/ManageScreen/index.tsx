"use client";
import React, { useState } from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@entities/Block";
import { Video } from "@entities/Video";
import { useDispatch, useSelector } from "react-redux";
import { setComponentId } from "../../../../redux/idSlice";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

import styles from "./styles.module.scss";

export const ManageScreen = () => {
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
      <section className={styles.manage_block} id="markets">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <MiniText
              text="From Initial Concept to Market Leader"
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_38"
            />
            <div className="w-full flex items-start justify-between">
              <h6
                className={styles.manage_block__heading}
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_39"
              >
                Redefining Mobile Business Solutions With {""}
                <strong
                  className="text-red"
                  id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_40"
                >
                  Ferla Bikes
                </strong>
              </h6>
              <Button
                text="Manage Your Business"
                buttonType="transparent"
                icon={faChevronRight}
              />
            </div>
          </div>
          <div className="flex">
            <div className={styles.manage_block__list}>
              <Block
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_41"
                icon={faMoneyBill}
                paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
              />
              <hr className={styles.manage_block__list__separator} />
              <Block
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_42"
                icon={faMoneyBill}
                margin="mt-8"
                paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
              />
              <hr className={styles.manage_block__list__separator} />
              <Block
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_43"
                icon={faMoneyBill}
                margin="mt-8"
                paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
              />
            </div>
            <Video
              video_link="https://www.youtube.com/channel/UCZa63PA8Ls17M4v3NebRqLQ"
              onClick={handleImageFormVisible}
            />
          </div>
        </div>
      </section>
    </>
  );
};
