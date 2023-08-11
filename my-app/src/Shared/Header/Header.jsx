import './Header.css'
import {Link} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

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
                      {/*<FontAwesomeIcon icon={faUser} style={{ fontSize: '24px', color: 'black' }} />*/}
                      <i className="fa fa-user" style={{ fontSize: '24px', color: 'black' }}></i>
                    </Link>
                    <button type="button" id="cartButton" className="cart-btn">
                      🛒
                    </button>
              </div>
            </div>
        </nav>
        </>
        );
}
