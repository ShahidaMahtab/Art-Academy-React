import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ServicesfDetails.css";
const ServiceDetails = ({ service }) => {
  const { title, description, Time, Students, Instructor, status, img, price } =
    service;
  const { handleAddToCart } = useContext(CartContext);
  const cartPlus = <FontAwesomeIcon icon={faPlus} className="text-btnColor" />;
  return (
    <>
      <Col>
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={img}
            className="img-fluid services-img overflow-hidden mx-auto"
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h6 className="header-text">{Students} students</h6>
              <h6 className="header-text">{Time}</h6>
            </div>
            <Card.Title className="text-start">
              <h5>{title}</h5>
            </Card.Title>
            <div>
              <Card.Text className="text-start">
                {description}
                <br />
                <span className="text-danger">${price}.00</span>
              </Card.Text>
              <div className="d-flex justify-content-between lh-sm">
                <Card.Text className="text-start text-secondary">
                  {Instructor}
                </Card.Text>
                <Card.Text className="text-start text-success">
                  {status}
                </Card.Text>
              </div>
              <button
                onClick={() => handleAddToCart(service)}
                className="btnColor border-0 text-white px-5 py-1 rounded-pill"
              >
                {cartPlus} cart
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ServiceDetails;
