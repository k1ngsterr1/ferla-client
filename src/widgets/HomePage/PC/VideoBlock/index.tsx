"use client";
import red_logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

export const VideoBlock = () => {
  const { content } = useFetchContent();

  return (
    <section className={styles.video_block} id="video">
      <img
        src={
          content && content["52"] ? content["52"].value : "Content not found"
        }
        id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_53"
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
