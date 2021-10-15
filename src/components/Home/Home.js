import React from "react";
import { Card } from "react-bootstrap";
import Services from "../Services/Services";
import banner from "../../Image/banner.jpg";
import "./Home.css";
import Review from "../Review/Review";
const Home = () => {
  return (
    <>
      <Card className="text-white h-100 py-md-0 py-5 border border-0">
        <Card.Img src={banner} alt="Card image" className="img-fluid" />
        <Card.ImgOverlay className="text-center p-md-5 mt-md-5">
          <small className="text-success mt-5 d-block">
            Art academy register online
          </small>
          <div className="d-lg-none">
            Find art in yourself,
            <br />
            not yourself in art.
            <br />
            <small className="lh-0 p-0 m-0 fs-sm-6">
              We have the best instructors and guidlines <br /> for you to learn
              everything about art. <br /> courses from basics to advance are
              provided here.
            </small>
          </div>
          <Card.Title className="lh-sm display-2 fw-bold d-none d-md-none d-lg-block">
            Find art in yourself,
            <br />
            not yourself
            <br /> in art.
          </Card.Title>
          <Card.Text className="d-none d-md-none d-lg-block">
            We have the best instructors and guidlines <br /> for you to learn
            everything about art. <br /> courses from basics to advance are
            provided here.
          </Card.Text>
          <button className="btnColor border border-0 shadow-lg text-white py-md-2 px-3 rounded-pill  mx-auto mb-4 mb-md-0 d-block">
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
