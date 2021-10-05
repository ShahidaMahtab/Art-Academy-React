import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark pt-5 pb-2 h-100">
      <nav className="d-flex mb-2">
        <div className="navbar-nav d-flex flex-row bg-dark text-white mx-auto">
          <div className="me-5">
            <h4>Art Academy.</h4>
            <p>artacademy@org.com</p>
            <div>
              <small className="text-start">
                our institution provide the best drawing <br />
                and sketching technique we have student <br />
                from all around the world joining our <br /> institution
              </small>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-row ">
            <div className="ms-5">
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
            </div>
            <div>
              <a
                className="nav-link text-white ms-4"
                aria-current="page"
                href="/#"
              >
                courses
              </a>
              <a className="nav-link text-white ms-4" href="/#">
                classes
              </a>
              <a className="nav-link text-white ms-4" href="/#">
                Reviews
              </a>
              <a className="nav-link text-white ms-4" href="/#">
                Students
              </a>
            </div>
            <div>
              <a
                className="nav-link text-white ms-4"
                aria-current="page"
                href="/#"
              >
                drawing
              </a>
              <a className="nav-link text-white ms-4" href="/#">
                sketching
              </a>
              <a className="nav-link text-white ms-4" href="/#">
                painting
              </a>
              <a className="nav-link text-white ms-4" href="/#">
                institution
              </a>
            </div>
          </div>
        </div>
      </nav>
      <p className="text-white text-center bg-dark mt-3">
        <small>Copyright&copy; 2021 Art Academy Inc. All right reserved</small>
      </p>
    </footer>
  );
};

export default Footer;
