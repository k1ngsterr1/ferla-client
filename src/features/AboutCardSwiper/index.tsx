"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutCard } from "@entities/AboutCard";
import { content } from "@shared/lib/content/aboutCardContent";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const AboutCardSwiper = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      className={styles.swiper}
      navigation={false}
    >
      {content.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" flex justify-center items-center">
            <AboutCard name={item.name} icon={item.icon} text={item.text} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
