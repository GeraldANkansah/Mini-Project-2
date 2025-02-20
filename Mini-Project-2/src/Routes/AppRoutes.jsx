import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import DashboardPage from "../pages/DashboardPage";
import Register from "../components/Register";
import Login from "../components/Login";
import Converter from "../components/Converter";
import AboutPage from "../pages/AboutPage";
import Demo from "../components/Demo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/demo" element={<Demo />}/>
    </Routes>
  );
};

export default AppRoutes; 
