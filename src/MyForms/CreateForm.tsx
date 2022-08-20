import { produce } from "immer";
import React, { useState } from "react";
import { generate } from "shortid";

interface Element {
  id: string;
  SelectField: string;
  FieldTitle: string;
  IsRequire: string;
}

const App = () => {
  const [Elements, setElements] = useState<Element[]>([
    // { id: "5", SelectField: "one", FieldTitle: "two" },
  ]);

  return (
    <div className="container">
      <div className="row my-5 mx-0">
        <div className="col-sm-8 mx-auto">
          {/* =====Form title===================================================== */}
          <div className="col-sm-12 mx-auto my-5 title-div">
            <label className="form-label m-0">Form title</label>
            <input
              type="text"
              className="form-control p-2 border-0 border-bottom fw-bold"
              id="FormTitle"
              name="FormTitle"
              required
            />
            <label className="form-label mt-4">Form description</label>
            <input
              type="text"
              className="form-control p-2 border-0 border-bottom "
              id="FormTitle"
              name="FormTitle"
              required
            />
          </div>
          {/* ====Form Section ========================================================= */}
          <div className="col-sm-12 my-5">
            {Elements.map((p, index) => {
              return (
                <div className="row mx-3 py-4 border-bottom" key={p.id}>
                  <div className="col-sm-4">
                    <label className="form-label">Select Field</label>
                    <select
                      name="SelectField"
                      id="SelectField"
                      className="form-select"
                      required
                      onChange={(e) => {
                        const SelectField = e.target.value;
                        setElements((currentElements) =>
                          produce(currentElements, (v) => {
                            v[index].SelectField = SelectField;
                          })
                        );
                      }}
                      value={p.SelectField}
                    >
                      <option value=""> </option>
                      <option value="TextBox">Text Box </option>
                      <option value="TextArea">Text Area</option>
                      <option value="Dropdown">Dropdown</option>
                      <option value="CheckBox">Check Box</option>
                      <option value="RadioBox">Radio Box</option>
                      <option value="DatePicker">Date Picker</option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">Field title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="FieldTitle"
                      name="FieldTitle"
                      required
                      onChange={(e) => {
                        const FieldTitle = e.target.value;
                        setElements((currentElements) =>
                          produce(currentElements, (v) => {
                            v[index].FieldTitle = FieldTitle;
                          })
                        );
                      }}
                      value={p.FieldTitle}
                    />
                  </div>
                  <div className="col-sm-2">
                    <label className="form-label">is it require</label>
                    <select
                      name="IsRequire"
                      id="IsRequire"
                      className="form-select"
                      required
                      onChange={(e) => {
                        const IsRequire = e.target.value;
                        setElements((currentElements) =>
                          produce(currentElements, (v) => {
                            v[index].IsRequire = IsRequire;
                          })
                        );
                      }}
                      value={p.IsRequire}
                    >
                      <option value=""></option>
                      <option value="N">No</option>
                      <option value="Y">Yes</option>
                    </select>
                  </div>
                  <div className="col-sm-2">
                    <button
                      className="btn bg-white text-dark "
                      onClick={() => {
                        setElements((currentElements) =>
                          currentElements.filter((x) => x.id !== p.id)
                        );
                      }}
                    >
                      <i className="bi bi-trash mx-3" />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="row mx-0 px-0">
              <button
                className="btn btn-primary w-auto h-auto px-3 "
                onClick={() => {
                  setElements((currentElements) => [
                    ...currentElements,
                    {
                      id: generate(),
                      SelectField: "",
                      FieldTitle: "",
                      IsRequire: "",
                    },
                  ]);
                }}
              >
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-plus-circle-dotted me-3 my-0 p-0"
                    style={{ fontSize: "20px" }}
                  />
                  <p className="m-0 p-0 mt-1">Add field</p>
                </div>
              </button>
            </div>

            {/* ===================================================== */}
            {/* see entered values  */}
            {/* <div>{JSON.stringify(Elements, null, 2)}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
