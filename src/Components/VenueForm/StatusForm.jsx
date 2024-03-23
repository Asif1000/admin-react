import React from "react";
import "./VenueForm.css";
import headerImg from "../../assets/images/VenueHeader.png";
import location from "../../assets/icons/Location.svg";
import { Col, Row } from "react-bootstrap";
const StatusForm = () => {
  return (
    <div
      className="Venue-card d-flex justify-content-center align-items-center p-2
    "
    >
      <div className="">
        <h4 className="sub-heading status  " style={{ width: 80 }}>
          Status
        </h4>
        <hr className="g-hr" />
        <span className="form-paragraph pt-2">
          Golf Terrace is a residential development in Damac Hills, Dubai,{" "}
        </span>
      </div>
    </div>
  );
};

export default StatusForm;
