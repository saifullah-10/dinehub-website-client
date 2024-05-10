import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Purchase from "../pages/Purchase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
    ],
  },
]);

export default router;
