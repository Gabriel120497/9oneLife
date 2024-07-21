import React from "react";
import "./newAppointment.css";

const NewAppointment = () => {
  return (
    <div className="flex justify-center pt-10">
      <form className="formBox">
        <div className="formTitle">New Appointment</div>
        <div className="formHeader">Pacient's Name</div>
        <input className="formInput"></input>

        <div className="formHeader">Date</div>
        <input className="formInput"></input>

        <div className="formHeader">Dr. Appointment Time</div>
        <input className="formInput"></input>

        <div className="formHeader">Pickup Site</div>
        <input className="formInput"></input>

        <div className="formHeader">Drop-off Site</div>
        <input className="formInput"></input>

        <div className="formHeader">Trasnport Type</div>
        <input className="formInput"></input>

        <div className="formHeader">Trip Type</div>
        <input className="formInput"></input>

        <div className="formHeader">Payer</div>
        <input className="formInput"></input>

        <div className="formHeader">Comments</div>
        <input className="formInput"></input>

        <div className="formTitle">Vehicle Information</div>
        <div className="formHeader">Driver</div>
        <input className="formInput"></input>

        <div className="formHeader">Assistant</div>
        <input className="formInput"></input>

        <div className="formHeader">Plates</div>
        <input className="formInput"></input>

        <input className="btn" type="submit" name="next"></input>
      </form>
    </div>
  );
};

export { NewAppointment };
