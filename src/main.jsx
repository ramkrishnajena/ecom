import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Categories from "./pages/Categories.jsx";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "products/categories/:id",
        element: <Categories />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={MainRoute} />
);
