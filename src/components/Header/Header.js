import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  const palette = (
    <FontAwesomeIcon icon={faPalette} className="text-warning fs-1" />
  );
  return (
    <div>
      <Navbar variant="light shadow" bg="light">
        <Container>
          <Navbar.Brand>
            <h3 className="fs-4 fw-bold header-text text-uppercase">
              {palette} Art Academy
            </h3>
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
              About
            </NavLink>
            <NavLink
              to="/lgservices"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              Services
            </NavLink>
            <NavLink
              to="/review"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              Reviews
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
