import { Cursor } from "@shared/ui/Cursor";
import { CartCard } from "@entities/CartCard";
import { useGetCarts } from "@shared/lib/hooks/useGetCarts";
import { useUserData } from "@shared/lib/hooks/useUserData";

import styles from "./styles.module.scss";

export const AllCarts = () => {
  const { data, isLoading } = useGetCarts();
  const { userData } = useUserData();

  if (isLoading) {
    return <div>Loading...</div>; // Make sure to return this
  }

  // Ensure data is not null when attempting to map over it
  const content = data
    ? data.map((cart, index) => (
        <CartCard
          id={index}
          accessToken={userData?.accessToken}
          isDeletable
          key={index} // It's better to use unique ids if available
          name={cart.name}
          photo={cart.img_url}
          paragraph={cart.description}
          title={cart.name}
        />
      ))
    : null;

  return (
    <div>
      <Cursor />
      <main className={styles.screen}>
        <h1 className={styles.screen__heading}>All Carts</h1>
        <div className={styles.screen__content}>{content}</div>
      </main>
    </div>
  );
};
