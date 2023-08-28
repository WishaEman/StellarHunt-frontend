import { createContext, useState, useEffect } from 'react';
import fetchTotalQuantityFromAPI from "./Services";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
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
    <AppContext.Provider value={{ totalQuantity,productQuantities, setProductQuantities, setTotalQuantity,
      updateTotalQuantity}}>
      {children}
    </AppContext.Provider>
  );
};
