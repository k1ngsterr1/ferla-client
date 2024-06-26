"use client";
import Button from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { useForm } from "react-hook-form";
import { DatePickerInput } from "@shared/ui/DatePicker";

import styles from "../../PC/Form/styles.module.scss";

export const SubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFunction = (data: any) => {
    console.log(data);
  };

  return (
    <>
      {" "}
      <form
        className={styles.form_section__form}
        onSubmit={handleSubmit(submitFunction)}
      >
        <Input
          labelText="Your Name"
          type="text"
          margin="mt-4"
          required
          {...register("name", { required: true, maxLength: 50 })}
        />
        {errors.name && <p className={styles.error}>Name is required!</p>}
        <Input
          labelText="Phone Number"
          type="phone"
          margin="mt-14"
          required
          {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/ })}
        />
        {errors.phoneNumber && (
          <p className={styles.error}>Invalid phone number!</p>
        )}
        <Input
          labelText="Email"
          type="email"
          margin="mt-14"
          required
          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {errors.email && <p className={styles.error}>Invalid email address!</p>}
        <Input
          labelText="Write Your Message"
          type="text"
          name="date"
          // margin="mt-14"
          required
        />
        {errors.date && <p className={styles.error}>Date is required!</p>}

        <Button
          text="Send Form"
          type="submit"
          buttonType="filled"
          margin="mt-8"
        />
      </form>
    </>
  );
};
