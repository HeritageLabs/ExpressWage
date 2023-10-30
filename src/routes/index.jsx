import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ALL_PAYROLLEE_URL, BUSINESS_URL, EMPLOYEE_URL, FAMILY_URL, HOME_URL, PAYROLL_URL } from "../config/paths";
import AllPayrollee from "../pages/dashboard/allPayrollee";
import Payrolls from "../pages/dashboard/payrolls";
import BusinessPayrollee from "../pages/dashboard/businessPayrollee";
import FamilyPayrollee from "../pages/dashboard/familyPayrollee";
import EmployeePayrollee from "../pages/dashboard/employeesPayrollee";

const WebRoutes = () => (
  <Routes>
    <Route index path={HOME_URL} element={<Home />} />
    <Route path={ALL_PAYROLLEE_URL} element={<AllPayrollee />} />
    <Route path={PAYROLL_URL} element={<Payrolls />} />
    <Route path={BUSINESS_URL} element={<BusinessPayrollee />} />
    <Route path={FAMILY_URL} element={<FamilyPayrollee />} />
    <Route path={EMPLOYEE_URL} element={<EmployeePayrollee />} />
  </Routes>
);

export default WebRoutes;
