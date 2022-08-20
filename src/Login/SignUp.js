import React from "react";
import { Link } from "react-router-dom";

// css
import "./SignIn.css";

function SignUp() {
  return (
    <>
      <div className=" midBox col-md-9 my-5  shadow-lg  overflow-hidden">
        <div className="row">
          <div className="col-sm-7 d-flex align-items-center justify-content-center text-center">
            <div className="col-sm-7 pt-5">
              <h4 className="mb-4 mt-5">Sign up </h4>
              <h6>make yourself happy with us</h6>
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
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-pill"
                  id="cnfpwd"
                  placeholder="confirm password"
                  name="cnfpswd"
                />
              </div>
              <Link
                to="/Dashboard"
                type="submit"
                className="btn bg-primary text-white py-2 shadow rounded-pill "
              >
                Submit
              </Link>
              <hr className="col-12 border-0" />
              
              <hr className="col-12 border-0 mt-5" />
            </div>
          </div>
          <div className="col-sm-5 bg-primary p-5 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h2 className="bold text-white my-3">Already joined </h2>
              <p className="text-white ">Welcome again!</p>
              <Link
                to="/SignIn"
                className="btn bg-white text-dark py-2  shadow rounded-pill"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
