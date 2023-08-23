import axios from "axios";
import { BASE_URL } from "../../data/constant";
import Cookies from 'js-cookie';

const handleAddToCart = (product, quantity) => {

  return new Promise((resolve, reject) => {

    const token = Cookies.get('token');
    console.log(token)
    const headers = {
      Authorization: `Token ${token}`
    };
    const data = {
      product: product.id,
      quantity: quantity
    };
    console.log("Product", data.product)
    console.log(data.quantity)
    axios.post(`${BASE_URL}cart-handler/add-to-cart/`, data, { headers })
      .then(response => {
        console.log('Product added to cart successfully');
        resolve(response.data);
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
        reject(error);
      });
  });
};

export default handleAddToCart;
