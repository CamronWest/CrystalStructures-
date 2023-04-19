import React, { useState, useEffect } from 'react';
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import '../styles/signup.css';
import axios from 'axios';
import HTTPClient from '../../HTTPClient';

 
function LoginSignUp() {
  const [refreshPage, setRefreshPage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


const logInUser = async() =>{
  console.log(email,password);

  try{
    const resp = await axios.post("http://127.0.0.1:5555/login", {
      email: email,
      password: password,
  });
  window.location.href = "/home";
  } catch (error) {
    if(error.response.status === 401){
      alert("Invalid Credentials");
    }
  }
}

const registerUser = async() =>{
  try{
    const resp = await axios.post("http://127.0.0.1:5555/signup", {
      username: name,
      email: email,
      password: password,
    });
    window.location.href = "/home";
  } catch (error) {
    if(error.response.status === 401){
      alert("Invalid Credentials");
    }
  }
}

  const handleCheckboxChange = () => {
    setIsLogin(!isLogin);
  };


      return (
      <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                checked={!isLogin}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className={`card-3d-wrapper ${isLogin ? "" : "flip"}`}>
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <form>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              autoComplete="off"
                            />
                            
              
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              autoComplete="off"
                            />
                            
                          </div>
                          <button type="button" onClick={() => logInUser} className="btn mt-4">
                            Log In
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <form>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              value={name}
                              onChange={(e) => setName(e.target.value)}                              
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                            
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              autoComplete="off"
                            />
                        
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              autoComplete="off"
                            />
                            <button onClick={() => registerUser()} type="button" className="btn mt-4">
                            Submit
                          </button>
                            </div>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

    
export default LoginSignUp;


