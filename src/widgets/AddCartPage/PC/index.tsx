import { useState } from "react";
import { AdminTextArea } from "@shared/ui/AdminTextArea";
import { AdminFileInput } from "@shared/ui/AdminFileInput";
import AdminButton from "@shared/ui/AdminButton";
import AdminInput from "@shared/ui/AdminInput";
import handleSubmit from "@shared/lib/hooks/useSubmitCart";
import { useUserData } from "@shared/lib/hooks/useUserData";

import styles from "../../../pages/AddCart/styles.module.scss";

export const AddCartScreen = () => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [code, setWebsiteCode] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { userData } = useUserData();

  return (
    <main className={styles.screen}>
      <h1 className={styles.screen__heading}>Add Cart Form</h1>
      <form
        className={styles.screen__form}
        onSubmit={(event) =>
          handleSubmit(
            event,
            { code, image, name, price, description },
            userData?.accessToken
          )
        }
      >
        <AdminFileInput
          onChange={(event) => setImage(event.target.files[0])}
          margin="mb-2"
          placeholder="Cart Image"
          name="image"
        />
        <AdminInput
          placeholder="Website Code"
          name="code"
          required
          type="text"
          onChange={(event) => setWebsiteCode(event.target.value)}
        />
        <AdminInput
          placeholder="Cart Name"
          name="name"
          required
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <AdminInput
          placeholder="Cart Price"
          name="price"
          required
          type="number"
          margin="mt-8"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <AdminTextArea
          name="description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          required
          placeholder="Write cart description"
          margin="mt-8"
        />
        <AdminButton text="Add Cart" buttonType="filled" margin="mt-8" />
        <a href="/ferla/all-carts" className={styles.screen__all_carts}>
          All Carts
        </a>
      </form>
    </main>
  );
};
