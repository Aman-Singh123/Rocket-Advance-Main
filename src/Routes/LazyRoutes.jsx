import { lazy } from "react";

export const DashboardLayout = lazy(() => import("../Components/Layout/DashboardLayout.jsx"));
export const HomeLayout = lazy(() => import("../Components/HomeLayout/HomeLayout.jsx"));

export const Home = lazy(() => import("../Pages/Home/Home.jsx"));
export const Register = lazy(() => import("../Pages/Register/Register.jsx"));
export const ResetPassword = lazy(() => import("../Pages/ResetPassword/ResetPassword.jsx"));
export const ForgotPassword = lazy(() => import("../Pages/ForgotPassword/ForgotPassword.jsx"));


