import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Services from "../Services/Services";
import banner from "../../Image/banner.jpg";
import "./Home.css";
const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Card className="text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            <div className="text-center p-5 mt-5 lh-lg">
              <h2 className="lh-sm mt-5">
                Find art in yourself,
                <br />
                not yourself
                <br /> in art.
              </h2>
              <p>
                We have the best instructors and guidlines for you to learn
                everything about art.
              </p>
              <button
                onClick={() => setToggle(!toggle)}
                className="btnColor border border-0 shadow-lg text-white py-1 px-3 rounded-pill"
              >
                Enroll now
              </button>
              {toggle ? (
                <div>
                  <h6>Register today</h6>
                </div>
              ) : (
                <div>
                  <h6 className="text-success">check your mail</h6>
                </div>
              )}
            </div>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Services></Services>
    </>
  );
};

export default Home;
