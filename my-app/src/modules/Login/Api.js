import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/';

const handleLogin = (username, password) => {

    axios.post(`${BASE_URL}api/auth/login/`,{
      username: username,
      password: password,
    })
        .then(response => {
      console.log(response.data)
    })
        .catch(error => {
          console.log(error)
        })
};

export default handleLogin;