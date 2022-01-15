import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { routes } from "../router";

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
        <Route element={<Home />} path="*" />
      </Routes>
    </div>
  );
};

export default AppRoutes;
