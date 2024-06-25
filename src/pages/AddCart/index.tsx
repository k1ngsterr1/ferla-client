import { AddCartScreen } from "@widgets/AddCartPage/PC";
import { Cursor } from "@shared/ui/Cursor";
import { SparkMenu } from "@shared/ui/SparkMenu";
import { Menu } from "@widgets/Menu";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

import styles from "./styles.module.scss";

export const AddCart = () => {
  const { handleOpen, isOpen } = useOpenMenu();

  return (
    <>
      <Cursor />
      <SparkMenu onClick={handleOpen} />
      {isOpen && <Menu onClick={handleOpen} />}
      <main className={styles.screen}>
        <AddCartScreen />
      </main>
    </>
  );
};
