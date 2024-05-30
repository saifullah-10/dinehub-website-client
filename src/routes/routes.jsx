import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Purchase from "../pages/Purchase";
import AllFoods from "../pages/AllFoods";

import SingleFood from "../pages/SingleFood";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import MyAdded from "../pages/MyAdded";
import MyPurchase from "../pages/MyPurchase";
import Gallery from "../pages/Gallery";
import SetMenu from "../pages/SetMenu";

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
        path: "/allfoods",
        element: <AllFoods />,
      },
      {
        path: "/fooddetails/:id",
        element: <SingleFood />,
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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/setmenu",
        element: <SetMenu />,
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/myadd",
        element: (
          <PrivateRoute>
            <MyAdded />
          </PrivateRoute>
        ),
      },
      {
        path: "/mypurchase",
        element: (
          <PrivateRoute>
            <MyPurchase />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
