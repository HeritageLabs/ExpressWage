import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const WebRoutes = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
  </Routes>
);

export default WebRoutes;
