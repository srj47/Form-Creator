import React from "react";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import Button from "react-bootstrap/Button"
const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="white"
        variant="light"
        className="container-fluid"
      >
        <Container className="col-sm-9 mx-auto">
          <Link to="/">
            <Navbar.Brand className="fw-bold">Form Creator</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="/" className="fw-bolder">
                Home
              </Nav.Link> */}
              <NavLink to="/CreateForm" className="fw-bolder">
                Create new
              </NavLink>
              <NavLink to="/MyForms" className="fw-bolder ms-3">
                My Forms
              </NavLink>
              <NavLink to="/Support" className="fw-bolder ms-3">
                Support
              </NavLink>
              {/* <Nav.Link
                href=""
                className="fw-bolder text-decoration-underline text-dark ms-3"
              >
                Suraj
              </Nav.Link>
              <Nav.Link href="/SignUp" className="fw-bolder ms-3">
                Sign Up
              </Nav.Link>
              <Nav.Link
                href="/SignIn"
                className="fw-bolder text-decoration-underline text-dark ms-3"
              >
                Sign In
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
