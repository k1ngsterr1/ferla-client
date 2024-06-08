"use client";
import red_logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";

export const VideoBlock = () => {
  return (
    <section className={styles.video_block} id="video">
      <img
        src={red_logo}
        id="ferla-edit-40"
        className={styles.video_block__logo}
        alt="Ferla Bikes Logo"
      />
      <div className={styles.video_block__cover}>
        <iframe
          src="https://www.youtube.com/embed/N-yJypPvBN0?si=vSnMUT_Gcdu3Nmuo"
          title="YouTube video player"
          frameBorder="0"
          className={styles.video_block__cover}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
};
