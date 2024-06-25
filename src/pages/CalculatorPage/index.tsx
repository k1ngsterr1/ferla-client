import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";
import { Cursor } from "@shared/ui/Cursor";
import { SparkMenu } from "@shared/ui/SparkMenu";
import { CalculatorPageScreen } from "@widgets/CalculatorPage/PC";
import { Menu } from "@widgets/Menu";

export const CalculatorPage = () => {
  const { handleOpen, isOpen } = useOpenMenu();

  return (
    <div className="container">
      <Cursor />
      <SparkMenu onClick={handleOpen} />
      {isOpen && <Menu onClick={handleOpen} />}
      <CalculatorPageScreen />
    </div>
  );
};
