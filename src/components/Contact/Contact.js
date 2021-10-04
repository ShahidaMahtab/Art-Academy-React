import React from "react";
import { Container, Form } from "react-bootstrap";
import Title from "../Title/Title";
import email from "../../Image/contact.png";

const Contact = () => {
  return (
    <div>
      <div className="mt-3 mb-5">
        <Title
          titleStart="Have Some"
          titleEnd="Question?"
          subtitle="Get in Touch"
        ></Title>
      </div>
      <Container>
        <div className="m-5 d-flex justify-content-center align-items-center py-5">
          <div className="pe-5">
            <img src={email} alt="" />
          </div>
          <div className="ps-5">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h5>Name</h5>
                </Form.Label>
                <Form.Control type="email" placeholder="full Name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>
                  <h5>Email Address</h5>
                </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <h5>let us know about your problem</h5>
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
