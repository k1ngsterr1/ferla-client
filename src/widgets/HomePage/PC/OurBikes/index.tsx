import { cartsContent } from "@shared/lib/content/cartsContent";
import { CartCard } from "@entities/CartCard";
import { Popup } from "@entities/Popup";

import styles from "./styles.module.scss";

export const OurBikes = () => {
  return (
    <section className={styles.bikes} id="bikes">
      <div className={styles.bikes__upper}>
        <h6
          className={styles.bikes__upper__heading}
          id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_46"
        >
          Our{" "}
          <strong
            className="text-red"
            // id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_46"
          >
            Bikes
          </strong>
        </h6>
      </div>
      <div className={styles.bikes__cards}>
        {cartsContent.map((card, index) => (
          <CartCard
            title={card.title}
            name={card.name}
            paragraph={card.paragraph}
            photo={card.image}
            key={index}
          />
        ))}
      </div>
      <Popup />
    </section>
  );
};
