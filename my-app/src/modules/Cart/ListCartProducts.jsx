import React from "react";
import useAllCartItems from "./Services/ListItemsApi";
import handleDelete from "./Services/DeleteApi";

export default function ListCartProducts ({ updateTotalAmount }) {
  const { cartItems, removeCartItem } = useAllCartItems();

  if(cartItems)
  {
     const calculateTotal = () => {
      return cartItems.reduce((acc, cartItem) => acc + cartItem.subtotal, 0);
    };

    const newTotal = calculateTotal();
    updateTotalAmount(newTotal);
  }

  const onDeleteClick = async (productID) => {
    try {
      await handleDelete(productID);
      removeCartItem(productID);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  return (
      cartItems.map(cartItem => (
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
                        <h5 className="mb-0 text-dark d-inline-block align-middle">
                          {cartItem.product.title}
                        </h5>
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
                        onClick={() => onDeleteClick(cartItem.product.id)}
                    ></i>
                  </td>
                </tr>
            ))
  );
}