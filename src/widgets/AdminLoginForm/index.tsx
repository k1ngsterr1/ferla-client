import AdminInput from "@shared/ui/AdminInput";
import PasswordInputProp from "@shared/ui/PasswordInput";
import AdminButton from "@shared/ui/AdminButton";
import { useSubmitLogin } from "@shared/lib/hooks/useSubmitLogin";
import { ErrorDisplay } from "@shared/ui/Error";

import logo from "@assets/spark-logo/spark_product_logo.svg";

import styles from "./styles.module.scss";

export const AdminLoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    passwordError,
    handleSubmit,
    errors,
  } = useSubmitLogin();

  return (
    <form
      className={styles.admin_login_form}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <img
          className={styles.admin_login_form__image}
          src={logo}
          alt="Spark Logo"
        />
        <h1 className={styles.admin_login_form__heading}>
          Login in Spark Admin
        </h1>
        <p className={styles.admin_login_form__paragraph}>
          Please login to our CMS System in order to have access to your website
        </p>
        <AdminInput
          placeholder="Your email"
          type="text"
          name="email"
          margin="mt-8"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorDisplay message={errors.email} />
        <PasswordInputProp
          placeholder="Your Password"
          type="text"
          name="password"
          margin="mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorDisplay message={passwordError} />
        <AdminButton
          text="Login"
          buttonType="filled"
          type="submit"
          margin="mt-4"
        />
      </div>
    </form>
  );
};
