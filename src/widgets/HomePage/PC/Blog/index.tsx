"use client";
import React from "react";
import { blogContent } from "@shared/lib/content/blogContent";
import { BlogCard } from "@entities/BlogCard";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

import styles from "./styles.module.scss";

export const Blog = () => {
  const { content } = useFetchContent();

  return (
    <section className={styles.blog}>
      <div className={styles.blog__upper}>
        <h6
          className={styles.blog__upper__heading}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_50"
        >
          {content && content["49"] ? content["49"].value : "Content not found"}
        </h6>
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
