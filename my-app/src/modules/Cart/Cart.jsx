import {useState} from "react";
import Header from "../../Shared/Header/Header";
import ListCartProducts from "./ListCartProducts";
import Checkout from "./Checkout/Checkout";
import Category from "../../Shared/Category/Category";

export default function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);

  const updateTotalAmount = (newTotal) => {
    setTotalAmount(newTotal);
  };
  return(
      <>
        <Header />
        <Category />
        <div className="px-4 px-lg-0">
          <div className="container text-dark py-5 text-center">
            <h1 className="display-4">Your Shopping Cart</h1>
            <p className="lead mb-0">Blossom your experience with our exquisite flower selections. </p>
          </div>

          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                         <ListCartProducts updateTotalAmount={updateTotalAmount}/>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"><b>Instructions for
                    seller</b>
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">If you have some information for the seller you can leave them in
                      the box below</p>
                    <textarea name="" cols="30" rows="2" className="form-control"></textarea>
                  </div>
              </div>
              <br/>

              <Checkout totalAmount={totalAmount}/>
            </div>

          </div>
        </div>
      </>
  );
}