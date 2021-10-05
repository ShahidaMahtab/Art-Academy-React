import React from "react";
import { Card } from "react-bootstrap";
import Services from "../Services/Services";
import banner from "../../Image/banner.jpg";
import "./Home.css";
import Review from "../Review/Review";
const Home = () => {
  return (
    <>
      <Card className="text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <div className="text-center p-5 mt-5">
            <Card.Title>
              <div className="mt-4">
                <small className="text-success">
                  Art academy register online
                </small>
                <h1 className="lh-sm display-2 fw-bold">
                  Find art in yourself,
                  <br />
                  not yourself
                  <br /> in art.
                </h1>
                <div>
                  <p className="fs-5 fw-normal">
                    We have the best instructors and guidlines <br /> for you to
                    learn everything about art. <br /> courses from basics to
                    advance are provided here.
                  </p>
                </div>
              </div>
              <button className="btnColor border border-0 shadow-lg text-white py-2 px-3 rounded-pill">
                Enroll now
              </button>
            </Card.Title>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Services></Services>
      <Review></Review>
    </>
  );
};

export default Home;
