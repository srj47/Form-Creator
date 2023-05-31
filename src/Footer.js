import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row mx-0 footer bg-dark-blue  pt-5 pb-4 text-light">
        <div className="col-sm-3 ms-auto">
          <h5 className="ms-3">Form Creator </h5>
          <ul className="">
            <li className="">Sign up</li>
            <li className="">Sign in</li>
            <li className="">My Forms</li>
            <li className="">Pricing</li>
            <li className="">Feature</li>
          </ul>
        </div>
        <div className="col-sm-3 ">
          <h5 className="ms-3">Marketplace </h5>
          <ul className="">
            <li className="">Template</li>
            <li className="">Form Theme</li>
            <li className="">Form widget</li>
            <li className="">Integration</li>
          </ul>
        </div>
        <div className="col-sm-3 me-auto">
          {" "}
          <h5 className="ms-3">Support </h5>
          <ul className="">
            <li className="">Contact us</li>
            <li className="">User Guide</li>
            <li className="">Webinar</li>
            <li className="">Report Copyright Issue</li>
          </ul>
        </div>
        <div className="col-sm-12 text-light text-center">
          © 2022 Form Creator Inc. Bangalore India
        </div>
      </div>
    </>
  );
};

export default Footer;
