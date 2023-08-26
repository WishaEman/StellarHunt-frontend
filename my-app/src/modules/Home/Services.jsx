import axios from "axios";
import {BASE_URL} from "../../data/constant";
import {useEffect, useState} from "react";

const useProducts = (selectedSubcategory, url) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);

  const fetchProducts = (url) => {
      axios.get(url)
        .then((response) => {
          setProducts(response.data.results);
          setPagination(response.data);
        })
        .catch((error) => {
          console.error("Error fetching Products:", error);
      });
  };

  useEffect(() => {
    const apiUrl = selectedSubcategory
      ? `${BASE_URL}inventory-management/categories/${selectedSubcategory}/products/`
      : `${BASE_URL}inventory-management/latest-products/`;

     fetchProducts(apiUrl);
  }, [selectedSubcategory]);

  return { products, pagination , fetchProducts}
};


export default useProducts;
