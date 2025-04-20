import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmiCalculator from "./pages/emiCalulator/emiCalculator";
import ErrorPage from "./pages/errorPage";
import Layout from "./pages/layout";
import Users from "./pages/users/users";
import ToDoList from "./pages/toDoList/toDoList";
import Counter from "./pages/counter/counter";
import UserData from "./pages/userData/userData"

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
        path: "todoList",
        element: <ToDoList />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "userData",
        element: <UserData />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
