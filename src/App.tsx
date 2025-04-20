import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmiCalculator from "./pages/emiCalulator/emiCalculator";
import ErrorPage from "./pages/errorPage";
import Layout from "./pages/layout";
import Users from "./pages/users/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "emiCalculator",
        element: <EmiCalculator />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
