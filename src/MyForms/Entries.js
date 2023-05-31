import React from "react";
import { Link } from "react-router-dom";

const Entries = () => {
  return (
    <>
      <div className="col-sm-7 mx-auto">
        <div className="form mb-5">
          {/* form title */}
          <div className="title-div my-4 mb-2   py-4">
            <h1>STUDENT FORM</h1>
            <p> this is google form. this form is created with HTML and CSS.</p>
            <div className="">0 entries</div>
          </div>
          {/* ---------------------------------------- */}
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Entries;

const Card = (props) => {
  return (
    <>
      <div className="card p-4 mb-4">
        <div className="row  mx-0 px-0">
          <div className="col-sm-6 p-3">
            <h6 className="">Title</h6>
            <p className="m-0">Value</p>
          </div>
          <div className="col-sm-6 p-3">
            <h6 className="">Title</h6>
            <p className="m-0">Value</p>
          </div>
          <div className="col-sm-6 p-3">
            <h6 className="">Title</h6>
            <p className="m-0">Value</p>
          </div>
        </div>
      </div>
    </>
  );
};
