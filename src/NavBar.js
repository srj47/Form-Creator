import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
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
              <Nav.Link href="/CreateForm" className="fw-bolder">
                Create new
              </Nav.Link>
              <Nav.Link href="/MyForms" className="fw-bolder">
                My Forms
              </Nav.Link>
              <Nav.Link href="/Support" className="fw-bolder ms-3">
                Support
              </Nav.Link>
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
