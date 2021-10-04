import React from "react";
import { Container } from "react-bootstrap";

const AboutDetail = (props) => {
  const { title, img, Description } = props.about;
  return (
    <Container>
      <div className="d-flex mx-5 mb-5">
        <div>
          <img src={img} alt="icons" className="pe-4" />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{Description}</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutDetail;
