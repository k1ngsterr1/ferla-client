import { AdminTextArea } from "@shared/ui/AdminTextArea";
import { AdminFileInput } from "@shared/ui/AdminFileInput";
import AdminButton from "@shared/ui/AdminButton";
import AdminInput from "@shared/ui/AdminInput";

import styles from "../../../pages/AddCart/styles.module.scss";

export const AddCartScreen = () => {
  return (
    <main className={styles.screen}>
      <h1 className={styles.screen__heading}>Add Cart Form</h1>
      <form className={styles.screen__form}>
        <AdminFileInput
          onChange={() => console.log("LOL")}
          margin="mb-2"
          placeholder="Cart Image"
          name="cart-image"
        />
        <AdminInput placeholder="Cart Name" name="name" required type="text" />
        <AdminInput
          placeholder="Cart Price"
          name="price"
          required
          type="text"
          margin="mt-8"
        />
        <AdminTextArea
          name="description"
          required
          placeholder="Write cart description"
          margin="mt-8"
        />
        <AdminButton text="Add Cart" buttonType="filled" margin="mt-8" />
      </form>
    </main>
  );
};
