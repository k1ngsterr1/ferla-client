import AdminInput from "@shared/ui/AdminInput";
import PasswordInputProp from "@shared/ui/PasswordInput";
import AdminButton from "@shared/ui/AdminButton";

import logo from "@assets/spark-logo/spark_product_logo.svg";

import styles from "./styles.module.scss";

export const AdminLoginForm = () => {
  return (
    <form className={styles.admin_login_form}>
      <div className="w-full flex flex-col items-center justify-center">
        <img
          className={styles.admin_login_form__image}
          src={logo}
          alt="Spark Logo"
        />
        <h1 className={styles.admin_login_form__heading}>Login in Spark CMS</h1>
        <p className={styles.admin_login_form__paragraph}>
          Please login to our CMS System in order to have access to your website
        </p>
        <AdminInput
          placeholder="Your email"
          type="text"
          name="email"
          margin="mt-8"
        />
        <PasswordInputProp
          placeholder="Your Password"
          type="text"
          name="password"
          margin="mt-4"
        />
        <AdminButton text="Login" buttonType="filled" margin="mt-4" />
      </div>
    </form>
  );
};
