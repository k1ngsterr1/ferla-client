import AdminLogo from "@assets/spark_product_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface IMenu {
  onClick: () => void;
}

export const Menu: React.FC<IMenu> = ({ onClick }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__row}>
        <img className={styles.menu__row__spark} src={AdminLogo} />
        <div className={styles.menu__row__text}>Spark Admin Menu</div>
        <FontAwesomeIcon
          icon={faClose}
          className={styles.menu__row__icon}
          onClick={onClick}
        />
      </div>
      <div className={styles.menu__content}>
        <div className={styles.menu__content__links}>
          <a href="/ferla" className={styles.menu__content__links__link}>
            Home
          </a>
          <a
            href="/ferla/add-cart"
            className={styles.menu__content__links__link}
          >
            Add Cart
          </a>
          <a
            href="/ferla/all-carts"
            className={styles.menu__content__links__link}
          >
            All Carts
          </a>

          <a
            href="/ferla/calculator"
            className={styles.menu__content__links__link}
          >
            Calculator
          </a>
        </div>
      </div>
    </div>
  );
};
