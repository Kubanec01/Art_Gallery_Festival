import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage/HomePage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
