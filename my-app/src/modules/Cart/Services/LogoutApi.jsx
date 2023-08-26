import axios from "axios";
import { BASE_URL } from "../../../data/constant";
import Cookies from 'js-cookie';
const handleLogout = async () => {
  const token = Cookies.get('token');
  const headers = {
    Authorization: `Token ${token}`
  };
  try {
    const response = axios.get(`${BASE_URL}api/auth/logout/`,
        { headers })
    if(response){
       console.log("Successfully Logged Out")
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleLogout;
