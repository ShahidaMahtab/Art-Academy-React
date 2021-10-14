import React from "react";
import { Card } from "react-bootstrap";
import Services from "../Services/Services";
import banner from "../../Image/banner.jpg";
import "./Home.css";
import Review from "../Review/Review";
const Home = () => {
  return (
    <>
      <Card className="text-white h-100">
        <Card.Img src={banner} alt="Card image" className="" />
        <Card.ImgOverlay className="text-center p-md-5 mt-md-5">
          <small className="text-success mt-5 d-block">
            Art academy register online
          </small>
          <Card.Title className="lh-sm display-2 fw-bold d-none d-md-block">
            Find art in yourself,
            <br />
            not yourself
            <br /> in art.
          </Card.Title>
          <Card.Text>
            We have the best instructors and guidlines <br /> for you to learn
            everything about art. <br /> courses from basics to advance are
            provided here.
          </Card.Text>
          <button className="btnColor border border-0 shadow-lg text-white py-2 px-3 rounded-pill d-none d-md-block mx-auto">
            Enroll now
          </button>
        </Card.ImgOverlay>
      </Card>
      <Services></Services>
      <Review></Review>
    </>
  );
};

export default Home;
