import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./modules/Login/Login";
import Signup from "./modules/SignUp/Signup";
import Home from "./modules/Home/Home";
import ProductDetails from "./modules/About/ProductDetails";
import Cart from "./modules/Cart/Cart";
import Success from "./modules/Cart/Checkout/Success";

const router = createBrowserRouter([
  {
    path: "/account/login",
    element: <Login />,
  },
  {
    path: "/account/register",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collections/products/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/checkout",
    element: <Cart />,
  },
  {
    path: "/successfull/order",
    element: <Success />
  },
  {
    path: "/category/subcategory/:subcategoryId",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
