import { useNavigate } from 'react-router-dom';
import handleCheckout from "./CheckoutApi";

export default function Checkout ({totalAmount}){
  const formattedTotalAmount = totalAmount.toString().replace(/^0+/, '');
  const trimmedTotalAmount = formattedTotalAmount.replace(/^0+/, '');
  const totalWithShipping = parseFloat(trimmedTotalAmount) + parseFloat(10);
  const finalTotal = totalWithShipping.toString().replace(/^0+/, '').
   replace(/\.\d+$/, '');

  const navigate = useNavigate()
  const onCheckout = async () => {
    try {
      await handleCheckout();
      navigate('/successfull/order');
    } catch (error) {
      console.error("Error Checking Out:", error);
    }
  };

  return (
      <div className="row py-5 p-4 bg-white rounded shadow-sm">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"><b>Order summary</b>
          </div>
          <div className="p-4">
            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you
              have entered.</p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">
                Order Subtotal </strong><strong>${formattedTotalAmount}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">
                Shipping and handling</strong><strong>$10.00</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong
                  className="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong
                  className="text-muted">Total</strong>
                <h5 className="font-weight-bold">${finalTotal}</h5>
              </li>
            </ul>
            <div className="row">
            <button className="col-lg-4 btn btn-dark rounded-pill" onClick={onCheckout}>Proceed to checkout</button>
            </div>
          </div>
      </div>
  );
}