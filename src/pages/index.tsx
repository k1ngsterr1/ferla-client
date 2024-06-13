import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/lib/routes/routes";
import { HomePage } from "./Page";
import { AddCart } from "./AddCart";
import { CalculatorPage } from "./CalculatorPage";
import { Login } from "./Login";
import ProtectedRoute from "@widgets/ProtectedRoute";
import { ForbiddenPage } from "./Forbidden";
import { AllCarts } from "./AllCarts";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
        <Route path={ROUTE_CONSTANTS.FORBIDDEN} element={<ForbiddenPage />} />
        <Route
          path={ROUTE_CONSTANTS.FERLA}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_CONSTANTS.ALL_CARTS}
          element={
            <ProtectedRoute>
              <AllCarts />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_CONSTANTS.CALCULATOR_CART}
          element={
            <ProtectedRoute>
              <CalculatorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_CONSTANTS.ADD_CART}
          element={
            <ProtectedRoute>
              <AddCart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
