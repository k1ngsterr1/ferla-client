import { AdminLoginForm } from "@widgets/AdminLoginForm";
import { Cursor } from "@shared/ui/Cursor";
import { SparkMenu } from "@shared/ui/SparkMenu";
import { Menu } from "@widgets/Menu";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

export const Login = () => {
  const { handleOpen, isOpen } = useOpenMenu();

  return (
    <section>
      <Cursor />
      <SparkMenu onClick={handleOpen} />
      {isOpen && <Menu onClick={handleOpen} />}
      <AdminLoginForm />
    </section>
  );
};
