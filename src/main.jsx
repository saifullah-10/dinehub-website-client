import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import ContextProvide from "./context/ContextProvide.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvide>
      <RouterProvider router={router} />
    </ContextProvide>
  </React.StrictMode>
);
