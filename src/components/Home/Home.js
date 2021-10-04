import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Services from "../Services/Services";
import banner from "../../Image/banner.jpg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Card className="text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            <div className="text-center p-5 mt-5">
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
                <p className="fs-5 fw-normal">
                  We have the best instructors and guidlines <br /> for you to
                  learn everything about art. <br /> courses from basics to
                  advance are provided here.
                </p>
              </div>
              <button className="btnColor border border-0 shadow-lg text-white py-2 px-3 rounded-pill">
                Enroll now
              </button>
            </div>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Services></Services>
    </>
  );
};

export default Home;
