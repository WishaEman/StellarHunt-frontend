import axios from "axios";
import { BASE_URL } from "../../../data/constant";
import Cookies from 'js-cookie';

const handleCheckout = async () => {
  const token = Cookies.get('token');
  const headers = {
    Authorization: `Token ${token}`
  };
  try {
    const response = await axios.get(`${BASE_URL}cart-handler/checkout/`,
        { headers })
     if (response.data.status === 400) {
    console.log("Checkout failed");
    return false;
  } else {
    console.log("Checkout successful");
    return true;
  }
} catch (error) {
  console.log(error);
  return false;
  }
};

export default handleCheckout;
