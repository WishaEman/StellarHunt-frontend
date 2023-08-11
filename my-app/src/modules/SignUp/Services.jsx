import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/';

const signupApi = (formData) => {
  return axios.post(`${BASE_URL}api/auth/signup/`, formData);
};

export default signupApi;