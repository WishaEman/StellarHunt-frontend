import {useLocation} from 'react-router-dom';
import {useState, useContext} from "react";
import  ReactImageMagnify from "react-image-magnify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../data/AppContext';
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import addToCart from "./Services";
import Category from "../../Shared/Category/Category";

export default function ProductDetails() {
  const location = useLocation();
  const { product} = location.state;
  const [quantity, setQuantity] = useState(1);
  const { productQuantities, setProductQuantities } = useContext(AppContext);
  const formattedPrice = product.price.toLocaleString();


  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

 const handleCartClick = () => {
  addToCart(product, quantity)
    .then(() => {
      setProductQuantities({...productQuantities, [product.id]: quantity });
    })
    .catch(error => {
      console.error('Error handling cart click:', error);
      toast.error("You need to be logged in to add items to the cart.");
    });
  };


  return(
  <div>
      <Header />
      <Category />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.title,
                  isFluidWidth: true,
                  src: product.image,
                },
                largeImage: {
                  src: product.image,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </div>
          <div className="col-md-6 pt-5" >
              <br /><br/>
              <h2>{product.title}</h2><br/>
              <p>{product.description}</p><br />
              <p>Rs. {formattedPrice}</p><br/>
              <p><b>Quantity</b></p>
              <button className="btn btn-outline-dark" onClick={decreaseQuantity}>-</button>
              <span className="m-2">{quantity}</span>
              <button className="btn btn-outline-success" onClick={increaseQuantity}>+</button>
              <br/><br/>
              <p>Add Your Comment</p>
              <textarea className="form-control rounded-0" style={{height: '100px', width:'85%'}}></textarea>
              <br/>
              <div className="d-grid m-3 col-8">
                  <button className="btn btn-dark rounded-0" type="button"
                          onClick={handleCartClick}>Add to Cart</button>
              </div>
          </div>
        </div>
      </div>
      <br/>
      <Footer />
  </div>
  );
}
