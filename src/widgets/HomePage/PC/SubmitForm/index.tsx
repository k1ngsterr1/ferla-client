"use client";
import { useEffect, useState } from "react";
import Button from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { FormPopup } from "@entities/FormPopup";

import styles from "../../PC/Form/styles.module.scss";

export interface IData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export const SubmitForm = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { handleSubmit, onSubmit, setValue } = useSendEmail();

  useEffect(() => {
    setValue("name", name);
    setValue("phoneNumber", phone);
    setValue("email", email);
    setValue("message", message);
  }, [name, phone, email, message, setValue]);

  return (
    <>
      <form
        className={styles.form_section__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          labelText="Your Name"
          type="text"
          name="name"
          required
          margin="min-[1440px]:mt-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          labelText="Phone Number"
          type="phone"
          name="phone"
          // margin="mt-14"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          labelText="Email"
          type="email"
          name="email"
          // margin="mt-14"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          labelText="Write Your Message"
          type="text"
          name="date"
          // margin="mt-14"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          text="Send Form"
          type="submit"
          buttonType="filled"
          margin="mt-8"
        />
      </form>
      <FormPopup />
    </>
  );
};
