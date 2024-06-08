import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/lib/routes/routes";
import { HomePage } from "./Page";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.FERLA} element={<HomePage />} />
      </Routes>
    </Router>
  );
};
