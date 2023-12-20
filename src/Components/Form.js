import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Detail() {
  return (
    <div>
      <Form>
        <b>Basic Details</b>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your firstname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your lastname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="03061234567" />
        </Form.Group>
      </Form>

      <hr />

      <div className="footer">
        <span className="go-back">
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
        </span>
        <span className="right-btn">
          Next: <b>Summery</b>{" "}
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default Detail;
