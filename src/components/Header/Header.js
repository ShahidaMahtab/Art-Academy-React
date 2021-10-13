import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Cart from "../Cart/Cart";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const palette = (
    <FontAwesomeIcon icon={faPalette} className="text-warning fs-1" />
  );
  const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
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
              to="/contact"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              Contact
            </NavLink>
            <NavLink
              to="/register"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              SignUp
            </NavLink>
            {/*  <NavLink
              to="/cart"
              className="text-decoration-none fs-5 me-3 header-text fw-bold"
            >
              {shoppingCart}
            </NavLink> */}
            <Button
              onClick={handleShow}
              className="me-2 border border-0 border-btnColor text-white btnColor"
            >
              {shoppingCart}
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="header-text fw-bold text-center mx-auto fs-3">
                  Courses Cart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Cart></Cart>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
