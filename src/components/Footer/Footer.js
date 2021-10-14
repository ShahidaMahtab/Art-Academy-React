import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const palette = <FontAwesomeIcon icon={faPalette} className="text-white" />;
  return (
    <div className="p-1 bg-dark h-100 mb-0">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-row bg-dark mt-4">
              <div className="flex-column p-1 justify-content-center mx-5">
                <h4 className="text-white"> {palette}Art Academy</h4>
                <Navbar.Text className="text-white">
                  our institution provide the best drawing <br />
                  and sketching technique we have student <br />
                  from all around the world joining our <br /> institution
                </Navbar.Text>
              </div>

              <div className="d-flex justify-content-center align-items-center p-1 mx-5">
                <div className="flex-column">
                  <Nav.Link className="text-white" href="/home">
                    services
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-1">
                    courses
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-2">
                    classess
                  </Nav.Link>
                </div>
                <div className="flex-column">
                  <Nav.Link className="text-white" href="/home">
                    guidelines
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-1">
                    contact
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-2">
                    Review
                  </Nav.Link>
                </div>
                <div className="flex-column">
                  <Nav.Link className="text-white" href="/home">
                    painting
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-1">
                    institution
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-2">
                    Academic
                  </Nav.Link>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items text-white mx-5">
                <Navbar.Text className="text-white">
                  <h4>Contact</h4>
                  <p>
                    +880187-5435424 <br />
                    +880187-5937546 <br />
                    artacademy@gmail.com
                  </p>
                </Navbar.Text>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="text-white d-block mx-auto text-center">
        Copyright&copy; 2021 Art Academy Inc. All right reserved
      </p>
    </div>
  );
};

export default Footer;
