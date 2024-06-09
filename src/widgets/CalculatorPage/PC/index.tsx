import AdminInput from "@shared/ui/AdminInput";
import styles from "./styles.module.scss";
import AdminButton from "@shared/ui/AdminButton";

export const CalculatorPageScreen = () => {
  return (
    <div className={styles.calculator}>
      <h1 className={styles.calculator__heading}>Calculator Namings</h1>
      <form className="flex flex-col items-center mt-16">
        <span className={`${styles.calculator__span} mb-2`}>Value: 0-1</span>
        <AdminInput
          placeholder="Under one month"
          margin="mt-0"
          type="text"
          name="one_month"
        />
        <div className="flex flex-col items-center mt-4">
          <span className={`${styles.calculator__span} mb-2`}>Value: 1-2</span>
          <AdminInput
            placeholder="Under two month"
            margin="mt-0"
            type="text"
            name="two_month"
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <span className={`${styles.calculator__span} mb-2`}>Value: 2-3</span>
          <AdminInput
            placeholder="Under three month"
            margin="mt-4"
            type="text"
            name="three_month"
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <span className={`${styles.calculator__span} mb-2`}>Value: 3-4</span>
          <AdminInput
            placeholder="Under four month"
            margin="mt-0"
            type="text"
            name="four_month"
          />
        </div>
        <AdminButton text="Submit" buttonType="filled" margin="mt-8" />
      </form>
    </div>
  );
};
