import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useServices from "../../hooks/useServices";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Services = () => {
  const [services] = useServices([]);
  const newServices = services.slice(0, 4);
  const history = useHistory();
  const handleService = () => {
    history.push("/lgservices");
  };
  return (
    <Container className="my-5 text-center text-dark">
      <div>
        <small className="text-success fw-bold">best services 2021</small>
        <h1>
          Our <span className="header-text">Services</span>
        </h1>
      </div>
      <div>
        <Row xs={1} md={2} lg={4} className="g-4 mt-2">
          {newServices.map((service) => (
            <ServiceDetails
              key={service.key}
              service={service}
            ></ServiceDetails>
          ))}
        </Row>
        <Button
          onClick={handleService}
          className="my-4 btnColor border border-0 shadow"
        >
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default Services;
