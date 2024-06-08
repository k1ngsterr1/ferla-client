"use client";
import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@entities/Block";
import { Video } from "@entities/Video";

import styles from "./styles.module.scss";

export const ManageScreenMobile = () => {
  return (
    <section className={styles.manage_screen_mob}>
      <MiniText text="From Initial Concept to" />
      <MiniText text="Market Leader" />
      <h6 className={styles.manage_screen_mob__heading}>
        Redefining Mobile Business Solutions with
        <strong className="text-red"> Ferla Bikes</strong>
      </h6>
      <div className="flex flex-col justify-center items-center mt-8">
        <Block
          icon={faMoneyBill}
          paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
        />
        <hr className={styles.manage_screen_mob__separator} />
        <Block
          icon={faMoneyBill}
          margin="mt-8"
          paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
        />
        <hr className={styles.manage_screen_mob__separator} />
        <Block
          icon={faMoneyBill}
          margin="mt-8"
          paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
        />
      </div>
      <div className=" mt-16">
        <Video video_link="https" />
      </div>
      <Button
        text="Manage Your Business"
        buttonType="transparent"
        icon={faChevronRight}
        margin="mt-8"
      />
    </section>
  );
};
