import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ALL_PAYROLLEE_URL, HOME_URL, PAYROLL_URL } from "../config/paths";
import AllPayrollee from "../pages/dashboard/allPayrollee";
import Payrolls from "../pages/dashboard/payrolls";

const WebRoutes = () => (
  <Routes>
    <Route index path={HOME_URL} element={<Home />} />
    <Route path={ALL_PAYROLLEE_URL} element={<AllPayrollee />} />
    <Route path={PAYROLL_URL} element={<Payrolls />} />
  </Routes>
);

export default WebRoutes;
