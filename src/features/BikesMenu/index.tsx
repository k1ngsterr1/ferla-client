import React, { useRef, useEffect, useState } from "react";
import { cartsMenuContent } from "@shared/lib/content/bikesMenuContent";
import { BikeMenuCard } from "@entities/BikeMenuCard";

import styles from "./styles.module.scss";

interface IBikesMenu {
  onMouseLeave: () => void;
  setMenuRef: any;
}

export const BikesMenu: React.FC<IBikesMenu> = ({
  onMouseLeave,
  setMenuRef,
}) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const [filteredContent, setFilteredContent] = useState(cartsMenuContent);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (localRef.current) {
      setMenuRef(localRef.current);
    }
  }, [setMenuRef]);

  useEffect(() => {
    switch (activeFilter) {
      case "coffeeBikes":
        setFilteredContent(
          cartsMenuContent.filter((card) => card.type === "Coffee Bikes")
        );
        console.log(filteredContent);

        break;
      case "coffeeCarts":
        setFilteredContent(
          cartsMenuContent.filter((card) => card.type === "Coffee Cart")
        );
        break;
      case "ferlaCarts":
        setFilteredContent(
          cartsMenuContent.filter((card) => card.type === "Ferla Cart")
        );
        break;
      default:
        setFilteredContent(cartsMenuContent);
        break;
    }
  }, [activeFilter]);

  return (
    <div
      className={styles.bikes_menu}
      onMouseLeave={onMouseLeave}
      ref={localRef}
    >
      <div className={styles.bikes_menu__content}>
        <div className={styles.bikes_menu__content__cards}>
          {filteredContent.map((card, index) => (
            <BikeMenuCard
              name={card.name}
              image={card.image}
              href={card.href}
              key={index}
            />
          ))}
        </div>
        <span className={styles.bikes_menu__content__separator} />
        <div className="flex flex-col items-center gap-2">
          <button
            className={`${styles.bikes_menu__content__button} hoverable`}
            onClick={() => setActiveFilter("Coffee Bikes")}
          >
            Coffee Bikes
          </button>
          <button
            className={`${styles.bikes_menu__content__button} hoverable`}
            onClick={() => setActiveFilter("coffeeCarts")}
          >
            Coffee Carts
          </button>
          <button
            className={`${styles.bikes_menu__content__button} hoverable`}
            onClick={() => setActiveFilter("ferlaCarts")}
          >
            Ferla Carts
          </button>
        </div>
      </div>
    </div>
  );
};
