import { AddCartScreen } from "@widgets/AddCartPage/PC";
import { Cursor } from "@shared/ui/Cursor";

import styles from "./styles.module.scss";

export const AddCart = () => {
  return (
    <>
      <Cursor />
      <main className={styles.screen}>
        <AddCartScreen />
      </main>
    </>
  );
};
