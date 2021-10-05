import React from "react";
import { Container } from "react-bootstrap";

const AboutDetail = (props) => {
  const { title, img, Description } = props.about;
  return (
    <Container className="d-flex mb-5 mx-auto">
      <div>
        <img src={img} alt="icons" className="pe-4" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{Description}</p>
      </div>
    </Container>
  );
};

export default AboutDetail;
