import './Login.css'
import { useState } from "react";
import handleLogin from "./Api";

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { backgroundColor } = props
  const color = backgroundColor === 'white' ? 'light-mode' : 'dark-mode';

  return (
      <form>
        <section className={`vh-100 ${color}`}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <div className="form-outline form-white mb-4">
                        <input
                            type="text"
                            id="typeEmailX"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                            type="password"
                            id="typePasswordXz"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                      <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={(e) => { e.preventDefault(); handleLogin(username, password); }}>Login</button>

                    </div>

                    <div>
                      <p className="mb-0">Don't have an account? <a href={`/Signup`} className="text-white-50 fw-bold">Sign
                        Up</a>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
  );
}

Login.defaultProps = {
  backgroundColor: 'lightblue', // Default value if the prop is not provided
};