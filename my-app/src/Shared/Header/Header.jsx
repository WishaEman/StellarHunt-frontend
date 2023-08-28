import './Header.css'
import { useContext } from 'react';
import {AppContext} from "../../data/AppContext";
import {Link} from "react-router-dom";
import { Badge } from 'react-bootstrap';

export default function Header() {
       const { totalQuantity } = useContext(AppContext);
       return (
        <>
        <nav className="navbar navbar-dark bg-black text-white d-flex justify-content-center align-items-center">
            <span className="navbar-brand mb-0 mt-0 h1">Delivering Only In Lahore!</span>
        </nav>

        <nav className="navbar bg-light">

          <div className="container justify-content-center">
              <div className="navbar-brand mr-auto">
                <Link to='/'>
                <img
                      src={process.env.PUBLIC_URL + "/media/StellarHunt.png"}
                      alt="Website Logo"
                      className="logo"
                />
                </Link>
              </div>

          </div>
          <div className="d-flex col-0.5 align-items-center checkout-link">
              <Link to="/account/login">
                <i className="fa fa-user Icon"></i>
              </Link>
              <Link to="/order/checkout">
                 <button className="btn btn-link position-relative">
                    <i className="fa fa-shopping-cart Icon"></i>
                    {totalQuantity > 0 && (
                      <Badge pill bg="danger" className="cart-badge position-absolute top-0 start-70
                          translate-middle">
                          {totalQuantity}
                      </Badge>
                    )}
                 </button>
              </Link>
          </div>
        </nav>
        </>
        );
}
