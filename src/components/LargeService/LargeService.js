import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useServices from "../../hooks/useServices";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Title from "../Title/Title";

const LargeService = () => {
  const [services] = useServices([]);
  const history = useHistory();
  const handleHome = () => {
    history.push("/home");
  };
  return (
    <Container className="my-5 text-center text-dark">
      <Title
        titleStart="Our"
        titleEnd="Services"
        subtitle="best services 2021"
      ></Title>
      <div>
        <Row xs={1} md={2} lg={4} className="g-4 mt-2">
          {services.map((service) => (
            <ServiceDetails
              key={service.key}
              service={service}
            ></ServiceDetails>
          ))}
        </Row>
        <Button
          onClick={handleHome}
          className="my-4 btnColor border border-0 shadow"
        >
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default LargeService;
