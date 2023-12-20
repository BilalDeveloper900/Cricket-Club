import React from "react";

function Slot() {
  return (
    <>
      <div className="slot">
        <b>Select Slot (1300/hour on weekdays and 1500/hour on weekend)</b>

        <div className="slot-1">
          <div className="slot-icon">
            <i class="fa fa-area-chart" aria-hidden="true"></i>
          </div>

          <div className="slot-txt">
            <h5>1 hour Slot</h5>
            <p>
              Duration: <span>60 m</span> Price:{" "}
              <div className="value">Rs1.00</div>
            </p>
          </div>
        </div>

        <div className="slot-1">
          <div className="slot-icon">
            <i class="fa fa-area-chart" aria-hidden="true"></i>
          </div>

          <div className="slot-txt">
            <h5>1 hour Slot</h5>
            <p>
              Duration: <span>60 m</span> Price:{" "}
              <div className="value">Rs1.00</div>
            </p>
          </div>
        </div>

        <div className="slot-1">
          <div className="slot-icon">
            <i class="fa fa-area-chart" aria-hidden="true"></i>
          </div>

          <div className="slot-txt">
            <h5>1 hour Slot</h5>
            <p>
              Duration: <span>60 m</span> Price:{" "}
              <div className="value">Rs1.00</div>
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer">
        <span className="right-btn">
          Next: <b>Date & Time</b>{" "}
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
}

export default Slot;
