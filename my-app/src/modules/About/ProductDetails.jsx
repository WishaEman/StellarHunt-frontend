import {useLocation} from 'react-router-dom';
import {useState} from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import handleAddToCart from "./Services";
import Category from "../../Shared/Category/Category";

export default function ProductDetails() {
  const location = useLocation();
  const { product} = location.state;
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = product.price.toLocaleString();


  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

   const handleCartClick = async () => {
    try {
      const cartItemResponse = await handleAddToCart(product, quantity);
      console.log("In product details", cartItemResponse)
    } catch (error) {
      console.error('Error handling cart click:', error);
    }
  };

  return(
  <div>
      <Header />
      <Category />
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
              <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-md-6 pt-5" >
              <h2>{product.title}</h2><br/>
              <p>{product.description}</p><br />
              <p>Rs. {formattedPrice}.00</p><br/>
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
