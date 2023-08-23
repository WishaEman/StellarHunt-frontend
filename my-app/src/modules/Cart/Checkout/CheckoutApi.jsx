import axios from "axios";
import { BASE_URL } from "../../../data/constant";
import Cookies from 'js-cookie';

const handleCheckout = async () => {
  const token = Cookies.get('token');
  const headers = {
    Authorization: `Token ${token}`
  };
  try {
    const response = axios.get(`${BASE_URL}cart-handler/checkout/`,
        { headers })
    if(response){
       console.log("Successfully Checked Out")
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleCheckout;
