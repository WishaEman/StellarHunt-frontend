import React, {useContext} from "react";
import { Link } from "react-router-dom";
import useAllCartItems from "./Services/ListItemsApi";
import handleDelete from "./Services/DeleteApi";
import { MyContext } from '../../data/MyContext';

export default function ListCartProducts ({ updateTotalAmount }) {
  const { cartItems, removeCartItem } = useAllCartItems();
  const { productQuantities, setProductQuantities } = useContext(MyContext);

  if(cartItems.length > 0)
  {
     const calculateTotal = () => {
      return cartItems.reduce((acc, cartItem) => acc + cartItem.subtotal, 0);
    };

    const newTotal = calculateTotal();
    updateTotalAmount(newTotal);
  }

  const onDeleteClick = async (cartItem) => {
    try {
      await handleDelete(cartItem.product.id);
      removeCartItem(cartItem.product.id);
      const updatedProductQuantities = { ...productQuantities };
      delete updatedProductQuantities[cartItem.product.id];
      setProductQuantities(updatedProductQuantities);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  return (
      <>
        {cartItems && Array.isArray(cartItems) && cartItems.map(cartItem => (
                <tr key={cartItem.id}>
                  <th scope="row" className="border-0">
                    <div className="p-2">
                      <img
                        src={cartItem.product.image}
                        alt=""
                        width="70"
                        className="img-fluid rounded shadow-sm"/>
                      <div
                        className="ml-5 d-inline-block align-middle"
                        style={{ marginLeft: '15px' }}
                      >
                        <Link to={`/collections/products/${cartItem.product.id}`} state={{ product: cartItem.product }}>
                        <h5 className="mb-0 text-dark d-inline-block align-middle text-decoration-underline">
                          {cartItem.product.title}
                        </h5>
                        </Link>
                        <span
                          className="text-muted font-weight-normal d-block"
                          style={{ marginLeft: '15px' }}
                        >
                          <i>Category: {cartItem.product.subcategory.title.charAt(0).toUpperCase() +
                                cartItem.product.subcategory.title.slice(1).toLowerCase()}</i>
                        </span>
                      </div>
                    </div>
                  </th>
                  <td className="border-0 align-middle">
                    <strong>${cartItem.subtotal}</strong>
                  </td>
                  <td className="border-0 align-middle">
                    <strong>{cartItem.quantity}</strong>
                  </td>
                  <td className="border-0 align-middle text-dark">
                    <i className="fa fa-trash"
                        onClick={() => onDeleteClick(cartItem)}
                    ></i>
                  </td>
                </tr>
            ))}
      </>
  );
}