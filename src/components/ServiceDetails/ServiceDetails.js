import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./ServicesfDetails.css";
const ServiceDetails = (props) => {
  const { title, Description, Time, Students, Instructor, status, img } =
    props.service;
  return (
    <>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={img}
            className="img-fluid services-img overflow-hidden"
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h6 className="header-text">{Students} students</h6>
              <h6 className="header-text">{Time}</h6>
            </div>
            <Card.Title>
              <h5 className="text-start">{title.slice(0, 20)}</h5>
            </Card.Title>
            <Card.Text>
              <div>
                <p className="text-start lh-sm">{Description.slice(0, 75)}</p>
                <div className="d-flex justify-content-between lh-sm">
                  <p className="text-start">{Instructor}</p>
                  <p className="text-start text-success">{status}</p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ServiceDetails;
