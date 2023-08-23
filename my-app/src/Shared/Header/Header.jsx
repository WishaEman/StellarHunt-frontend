import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {
       return (
        <>
        <nav className="navbar navbar-dark bg-black text-white d-flex justify-content-center align-items-center">
            <span className="navbar-brand mb-0 mt-0 h1">Delivering Only In Lahore!</span>
        </nav>

        <nav className="navbar navbar-light bg-light">
            <div className="container">
              <div className="navbar-brand col-2 d-flex justify-content-center">
                <Link to='/'>
                <img
                      src={process.env.PUBLIC_URL + "/media/StellarHunt.png"}
                      alt="Website Logo"
                      className="logo"
                />
                </Link>
              </div>

              <div className="d-flex col-0.5 align-items-center justify-content-between">
                    <Link to="/account/login">
                      <i className="fa fa-user" style={{ fontSize: '24px', color: 'black' }}></i>
                    </Link>
                    <Link to="/checkout">
                    <button type="button" id="cartButton" className="cart-btn">
                      🛒
                    </button>
                    </Link>
              </div>
            </div>
        </nav>
        </>
        );
}
