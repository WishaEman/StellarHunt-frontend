import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './modules/Login/Login';
import Signup from './modules/SignUp/Signup';
import Home from './modules/Home/Home';
import ProductDetails from './modules/About/ProductDetails';
import Cart from './modules/Cart/Cart';
import CheckoutSuccess from './modules/Cart/Checkout/CheckoutSuccess';
import {AppContextProvider} from './data/AppContext';
import MainLayout from "./Shared/Layout/MainLayout";

const App = () => {

  const router = createBrowserRouter([
    {
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/account/login",
          element: <Login/>,
        },
        {
          path: "/account/register",
          element: <Signup/>,
        },
        {
          path: "/collections/products/:productId",
          element: <ProductDetails/>,
        },
        {
          path: "/order/checkout",
          element: <Cart/>,
        },
        {
          path: "/successfull/order",
          element: <CheckoutSuccess/>
        },
        {
          path: "/category/subcategory/:subcategoryId",
          element: <Home/>,
        },
      ],
    },
  ]);

  return (
      <AppContextProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AppContextProvider>
  );
};

export default App;
