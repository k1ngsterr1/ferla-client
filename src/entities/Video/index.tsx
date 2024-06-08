"use client";
import React from "react";
import { VideoButton } from "@shared/ui/VideoButton";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "./styles.module.scss";

interface IVideoProps {
  video_link: string;
  onClick?: () => void;
  id: string;
}

export const Video: React.FC<IVideoProps> = ({ video_link, onClick, id }) => {
  return (
    <div className={styles.video} id={id}>
      <VideoButton
        onClick={() => window.open(video_link, "_blank", "noopener,noreferrer")}
      />
      <img
        src={market_image}
        onClick={onClick}
        className={styles.video__market}
        alt="Video Market"
      />
    </div>
  );
};
