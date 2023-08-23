import axios from "axios";
import {BASE_URL} from "../../data/constant";
import {useEffect, useState} from "react";

const useProducts = (selectedSubcategory) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = selectedSubcategory
      ? `${BASE_URL}inventory-management/categories/${selectedSubcategory}/products/`
      : `${BASE_URL}inventory-management/latest-products/`;

    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching Products:', error);
      });
  }, [selectedSubcategory]);

  return products;
};


export default useProducts;
