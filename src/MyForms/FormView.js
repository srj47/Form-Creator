import React from "react";
import "./Form.css";

//////////////////////////////////////////////////////////////////////////
const FormView = () => {
  return (
    <>
      <div className="container">
        <div className="form my-5 ">
          <div className="title-div">
            <h1>STUDENT FORM</h1>
            <p> this is google form. this forn is created with HTML and CSS.</p>
            <p className="required ">*Required</p>
          </div>
          <div className="row mx-0 px-0">
            <TextBox />
            <CheckBox />
            <TextBox />
            <DropDown />
            <RadiokBox />
            <DatePicker />
          </div>

          <div>
            <input className="btn" type="submit" name="submit" />
          </div>
        </div>
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////
const Required = (props) => {
  return (
    <>
      <span className="required px-1 bold fw-bolder">*</span>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////
const TextBox = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <label className="mt-5">
          what is your name?
          <Required />
        </label>
        <input
          type="input"
          className="input my-3 pb-2"
          name="answer"
          placeholder="your answer"
        />
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////
const TextArea = (props) => {
  return (
    <>
      <div className="col-sm-12">
        <label className="mt-5">
          TextArea
          <Required />
        </label>
        <textarea
          type="input"
          className="input my-3"
          name="answer"
          placeholder="your answer"
        />
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////
const DropDown = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <label className="mt-5">
          DropDown
          <Required />
        </label>
        <select
          aria-label="Default select example"
          className="form-select input my-3"
          name="answer"
          placeholder="your answer"
        >
          <option defaultValue="selected">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////
const CheckBox = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <label className="mt-5">
          CheckBox
          <Required />
        </label>
        <div className="form-check ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlhtmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlhtmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////
const RadiokBox = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <label className="mt-5">
          RadiokBox
          <Required />
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlhtmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlhtmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
      </div>
    </>
  );
};
// ////////////////////////////////////////////////////////
const DatePicker = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <label className="mt-5">
          Date Picker
          <Required />
        </label>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            id="DatePicker"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////////

export default FormView;

export { TextBox, TextArea, RadiokBox, CheckBox, DropDown, Required };
