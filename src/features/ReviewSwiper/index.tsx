"use client";
import React, { useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "@entities/ReviewCard";
import { reviewCardContent } from "@shared/lib/content/reviewsContent";
import SwiperButton from "@shared/ui/SwiperButtons";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ReviewSwiper = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        className={`${styles.review_swiper} !w-[100%]`}
        navigation={false}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
          console.log(swiper);
        }}
      >
        {reviewCardContent.map((review, index) => (
          <SwiperSlide
            className={`${styles.review_swiper__slides__slide} flex items-center justify-center`}
            key={index}
          >
            <ReviewCard
              name={review.name}
              photo={review.photo}
              undername={review.undername}
              alt={review.alt}
              text={review.text}
            />
          </SwiperSlide>
        ))}
        <SwiperButton
          direction="prev"
          position="left-0"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <SwiperButton
          direction="next"
          position="right-0"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Swiper>
    </>
  );
};
