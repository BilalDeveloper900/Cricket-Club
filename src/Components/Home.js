import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/Book_Slot">
        <Button variant="primary">Primary</Button>
      </Link>
    </div>
  );
}

export default Home;
