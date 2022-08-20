import React from "react";
import { Link } from "react-router-dom";

// css
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <div className=" midBox col-md-9 my-5  shadow-lg  overflow-hidden">
        <div className="row">
          <div className="col-sm-7 d-flex align-items-center justify-content-center text-center">
            <div className="pt-5">
              <h4 className="mb-4 mt-5">Sign in to your account</h4>

              <div className="mb-3 mt-3">
                <input
                  type="email"
                  className="form-control rounded-pill mt-3"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-pill"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                />
              </div>

              <Link
                to="/Dashboard"
                type="submit"
                className="btn bg-primary text-white py-2  shadow rounded-pill "
              >
                Log in
              </Link>
              <hr className="col-12 border-0" />
              
              <hr className="col-12 border-0 mt-5" />
            </div>
          </div>
          <div className="col-sm-5 bg-primary p-5 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h2 className="bold text-white my-3">New here?</h2>
              <p className="text-white ">
                sign up and discover a great amount of new opportunities
              </p>
              <Link
                to="/SignUp"
                className="btn bg-white py-2 text-dark shadow rounded-pill"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
