import React from "react";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import "./Form.css";
const MyForm = () => {
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="title-div my-4 mb-5  shadow p-4">
            <h1>STUDENT FORM</h1>
            <p> this is google form. this form is created with HTML and CSS.</p>
            <Stack direction="horizontal" gap={3}>
              <div className="p-3">0 entries</div>
              <div className=" px-3">
                <Link to="/Entries">View Entries</Link>
              </div>
              <div className=" px-3">
                <Link to="/FormView">View form</Link>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyForm;
