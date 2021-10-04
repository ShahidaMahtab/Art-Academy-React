import React, { useEffect, useState } from "react";
import { Container as div, Image, Row } from "react-bootstrap";
import AboutDetail from "../AboutDetail/AboutDetail";
import Title from "../Title/Title";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("./about.json")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);
  return (
    <div className="px-3">
      <div className="mt-3 mb-5">
        <Title titleStart="About" titleEnd="Us" subtitle="why join us?"></Title>
      </div>
      <div className="pb-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {about.map((item) => (
            <AboutDetail key={item.key} about={item}></AboutDetail>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default About;
