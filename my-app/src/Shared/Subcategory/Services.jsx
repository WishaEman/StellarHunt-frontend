import axios from "axios";
import {BASE_URL} from "../../data/constant";
import {useEffect, useState} from "react";

const useSubcategories = (id) => {
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}inventory-management/subcategories/${id}/`)
        .then(response => {
          setSubcategories(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching subcategories:', error);
        });
  },[])
      return subcategories;
}

export default useSubcategories;
