import React from "react";
import img from "../Img/1.jpg";

function Summery() {
  return (
    <div>
      <div className="summery">
        <img src={img} alt="img" className="img" />
      </div>
      <div className="summery-1">
        <b>Summery</b>
        <span>
          <p>Your booking summary</p>
        </span>
        <p className="pt-2 customer">Customer</p>
        <b className="customer-name">Muhammad Bilal</b>
      </div>

      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-3 ">
            <div className="summery-left">
              <p>Service</p>
              <b>1 hour Slot</b>
            </div>
          </div>
          <div className="col-md-7 ">
            <div className="summery-right">
              {" "}
              <p>Date & Time</p>
              <b>18/03/2023</b>
            </div>
          </div>
        </div>
      </div>

      <div className="amount">
        <hr />
        <div className="total">
          <b>Total Amount Payable</b>
          <b className="color">Rs1.00</b>
        </div>
        <hr />
      </div>

      <hr />

      <div className="footer">
        <span className="go-back">
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
        </span>
        <span className="right-btn">
          <b>Book Now</b>
        </span>
      </div>
    </div>
  );
}

export default Summery;
