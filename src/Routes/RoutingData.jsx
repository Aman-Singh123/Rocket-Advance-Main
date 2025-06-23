import { ForgotPassword, Home, Register, ResetPassword } from "./LazyRoutes";
import { PublicRoutesPath } from "./StaticPaths.jsx";

export const publicRoutesData = [
  {
    path: PublicRoutesPath.home,
    component: <Home />,
  },
  {
    path: PublicRoutesPath.register,
    component: <Register />,
  },
  {
    path: PublicRoutesPath.resetPassword,
    component: <ResetPassword />,
  },
  {
    path: PublicRoutesPath.forgotPassword,
    component: <ForgotPassword />,
  },
];

export const privateRoutesData = [];
