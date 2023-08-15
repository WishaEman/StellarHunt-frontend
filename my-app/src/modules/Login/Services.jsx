import axios from "axios";
import { BASE_URL } from "../../data/constant";
import Cookies from 'js-cookie';

const handleLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}api/auth/login/`, {
      username: username,
      password: password,
    })
    if(response.data.token){
        const token = response.data.token;
        Cookies.set('token', token, { expires: 1 });
        return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default handleLogin;
