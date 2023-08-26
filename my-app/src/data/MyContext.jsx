import { createContext, useState, useEffect } from 'react';
import fetchTotalQuantityFromAPI from "./Services";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [productQuantities, setProductQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateTotalQuantity = () => {
    const newTotalQuantity = Object.values(productQuantities).reduce((acc, quantity) => acc + quantity, 0);
    setTotalQuantity(newTotalQuantity);
  };

  useEffect(() => {
    updateTotalQuantity()
  }, [productQuantities]);

   useEffect(() => {
     fetchTotalQuantityFromAPI().then(totalQuantityFromAPI => {
       if(totalQuantityFromAPI > 0){
          setTotalQuantity(totalQuantityFromAPI);}
    });
  }, [])

  return (
    <MyContext.Provider value={{ totalQuantity,productQuantities, setProductQuantities, setTotalQuantity,
      updateTotalQuantity}}>
      {children}
    </MyContext.Provider>
  );
};
