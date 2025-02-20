import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="Homepage">
      <h1>Welcome to the Digital Keypad</h1>
      <p>Your go-to number converter! Enter numbers and convert them into different bases.</p>

      <nav>
        <Link to="/Demo">
          <button>Try A Quick Demo!</button>
        </Link>
      </nav>
    </div>
  );
}

export default Homepage;
