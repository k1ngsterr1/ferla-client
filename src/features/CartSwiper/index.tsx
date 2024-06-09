"use client";
import React, { useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

interface ICartSwiper {
  images: { url: StaticImageData; alt: string }[];
}

export const CartSwiper: React.FC<ICartSwiper> = ({ images }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className={styles.cart_swiper_block}>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.cart_swiper_block__swiper}
        navigation={false}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            className={styles.cart_swiper_block__swiper__slide}
            key={index}
          >
            <Image
              className={styles.cart_swiper_block__swiper__slide__image}
              src={image.url}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
