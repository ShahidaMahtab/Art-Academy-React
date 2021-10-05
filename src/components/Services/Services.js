import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useServices from "../../hooks/useServices";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Title from "../Title/Title";

const Services = () => {
  const [services] = useServices([]);
  const newServices = services.slice(0, 4);
  const history = useHistory();
  const handleService = () => {
    history.push("/lgservices");
  };
  return (
    <Container className="my-5 text-center text-dark">
      <Title
        titleStart="Our"
        titleEnd="Services"
        subtitle="Best services 2021"
      ></Title>
      <Row xs={1} md={2} lg={4} className="g-4 mt-2">
        {newServices.map((service) => (
          <ServiceDetails key={service.key} service={service}></ServiceDetails>
        ))}
      </Row>
      <Button
        onClick={handleService}
        className="my-4 btnColor border border-0 shadow"
      >
        Learn More
      </Button>
    </Container>
  );
};

export default Services;
