import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../../data/AppContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleCheckout from "./CheckoutApi";
import {useContext} from "react";

export default function Checkout ({totalAmount}){
  const { setTotalQuantity } = useContext(AppContext);

  const navigate = useNavigate()
  const onCheckout = async () => {
    try {
      const flag = await handleCheckout();
      setTotalQuantity(0);
      if (flag){
         navigate('/successfull/order');
      }
      else{
        toast.error('Your cart is empty');
      }
    } catch (error) {
      console.error("Error Checking Out:", error);
      toast.error('Error while checking out');
    }
  };

  return (
      <div className="row py-5 p-4 bg-white rounded shadow-sm">
        <ToastContainer position='bottom-right' />
        <div className="col-12">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"><b>Order summary</b></div>
          <div className="p-4">
            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Order Subtotal</strong>
                <strong>${totalAmount}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Shipping and handling</strong>
                <strong>$10.00</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Tax</strong>
                <strong>$0.00</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">${totalAmount + parseFloat(10)}</h5>
              </li>
            </ul>
            <div className="row">
              <div className="col-lg-4">
                <button className="btn btn-dark rounded-pill" onClick={onCheckout}>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}