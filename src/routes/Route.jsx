import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../components/Login";
import AllNote from "../components/AddNote";
import ViewAll from "../components/ViewAll";
import EditNote from "./../components/EditNote";
import PrivateRoute from "./PrivateRoute";

const Route = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add-node",
          element: (
            <PrivateRoute>
              <AllNote />
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/view-all",
          element: (
            <PrivateRoute>
              <ViewAll />
            </PrivateRoute>
          ),
          loader: () => fetch("http://localhost:4000/add-node"),
        },
        {
          path: "/view-all/edit/:id",
          element: <EditNote />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route}>
  </RouterProvider>;
};

export default Route;
