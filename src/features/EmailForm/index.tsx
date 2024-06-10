import { EmailInput } from "@entities/EmailInput";

import styles from "./styles.module.scss";

export const EmailForm = () => {
  return (
    <div className={styles.email_form}>
      <span
        className={styles.email_form__heading}
        id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_49"
      >
        Contact With Us
      </span>
      <p
        className={styles.email_form__paragraph}
        id="ferla_editable_89d6700c-288d-46c6-b463-60aae8b1b830_50"
      >
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <EmailInput />
    </div>
  );
};
