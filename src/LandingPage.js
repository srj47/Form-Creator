import React from "react";
import img1 from "./img/img (1).jpg";
import img2 from "./img/img (2).jpg";
import img4 from "./img/img (4).jpg";
import img5 from "./img/img (5).jpg";
const LandingPage = () => {
  return (
    <>
      <div className="container">
        {/* section 1 */}
        <div
          className="text-center "
          style={{ marginTop: "50px", marginBottom: "100px" }}
        >
          <h1 className="my-4">Powerful forms get it done.</h1>
          <h6 className="col-sm-8 mx-auto">
            We believe the right form makes all the difference. Go from busywork
            to less work with powerful forms that use conditional logic, accept
            payments, generate reports, and automate workflows.
          </h6>
        </div>
        {/* section 2 */}
        <div className="row mx-0 px-0 my-5">
          <div className="col-sm-6 text-center d-flex flex-column ">
            <h5 className="mt-auto">Build the form you need in minutes</h5>
            <p className="mb-auto">
              Create professional-looking forms with no coding using Jotform’s
              online Form Builder. Then style your forms with your own logo,
              fonts, and colors.
            </p>
          </div>
          <div className="col-sm-6 text-center">
            <img
              src={img1}
              className=" "
              style={{ height: "auto", width: "auto", maxWidth: "300px" }}
              alt=" ... "
            />
          </div>
        </div>
        {/* section 3 */}
        <div className="row mx-0 px-0 my-5">
          <div className="col-sm-6 text-center">
            <img
              src={img5}
              className=" "
              style={{ height: "auto", width: "auto", maxWidth: "300px" }}
              alt=" ... "
            />
          </div>
          <div className="col-sm-6 text-center  d-flex flex-column ">
            <h5 className="mt-auto">Online Survey Maker</h5>
            <p className="">
              Over 50,000+ surveys created. Over 4 million respondents
            </p>
            <p className="mb-auto">
              Create surveys & forms <br /> Build NPS surveys
              <br /> Create quizzes, tests & assessments <br /> Make polls
              popups, sidebar & in-app surveys
            </p>
          </div>
        </div>
        {/* section 4 */}
        <div className="row mx-0 px-0 my-5">
          <div className="col-sm-6 text-center  d-flex flex-column ">
            <h5 className="mt-auto">Conversational Form</h5>
            <p className="mb-auto">
              Conversational Form is an open-source tool from SPACE10 that
              enables people to turn information into conversations—be it report
              insights, application flows or something completely different
              altogether. Try Conversational Form to jumpstart a conversation
              and make your content more engaging today.
            </p>
          </div>
          <div className="col-sm-6 text-center">
            <img
              src={img2}
              className=" "
              style={{ height: "auto", width: "auto", maxWidth: "300px" }}
              alt=" ... "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
