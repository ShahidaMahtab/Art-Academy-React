import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar variant="light shadow-sm" bg="light">
        <Container>
          <Navbar.Brand>
            <h3 className="fs-4 fw-bold header-text">Painting Academy</h3>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              to="/home"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              About Us
            </NavLink>
            <NavLink
              to="/lgservices"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
