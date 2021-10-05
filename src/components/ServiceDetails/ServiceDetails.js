import React from "react";
import { Card, Col } from "react-bootstrap";
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
            className="img-fluid services-img overflow-hidden mx-auto"
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h6 className="header-text">{Students} students</h6>
              <h6 className="header-text">{Time}</h6>
            </div>
            <Card.Title className="text-start">
              <h5>{title.slice(0, 20)}</h5>
            </Card.Title>
            <div>
              <Card.Text className="text-start lh-sm">
                {Description.slice(0, 75)}
              </Card.Text>
              <div className="d-flex justify-content-between lh-sm">
                <Card.Text className="text-start">{Instructor}</Card.Text>
                <Card.Text className="text-start text-success">
                  {status}
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ServiceDetails;
