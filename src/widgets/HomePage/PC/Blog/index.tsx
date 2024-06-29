"use client";
import { blogContent } from "@shared/lib/content/blogContent";
import { BlogCard } from "@entities/BlogCard";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";
import { useGetBlogs } from "@shared/lib/hooks/useGetBlogs";

import styles from "./styles.module.scss";

export const Blog = () => {
  const { content } = useFetchContent();
  const { blogData } = useGetBlogs();

  return (
    <section className={styles.blog}>
      <div className={styles.blog__upper}>
        <h6
          className={styles.blog__upper__heading}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_55"
        >
          {content && content["54"] ? content["54"].value : "Content not found"}
        </h6>
      </div>
      <div className={styles.blog__content}>
        {blogData?.map((card: any, index: number) => (
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
