import './Login.css'
import { useState, useEffect } from "react";
import handleLogin from "./Services";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate()
  const handleLoginClick = async (e) => {
    e.preventDefault();
    const success = await handleLogin(username, password);
    if (success) {
      setLoginSuccess(true);
      setLoginError(false);
    } else {
      setLoginSuccess(false);
      setLoginError(true);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/", { state: { loginSuccess: true } });
    }
  }, [loginSuccess, navigate]);

  return (
      <div>
        <Header />
        <br/><br/><br/> <h2 className="center-content"> Customer Login </h2><br/>
        {loginError && (
          <div className="form-group row">
            <div className="col-sm-3 col-form-label col-form-label-lg"></div>
            <div className="col-sm-6">
              <p className="text-danger">Invalid credentials. Please try again.</p>
            </div>
          </div>
        )}
        <form>
          <div className="form-group row">
            <div className="col-sm-3 col-form-label col-form-label-lg"></div>
            <div className="col-sm-6">
              <input type="text" className="form-control form-control-lg rounded-0" id="colFormLabelLg"
                     placeholder="Username" name="username" value={username}
                     onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <br/>
          <div className="form-group row">
            <div className="col-sm-3 col-form-label col-form-label-lg"></div>
            <div className="col-sm-6">
              <input type="password" className="form-control form-control-lg rounded-0" id="colFormLabelLg"
                     placeholder="Password" name="password" value={password}
                     onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <br/>
          <div className="form-group row">
              <div className="col-sm-3 col-form-label col-form-label-lg"></div>
              <div className="col-sm-6">
                <button type="submit" className="btn btn-dark btn-lg form-control form-control-lg  rounded-0"
                   onClick={(e) => handleLoginClick(e)}>
                  Log In
                </button>
              </div>
          </div>
          <br/>
          <div className="form-group row">
              <div className="col-sm-3 col-form-label col-form-label-lg"></div>
              <div className="col-sm-6">
                <Link to='/account/register'>
                <button type="button" className="btn btn-dark btn-lg form-control form-control-lg  rounded-0">
                  Create Account
                </button>
                </Link>
              </div>
          </div>
          <br/>
          <div className="form-group row">
              <div className="col-sm-3 col-form-label col-form-label-lg"></div>
              <div className="col-sm-6 text-center">
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">Reset Your Password</a>
                </p>
              </div>
          </div>

        </form>
        <Footer />
      </div>
  );
}
