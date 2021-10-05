import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark py-5">
        <nav className="d-flex mx-5">
          <div className="navbar-nav d-flex flex-row bg-dark text-white mx-auto">
            <a
              className="nav-link text-white ms-4"
              aria-current="page"
              href="/#"
            >
              Home
            </a>
            <a className="nav-link text-white ms-4" href="/#">
              Features
            </a>
            <a className="nav-link text-white ms-4" href="/#">
              Services
            </a>
            <a className="nav-link text-white ms-4" href="/#">
              Contact
            </a>
            <a className="nav-link text-white ms-4" href="/#">
              Reviews
            </a>
          </div>
        </nav>
        <p className="text-white text-center bg-dark m-0">
          <small>
            Copyright&copy; 2021 Art Academy Inc. All right reserved
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
