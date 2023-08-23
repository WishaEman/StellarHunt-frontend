import axios from "axios";
import { BASE_URL } from "../../../data/constant";
import Cookies from 'js-cookie';

const handleDelete = async (productId) => {
  const token = Cookies.get('token');
  const headers = {
    Authorization: `Token ${token}`
  };
  try {
    const response = axios.delete(`${BASE_URL}cart-handler/cart-items/${productId}/`,
        { headers })
    if(response){
       console.log("Successfully Deleted")
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleDelete;
