import React from "react";
import Date from "./Date";
import Form from "./Form";
import Summery from "./Summery";
import Slot from "./Slot";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Book_Slot() {
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the click event and toggle the state
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container className="container">
      <Row className="top">
        <Col sm={3}>
          <div className="top-button border side-bar">
            <div className="btn-4" onClick={handleClick}>
              <div className={isClicked ? "icon" : "icon-clicked"}>
                <i class="fa fa-check-square" aria-hidden="true"></i>
              </div>
              <span className={isClicked ? "btn-txt" : "btn-txt-clicked"}>
                <b>Slot</b>
              </span>
            </div>

            <div className="btn-4">
              <div className="icon">
                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
              </div>
              <span className="btn-txt">
                <b>Date & Time</b>
              </span>
            </div>

            <div className="btn-4">
              <div className="icon">
                <i class="fa-regular fa-address-card"></i>
              </div>
              <span className="btn-txt">
                <b>Details</b>
              </span>
            </div>

            <div className="btn-4">
              <div className="icon">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
              </div>
              <span className="btn-txt">
                <b>Summery</b>
              </span>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <div className="border center">
            <div>
              <Slot />
            </div>
            <div>
              <Date />
            </div>
            <div>
              <Form />
            </div>
            <div>
              <Summery />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Book_Slot;
