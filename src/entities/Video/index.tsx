"use client";
import React from "react";
import { VideoButton } from "@shared/ui/VideoButton";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "./styles.module.scss";

interface IVideoProps {
  video_link: string;
  onClick?: () => void;
  id: string;
  data: any;
}

export const Video: React.FC<IVideoProps> = ({
  video_link,
  onClick,
  id,
  data,
}) => {
  return (
    <div className={styles.video} id={id}>
      <VideoButton
        onClick={() => window.open(video_link, "_blank", "noopener,noreferrer")}
      />
      <img
        src={data}
        onClick={onClick}
        className={styles.video__market}
        alt="Video Market"
      />
    </div>
  );
};
