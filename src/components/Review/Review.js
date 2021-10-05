import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import Title from "../Title/Title";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="mt-5 mb-5">
      <Title
        titleStart="Student"
        titleEnd="Reviews"
        subtitle="what student say about us?"
      ></Title>
      <Row xs={1} md={2} lg={3} className="g-4 p-4 my-2">
        {reviews.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </Row>
    </Container>
  );
};

export default Review;
