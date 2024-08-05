import React, { useContext } from "react";
import "./floatButton.css";
import { AppointmentContext } from "../../Context";

const FloatButton = () => {
  const context = useContext(AppointmentContext);
  const newAppointment = () => {
    context.openNewAppointment();
  };

  return (
    <>
      <div
        id="floating-button"
        data-toggle="modal"
        data-target="#myModal"
        onClick={() => newAppointment()}
      >
        <p className="plus">+</p>
      </div>
    </>
  );
};

export { FloatButton };
