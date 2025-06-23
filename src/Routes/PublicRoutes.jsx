import React from "react";
import { Outlet } from "react-router-dom";
import { HomeLayout } from "./LazyRoutes.jsx";

const PublicRoute = () => (
  <HomeLayout>
    <Outlet />
  </HomeLayout>
);

export default PublicRoute;
