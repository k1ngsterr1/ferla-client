"use client";
import React from "react";
import { blogContent } from "@shared/lib/content/blogContent";
import { BlogCard } from "@entities/BlogCard";

import styles from "./styles.module.scss";

export const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.blog__upper}>
        <h6 className={styles.blog__upper__heading}>Fresh From Our Blog</h6>
      </div>
      <div className={styles.blog__content}>
        {blogContent.map((card, index) => (
          <BlogCard
            title={card.title}
            href={card.href}
            image={card.image}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
