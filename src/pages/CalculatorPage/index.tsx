import { Cursor } from "@shared/ui/Cursor";
import { CalculatorPageScreen } from "@widgets/CalculatorPage/PC";

export const CalculatorPage = () => {
  return (
    <div className="container">
      <Cursor />
      <CalculatorPageScreen />
    </div>
  );
};
