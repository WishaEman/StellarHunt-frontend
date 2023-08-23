import "../Header/Header.css"
import {Link} from "react-router-dom";

export default function Product({product}){
  const formattedPrice = product.price.toLocaleString();

  return (
      <div className="flower-item">
          <Link to={`/collections/products/${product.id}`} state={{ product }}>
            <img src={product.image} alt={product.title} className="flower-image" />
          </Link>
          <p>{product.title}</p>
          <p>Rs. {formattedPrice}</p>
      </div>
  );
}
