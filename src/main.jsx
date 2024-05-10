import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import ContextProvide from "./context/ContextProvide.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvide>
        <RouterProvider router={router} />
      </ContextProvide>
    </QueryClientProvider>
  </React.StrictMode>
);
