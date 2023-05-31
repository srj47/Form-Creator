import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import MyForms from "./MyForms/MyForms";
import FormView from "./MyForms/FormView";
import Entries from "./MyForms/Entries";
import CreateForm from "./MyForms/CreateForm.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <SignIn />
            <Footer />
          </>
        }
      />
      <Route
        path="/LandingPage"
        element={
          <>
            <NavBar />
            <LandingPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/SignIn"
        element={
          <>
            <NavBar />
            <SignIn />
            <Footer />
          </>
        }
      />
      <Route
        path="/SignUp"
        element={
          <>
            <NavBar />
            <SignUp />
            <Footer />
          </>
        }
      />
      <Route
        path="/MyForms"
        element={
          <>
            <NavBar />
            <MyForms />
            <Footer />
          </>
        }
      />
      <Route
        path="/FormView"
        element={
          <>
            <NavBar />
            <FormView />
            <Footer />
          </>
        }
      />
      <Route
        path="/Entries"
        element={
          <>
            <NavBar />
            <Entries />
            <Footer />
          </>
        }
      />
      <Route
        path="/CreateForm"
        element={
          <>
            <NavBar />
            <CreateForm />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
