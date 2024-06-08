import { EmailInput } from "@entities/EmailInput";

import styles from "./styles.module.scss";

export const EmailForm = () => {
  return (
    <div className={styles.email_form}>
      <span className={styles.email_form__heading} id="ferla-edit-40">
        Contact With Us
      </span>
      <p className={styles.email_form__paragraph} id="ferla-edit-41">
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <EmailInput />
    </div>
  );
};
