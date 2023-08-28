import axios from "axios";
import {BASE_URL} from "../../data/constant";
import {useEffect, useState} from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([])

   useEffect(() => {
     axios.get(`${BASE_URL}inventory-management/categories/`)
    .then(response => {
      setCategories(response.data.results);
    })
    .catch(error => {
          console.error('Error fetching categories:', error);
    });
   }, [])


  console.log("response ",categories)
  return categories;
}

 export default useCategories;
