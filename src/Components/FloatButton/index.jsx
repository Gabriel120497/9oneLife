import React from "react";
import "./floatButton.css";
import { Link } from "react-router-dom";

const FloatButton = () => {
  return (
    <>
      <Link to="/newAppointment">
        <div
          id="floating-button"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="Create"
        >
          <p className="plus">+</p>
        </div>
      </Link>
    </>
  );
};

export { FloatButton };
