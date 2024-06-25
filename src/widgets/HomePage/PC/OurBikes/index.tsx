import { cartsContent } from "@shared/lib/content/cartsContent";
import { CartCard } from "@entities/CartCard";
import { Popup } from "@entities/Popup";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";
import { useGetCarts } from "@shared/lib/hooks/useGetCarts";

export const OurBikes = () => {
  const { content } = useFetchContent();
  const { data } = useGetCarts();

  console.log("data:", data);

  return (
    <section className={styles.bikes} id="bikes">
      <div className={styles.bikes__upper}>
        <h6
          className={styles.bikes__upper__heading}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_50"
        >
          {content && content["49"] ? content["49"].value : "Content not found"}
        </h6>
      </div>
      <div className={styles.bikes__cards}>
        {data?.map((card, index) => (
          <CartCard
            id={card.id}
            title={card.title}
            name={card.name}
            paragraph={card.paragraph}
            photo={card.img_url}
            key={index}
          />
        ))}
      </div>
      <Popup />
    </section>
  );
};
