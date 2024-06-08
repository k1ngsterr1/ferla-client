import React from "react";

import styles from "./styles.module.scss";

export interface IBlogCard {
  title: string;
  image: string;
  href: string;
}

export const BlogCard: React.FC<IBlogCard> = ({ title, href, image }) => {
  return (
    <div className={`${styles.blog_card} hoverable`}>
      <img src={image} alt={title} className={styles.blog_card__image} />
      <span className={styles.blog_card__title}>{title}</span>
      <a href={href} className={`${styles.blog_card__link} hoverable`}>
        Read More
      </a>
    </div>
  );
};
