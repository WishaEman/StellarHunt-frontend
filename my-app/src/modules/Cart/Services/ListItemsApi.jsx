import axios from "axios";
import {BASE_URL} from "../../../data/constant";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
const useAllCartItems = () => {
  const [cartItems, setCartItems] = useState([])
  const token = Cookies.get('token');
  const headers = {
    Authorization: `Token ${token}`
  };

  const removeCartItem = (productID) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.id !== productID)
    );
  };

  useEffect(() => {
    axios.get(`${BASE_URL}cart-handler/cart-items/`, { headers })
      .then(response => {
          setCartItems(response.data.results);
    })
        .catch(error => {
          console.error('Error fetching categories:', error);
    });

  }, [])

  console.log("Your Cart", cartItems);
   return { cartItems, removeCartItem };
}

export default useAllCartItems;