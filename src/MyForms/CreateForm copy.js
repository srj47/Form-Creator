import React, { useState } from "react";
import { produce } from "immer";

const CreateForm = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5 mx-0">
          <div className="col-sm-12 ms-auto">
            <div className="col-12 title-div">
              <h1>STUDENT FORM</h1>
              <p>
                this is google form. this forn is created with HTML and CSS.
              </p>
              <p className="required ">*Required</p>
            </div>
            <div className="row mx-0 px-0">
              {Element.map((e) => {
                return (
                  <>
                    <div className="" key={e.ElementId}>
                      {/* select element */}
                      <div className="mb-1">
                        <label htmlFor="SelectField" className="form-label">
                          Select Field
                        </label>
                        <select
                          name="SelectField"
                          id="SelectField"
                          className="form-select"
                          defaultValue=""
                          // onChange={handleChange}
                          required
                        >
                          <option value="">Select </option>
                          <option value="TextBox">Text Box </option>
                          <option value="TextArea">Text Area</option>
                          <option value="Dropdown">Dropdown</option>
                          <option value="CheckBox">Check Box</option>
                          <option value="RadioBox">Radio Box</option>
                          <option value="DatePicker">Date Picker</option>
                        </select>
                      </div>
                      {/* element title  */}
                      <div className="mb-1">
                        <label htmlFor="FieldTitle" className="form-label">
                          Field Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="FieldTitle"
                          name="FieldTitle"
                          aria-describedby="FieldTitleDesc"
                          // onChange={handleChange}
                          required
                        />
                        <div id="FieldTitleDesc" className="form-text">
                          (Eg: Full Name).
                        </div>
                      </div>
                      {/* require check  */}
                      <div className="mb-1 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="IsRequire"
                          name="IsRequire"
                          // onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="IsRequire">
                          is it require
                        </label>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateForm;

// function CreateFormSideMenu() {
//   const initialFormData = Object.freeze({
//     FormTitle: "",
//     FormDesc: "",
//     SelectField: "",
//     FieldTitle: "",
//     IsRequire: "",
//   });

//   const [formData, updateFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     updateFormData({
//       ...formData,

//       // Trimming any whitespace
//       [e.target.name]: e.target.value.trim(),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // ... submit to API or something

//     updateFormData(initialFormData);
//   };
//   return (
//     <>
//       <div className="modal-content">
//         <div className="modal-header border-0"></div>
//         <div className="modal-body">
//           <form>
//             {/* Form title  */}
//             <div className="mb-1">
//               <label htmlFor="FormTitle" className="form-label">
//                 Form Title
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="FormTitle"
//                 name="FormTitle"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             {/* Form Description  */}
//             <div className="mb-1">
//               <label htmlFor="FormDesc" className="form-label">
//                 Form Description
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="FormDesc"
//                 name="FormDesc"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <h5 className="modal-title" id="exampleModalLabel">
//               Add new element
//             </h5>
//             {/* select element */}
//             <div className="mb-1">
//               <label htmlFor="SelectField" className="form-label">
//                 Select Field
//               </label>
//               <select
//                 name="SelectField"
//                 id="SelectField"
//                 className="form-select"
//                 defaultValue=""
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select </option>
//                 <option value="TextBox">Text Box </option>
//                 <option value="TextArea">Text Area</option>
//                 <option value="Dropdown">Dropdown</option>
//                 <option value="CheckBox">Check Box</option>
//                 <option value="RadioBox">Radio Box</option>
//                 <option value="DatePicker">Date Picker</option>
//               </select>
//             </div>
//             {/* element title  */}
//             <div className="mb-1">
//               <label htmlFor="FieldTitle" className="form-label">
//                 Field Title
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="FieldTitle"
//                 name="FieldTitle"
//                 aria-describedby="FieldTitleDesc"
//                 onChange={handleChange}
//                 required
//               />
//               <div id="FieldTitleDesc" className="form-text">
//                 (Eg: Full Name).
//               </div>
//             </div>
//             {/* require check  */}
//             <div className="mb-1 form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="IsRequire"
//                 name="IsRequire"
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="IsRequire">
//                 is it require
//               </label>
//             </div>
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="btn btn-primary mx-0"
//             >
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
