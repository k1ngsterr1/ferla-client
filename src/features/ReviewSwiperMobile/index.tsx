'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "@entities/ReviewCard";
import { reviewCardContent } from "@shared/lib/content/reviewsContent";
import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ReviewSwiperMobile  = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      className={styles.swiper}
      navigation={false}
    >
      {reviewCardContent.map((review, index) => (
        <SwiperSlide key={index}>
            <ReviewCard
              name={review.name}
              photo={review.photo}
              undername={review.undername}
              alt={review.alt}
              text={review.text}
            />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

