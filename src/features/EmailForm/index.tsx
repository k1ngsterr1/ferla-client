import { EmailInput } from "@entities/EmailInput";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

import styles from "./styles.module.scss";

export const EmailForm = () => {
  const { content } = useFetchContent();
  return (
    <div className={styles.email_form}>
      <span
        className={styles.email_form__heading}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_51"
      >
        {content && content["48"] ? content["48"].value : "Content Not Found"}
      </span>
      <p
        className={styles.email_form__paragraph}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_52"
      >
        {content && content["49"] ? content["49"].value : "Content Not Found"}
      </p>
      <EmailInput />
    </div>
  );
};
