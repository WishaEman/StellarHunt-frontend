import './Signup.css'
import Header from "../../Shared/Header/Header";
import  { useState } from 'react';
import signupApi from './Services'
import Footer from "../../Shared/Footer/Footer";
import {Link} from "react-router-dom";

export default function Signup() {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [isSignupNotSuccessful, setIsSignupNotSuccessful] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    password: '',
    email: '',
    address: '',
    phone_number: '',
    gender: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    signupApi(formData)
      .then((response) => {
        console.log('Signup successful!', response);
        setIsSignupSuccessful(true);
        setTimeout(() => {
          setIsSignupSuccessful(false);
          window.location.href = `/account/login`;
        }, 4000);
      })
      .catch((error) => {
        setIsSignupNotSuccessful(true);
        setTimeout(() => {
          setIsSignupNotSuccessful(false);
        }, 2000);
        console.error('Signup failed:', error);
      });
  };


  return (
      <>
      <Header />
        {/* Conditional rendering of the success alert */}
      {isSignupSuccessful && (
        <div className="alert alert-success" role="alert">
           SuccessFull SignUp!
        </div>
      )}

      {/* Conditional rendering of the error alert */}
      {isSignupNotSuccessful && (
        <div className="alert alert-danger" role="alert">
           Error! Try Again...
        </div>
      )}

          <div className="container py-3 h-40">
              <div className="row justify-content-center align-items-center h-40">
                  <div className="col-12 col-lg-9 col-xl-7">
                      <div className="card shadow-2-strong card-registration">
                          <div className="card-body p-3 p-md-5">
                              <h3 className="mb-1 pb-2 pb-md-0 mb-md-5" style={{ fontFamily: 'serif' }}>Create Account</h3>
                              <form>

                                  <div className="row">
                                      <div className="col-md-6 mb-2">

                                          <div className="form-outline">
                                              <input type="text" id="firstName" className="form-control form-control-lg"
                                                      onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                full_name: e.target.value
                                                          });
                                                      }}
                                                      required
                                              />
                                              <label className="form-label" htmlFor="firstName">Full Name</label>
                                          </div>

                                      </div>
                                      <div className="col-md-6 mb-2">

                                          <div className="form-outline">
                                              <input type="text" id="username"
                                                     className="form-control form-control-lg"
                                                     onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                username: e.target.value
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-label" htmlFor="lastName">Username</label>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="row">
                                      <div className="col-md-6 mb-2 d-flex align-items-center">

                                          <div className="form-outline datepicker w-100">
                                              <input type="text" className="form-control form-control-lg"
                                                     id="Address"
                                                     onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                address: e.target.value
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label htmlFor="Address" className="form-label">Address</label>
                                          </div>

                                      </div>
                                      <div className="col-md-6 mb-2">

                                          <h6 className="mb-2 pb-1">Gender: </h6>

                                          <div className="form-check form-check-inline">
                                              <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                     id="femaleGender"
                                                     value="female"
                                                     onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                gender: "female"
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                          </div>

                                          <div className="form-check form-check-inline">
                                              <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                     id="maleGender"
                                                     value="male"
                                                      onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                gender: "male"
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-check-label" htmlFor="maleGender">Male</label>
                                          </div>

                                          <div className="form-check form-check-inline">
                                              <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                     id="otherGender"
                                                     value="other"
                                                      onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                gender: "other"
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-check-label" htmlFor="otherGender">Other</label>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="row">
                                      <div className="col-md-6 mb-2 pb-2">

                                          <div className="form-outline">
                                              <input type="email" id="emailAddress"
                                                     className="form-control form-control-lg"
                                                      onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                email: e.target.value
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-label" htmlFor="emailAddress">Email</label>
                                          </div>

                                      </div>
                                      <div className="col-md-6 mb-0 pb-2">

                                          <div className="form-outline">
                                              <input type="tel" id="phoneNumber"
                                                     className="form-control form-control-lg"
                                                      onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                phone_number: e.target.value
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="col-md-6 mb-0">

                                          <div className="form-outline">
                                              <input type="password" id="password"
                                                     className="form-control form-control-lg"
                                                      onChange={e => {
                                                          setFormData({
                                                                ...formData,
                                                                password: e.target.value
                                                          });
                                                     }}
                                                     required
                                              />
                                              <label className="form-label" >Password</label>
                                          </div>
                                  </div>

                                  <div className="mt-4">
                                      <input className="btn btn-dark btn-lg" type="submit" onClick={handleSubmit} value="Create"/>
                                  </div>
                                  <p className="text-center text-muted mb-1">Have already an account?
                                  <Link to='/account/login'>
                                    <b><u className="text-black">Login here</u></b>
                                  </Link>
                                  </p>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        <Footer />
      </>
  );
}
