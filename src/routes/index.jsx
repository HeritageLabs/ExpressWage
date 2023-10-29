import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { DASHBOARD_URL, HOME_URL } from "../config/paths";
import DashboardHome from "../pages/dashboard";

const WebRoutes = () => (
  <Routes>
    <Route index path={HOME_URL} element={<Home />} />
    <Route path={DASHBOARD_URL} element={<DashboardHome />} />
  </Routes>
);

export default WebRoutes;
