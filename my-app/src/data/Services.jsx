import axios from 'axios';
import {BASE_URL} from "./constant";
import Cookies from "js-cookie";

const fetchTotalQuantityFromAPI = async () => {
  const token = Cookies.get('token');
  const headers = {
      Authorization: `Token ${token}`
  };
  try {
    const response = await axios.get(`${BASE_URL}cart-handler/total-quantity/`, { headers });
    return response.data.totalQuantity;
  } catch (error) {
    console.error('Error fetching total quantity:', error);
    return 0;
  }
};

export default fetchTotalQuantityFromAPI;