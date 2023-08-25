import { Route, Routes } from "react-router-dom";
import { WeatherApp } from "../components/pages/weather-app/WeatherApp";
import { SkeletonApp } from "../components/pages/Skeleton-app/SkeletonApp";

export const RouterHome = () => {
  return (
    <>
      <Routes>
        <Route path="/clima" element={<WeatherApp />} />
        <Route path="/login" element={<SkeletonApp />} />
      </Routes>
    </>
  );
};
