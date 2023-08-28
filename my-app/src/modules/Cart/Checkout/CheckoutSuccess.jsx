import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Typography, Button } from '@mui/material';
import handleLogout from "../Services/LogoutApi";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import "./Style.css"

function CheckoutSuccess() {
  const navigate = useNavigate();

  const handleLogoutSuccess = () => {
    handleLogout()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <>
      <Header />
      <div className="checkout-success-container">
        <Typography variant="h4" gutterBottom>
          Order Placed Successfully
        </Typography>
        <Typography variant="subtitle1">
          Thank you for your order! Your order has been placed successfully.
        </Typography>
        <br />
        <Link to='/'>
          <Button variant="contained" color="primary">
            Continue Shopping
          </Button>
        </Link>
        <br />
        <p className="checkout-success-link" onClick={handleLogoutSuccess}>
          Logout
        </p>
      </div>
      <br /><br/>
      <Footer />
    </>
  );
}

export default CheckoutSuccess;
