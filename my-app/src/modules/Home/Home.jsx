import Header from "../../Shared/Header/Header";
import {useState, useEffect} from "react";
import Category from '../../Shared/Category/Category'
import Product from "../../Shared/Product/Product";
import useProducts from "./Services";
import CarouselComponent from "./Carousel";
import Footer from  '../../Shared/Footer/Footer'
import { useLocation } from 'react-router-dom';

export default function Home() {
     const [selectedSubcategory, setSelectedSubcategory] = useState('');
     const products = useProducts(selectedSubcategory);
     const location = useLocation();
     const loginSuccess = location.state?.loginSuccess || false;
     const [showAlert, setShowAlert] = useState(loginSuccess);

      useEffect(() => {
        if (loginSuccess) {
          setShowAlert(true);

          const timeout = setTimeout(() => {
            setShowAlert(false);
          }, 2000);

          return () => clearTimeout(timeout);
        }
      }, [loginSuccess]);

       useEffect(() => {
          const subcategoryId = location.pathname.split("/")[3];
          setSelectedSubcategory(subcategoryId);
       }, [location.pathname]);

      return (
        <div>
            <Header />
            <Category />
            {showAlert && (
            <h5 className="alert alert-success" role="alert">
              Successful login alert!
            </h5>
            )}
           {selectedSubcategory ? null : (
              <CarouselComponent setSelectedSubcategory={setSelectedSubcategory} />
           )}
            {!selectedSubcategory && <div className="text-center">
                  <h6>Your Favourite</h6>
                  <h2>Flower Shop</h2>
              </div>
            }
            <div className="product-grid">
            <div className="center-content">
            <br/>
            <br/>
            {selectedSubcategory && (
               <h2> {selectedSubcategory} </h2>
            )}
            </div>
            {
              products.map((product) => (
                  <Product product={product}/>
            ))}
            </div>
          <Footer />
        </div>
      );
}
