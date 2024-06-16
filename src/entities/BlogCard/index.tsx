import React from "react";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

export interface IBlogCard {
  title: string;
  image: string;
  href: string;
}

export const BlogCard: React.FC<IBlogCard> = ({ title, href, image }) => {
  const { content } = useFetchContent();

  return (
    <div className={`${styles.blog_card} hoverable`}>
      <img src={image} alt={title} className={styles.blog_card__image} />
      <span className={styles.blog_card__title}>{title}</span>
      <a
        href={href}
        className={`${styles.blog_card__link} hoverable`}
        id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_55"
      >
        {content && content["54"] ? content["54"].value : "Content not found"}{" "}
      </a>
    </div>
  );
};
