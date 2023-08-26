import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import handleLogout from "../Services/LogoutApi";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh',
});

const LogoutLink = styled('p')({
  color: 'black',
  textDecoration: 'underline',
  cursor: 'pointer',
});

const ButtonWrapper = styled(Button)({
  marginTop: (theme) => theme.spacing(2),
});

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
      <Container>
        <Typography variant="h4" gutterBottom>
          Order Placed Successfully
        </Typography>
        <Typography variant="subtitle1">
          Thank you for your order! Your order has been placed successfully.
        </Typography>
        <br />
        <Link to='/'>
          <ButtonWrapper variant="contained" color="primary">
            Continue Shopping
          </ButtonWrapper>
        </Link>
        <br />
        <LogoutLink onClick={handleLogoutSuccess}>
          Logout
        </LogoutLink>
      </Container>
      <br /><br/>
      <Footer />
    </>

  );
}

export default CheckoutSuccess;
