import { EmailInput } from "@entities/EmailInput";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

import styles from "./styles.module.scss";

export const EmailForm = () => {
  const { content } = useFetchContent();
  return (
    <div className={styles.email_form}>
      <span
        className={styles.email_form__heading}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_70"
      >
        {content && content["66"] ? content["66"].value : "Content Not Found"}
      </span>
      <p
        className={styles.email_form__paragraph}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_71"
      >
        {content && content["67"] ? content["67"].value : "Content Not Found"}
      </p>
      <EmailInput />
    </div>
  );
};
