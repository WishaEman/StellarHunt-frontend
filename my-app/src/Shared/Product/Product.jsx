import "../Header/Header.css"

export default function Product({product}){
  const formattedPrice = product.price.toLocaleString();

  return (
      <div className="flower-item">
          <img src={product.image} alt={product.title} className="flower-image" />
          <p>{product.title}</p>
          <p>Rs. {formattedPrice}</p>
      </div>
  );
}
