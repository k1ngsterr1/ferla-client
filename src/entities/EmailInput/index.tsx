import styles from "./styles.module.scss";

export const EmailInput = () => {
  return (
    <div className={`${styles.email_input} hoverable`}>
      <input
        className={styles.email_input__input}
        required
        placeholder="Request A Quote"
      />
      <button
        className={`${styles.email_input__button} hoverable !cursor-none`}
      >
        Send
      </button>
    </div>
  );
};
