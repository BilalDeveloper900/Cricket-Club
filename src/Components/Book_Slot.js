import React, { useState } from "react";
import Date from "./Date";
import Form from "./Form";
import Summery from "./Summery";
import Slot from "./Slot";
import { Container, Row, Col } from "react-bootstrap";

function Book_Slot() {
  const [activeTab, setActiveTab] = useState("slot");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container className="container">
      <Row className="top">
        <Col sm={3}>
          <div className="top-button border side-bar">
            <div
              className={`btn-4 ${activeTab === "slot" ? "active" : ""}`}
              onClick={() => handleTabClick("slot")}
            >
              <div
                className={`icon ${activeTab === "slot" ? "icon-clicked" : ""}`}
              >
                <i className="fa fa-check-square" aria-hidden="true"></i>
              </div>
              <span
                className={`btn-txt ${
                  activeTab === "slot" ? "btn-txt-clicked" : ""
                }`}
              >
                <b>Slot</b>
              </span>
            </div>

            <div
              className={`btn-4 ${activeTab === "date" ? "active" : ""}`}
              onClick={() => handleTabClick("date")}
            >
              <div
                className={`icon ${activeTab === "date" ? "icon-clicked" : ""}`}
              >
                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
              </div>
              <span
                className={`btn-txt ${
                  activeTab === "date" ? "btn-txt-clicked" : ""
                }`}
              >
                <b>Date & Time</b>
              </span>
            </div>

            <div
              className={`btn-4 ${activeTab === "details" ? "active" : ""}`}
              onClick={() => handleTabClick("details")}
            >
              <div
                className={`icon ${
                  activeTab === "details" ? "icon-clicked" : ""
                }`}
              >
                <i className="fa-regular fa-address-card"></i>
              </div>
              <span
                className={`btn-txt ${
                  activeTab === "details" ? "btn-txt-clicked" : ""
                }`}
              >
                <b>Details</b>
              </span>
            </div>

            <div
              className={`btn-4 ${activeTab === "summary" ? "active" : ""}`}
              onClick={() => handleTabClick("summary")}
            >
              <div
                className={`icon ${
                  activeTab === "summary" ? "icon-clicked" : ""
                }`}
              >
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </div>
              <span
                className={`btn-txt ${
                  activeTab === "summary" ? "btn-txt-clicked" : ""
                }`}
              >
                <b>Summary</b>
              </span>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <div className="border center">
            {activeTab === "slot" && <Slot />}
            {activeTab === "date" && <Date />}
            {activeTab === "details" && <Form />}
            {activeTab === "summary" && <Summery />}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Book_Slot;
