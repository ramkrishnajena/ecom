import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Checkout from "./pages/auth/Checkout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Categories from "./pages/Categories.jsx";
import { Provider } from "react-redux";
import Cart from "./pages/auth/Cart.jsx";
import store from "./utils/store/store.js";
import Orders from "./pages/auth/Orders.jsx";
import Profile from "./pages/auth/Profile.jsx";
import Auth from "./pages/auth/Auth.jsx";

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
        path: "in",
        element: <Auth />,
        children: [
          {
            path: "my-profile",
            element: <Profile />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },

      {
        path: "signup",
        element: <Signup />,
      },

      {
        path: "products/categories/:id",
        element: <Categories />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={MainRoute} />
  </Provider>
);
