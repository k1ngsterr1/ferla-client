import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/lib/routes/routes";
import { HomePage } from "./Page";
import { AddCart } from "./AddCart";
import { CalculatorPage } from "./CalculatorPage";
import { Login } from "./Login";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
        <Route path={ROUTE_CONSTANTS.FERLA} element={<HomePage />} />
        <Route
          path={ROUTE_CONSTANTS.CALCULATOR_CART}
          element={<CalculatorPage />}
        />
        <Route path={ROUTE_CONSTANTS.ADD_CART} element={<AddCart />} />
      </Routes>
    </Router>
  );
};
