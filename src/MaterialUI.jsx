/* eslint-disable no-unused-vars */
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import ReportIcon from "@mui/icons-material/Report";
import { AlertSnackbars } from "./components/pages/AlertSnackbars";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import { WeatherApp } from "./components/pages/weather-app/WeatherApp";
import AnimationIcon from "@mui/icons-material/Animation";
import { SkeletonApp } from "./components/pages/Skeleton-app/SkeletonApp";
import { Home } from "./components/pages/Home/Home";
import { NavbarC } from "./components/pages/Navbar/NavbarC";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
const navLinks = [
  {
    id: 1,
    title: "home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "register",
    path: "/register",
    icon: <HowToRegIcon />,
  },
  {
    id: 3,
    title: "login",
    path: "/login",
    icon: <LogoutIcon />,
  },

  {
    id: 4,
    title: "alert/snackbar",
    path: "/alert",
    icon: <ReportIcon />,
  },

  {
    id: 5,
    title: "app clima",
    path: "/clima",
    icon: <SevereColdIcon />,
  },
  {
    id: 6,
    title: "app skeleton",
    path: "/skeleton",
    icon: <AnimationIcon />,
  },
];
export const MaterialUI = () => {
  return (
    <>
      <NavbarC navLinks={navLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/alert" element={<AlertSnackbars />} />
          <Route path="/clima" element={<WeatherApp />} />
          <Route path="/skeleton" element={<SkeletonApp />} />
        </Routes>
      </Container>
    </>
  );
};
