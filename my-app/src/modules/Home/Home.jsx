import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../Shared/Header/Header";
import Category from '../../Shared/Category/Category'
import Product from "../../Shared/Product/Product";
import useProducts from "./Services";
import CarouselComponent from "./Carousel";
import Footer from  '../../Shared/Footer/Footer'

export default function Home() {
     const location = useLocation();
     const navigate = useNavigate();
     const alertShownRef = useRef(false);
     const subcategoryId = location.pathname.split("/")[3];
     let { products , pagination,  fetchProducts } = useProducts(subcategoryId)

     useEffect(() => {
      if (location.state?.loginSuccess && !alertShownRef.current) {
        alertShownRef.current = true;
        toast.success("Successfully Login!");
      }
    }, [location.state?.loginSuccess]);

    const handleShopNowClick = (subcategoryId) => {
      navigate(`/category/subcategory/${subcategoryId}`);
    };
    const handlePaginationClick = (url) => {
       fetchProducts(url);
    };

    return (
      <div>
          <Header />
          <Category />
          <ToastContainer position="top-right" autoClose={2000} />
         {!subcategoryId && (
            <CarouselComponent  onShopNowClick={handleShopNowClick}/>
         )}
          {!subcategoryId && <div className="text-center">
                <h6>Your Favourite</h6>
                <h2>Flower Shop</h2>
            </div>
          }
          <div className="product-grid">
            {products.length > 0 && subcategoryId && (
              <div className="center-content">
                <br/>
                <br/>
                <h2>{products[0].subcategory.title}</h2>
                <br/>
              </div>
            )}
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
            <br />
            <div className="pagination">
              {pagination?.previous && (
                <button className="btn btn-secondary" onClick={() => handlePaginationClick(pagination.previous)}>
                  Previous
                </button>
              )}
              <br />
              {pagination?.next && (
                <button className="btn btn-success" onClick={() => handlePaginationClick(pagination.next)}>
                  Next
                </button>
              )}
            </div>
            <br />
          </div>
          <Footer />
      </div>
    );
}
