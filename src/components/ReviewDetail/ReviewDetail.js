import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./ReviewDetail.css";
const ReviewDetail = (props) => {
  const { image, name, review, rating } = props.review;
  return (
    <Col>
      <Card
        style={{ width: "18rem" }}
        className="rounded mx-auto shadow py-3 h-100"
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "120px" }}
          className="img-fluid rounded-circle overflow-hidden mx-auto"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-center">{name}</Card.Title>
          <Rating
            initialRating={rating}
            readonly
            emptySymbol="far fa-star star-icon"
            fullSymbol="fas fa-star star-icon"
          />
          <Card.Text>{review.slice(0, 100)}...</Card.Text>
          <Button className="btn btnColor border-0 shadow-sm">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReviewDetail;
