import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import '../styles/signup.css';
 
function LoginSignUp() {
  const [users, setUser] = useState([{}]);
  const [refreshPage, setRefreshPage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleCheckboxChange = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
  };

  useEffect(() => {
    console.log("FETCH! ");
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, [refreshPage]);

  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Must enter email"),
    name: yup.string().required("Must enter a name").max(15),
    password: yup
      .string()
      .required("Must enter valid password")
      .typeError("Please enter an password containing special characters")
      .max(25),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pasword: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status == 200) {
          setRefreshPage(!refreshPage);
        }
      });
    },
  });

  
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
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              onChange={formik.handleChange}
                              
                              autoComplete="off"
                            />
                            <p style={{ color: "red" }}> {formik.errors.email}</p>
              
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              onchange={formik.handleChange}
                              value={formik.values.pasword}
                              autoComplete="off"
                            />
                            <p style={{ color: "red" }}> {formik.errors.pasword}</p>
                          </div>
                          <button type="submit" className="btn mt-4">
                            Submit
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
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              onchange={formik.handleChange}
                              value={formik.values.name}
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                            <p style={{ color: "red" }}> {formik.errors.name}</p>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              onchange={formik.handleChange}
                              value={formik.values.email}
                              autoComplete="off"
                            />
                            <p style={{ color: "red" }}> {formik.errors.email}</p>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              onchange={formik.handleChange}
                              value={formik.values.pasword}
                              autoComplete="off"
                            />
                            
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


