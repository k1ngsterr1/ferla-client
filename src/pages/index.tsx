import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/lib/routes/routes";
import { HomePage } from "./Page";
import { AddCart } from "./AddCart";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.FERLA} element={<HomePage />} />
        <Route path={ROUTE_CONSTANTS.ADD_CART} element={<AddCart />} />
      </Routes>
    </Router>
  );
};
