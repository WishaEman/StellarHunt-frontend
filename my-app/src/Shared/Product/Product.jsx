import "../Header/Header.css"
import {Link} from "react-router-dom";
import MyRatingComponent from "../../modules/About/Ratings";

export default function Product({product}){
  const formattedPrice = product.price.toLocaleString();

  return (
      <div className="flower-item">
          <Link to={`/collections/products/${product.id}`} state={{ product }} className="text-decoration-none" >
            <img src={product.image} alt={product.title} className="flower-image" />
            <p className="text-dark">{product.title}</p>
          </Link>
          <MyRatingComponent />
          <p>Rs. {formattedPrice}</p>
      </div>
  );
}
