import React from "react";
import "./VenueForm.css";
import headerImg from "../../assets/images/VenueHeader.png";
import location from "../../assets/icons/Location.svg";
import { Col, Row } from "react-bootstrap";
const HeaderForm = () => {
  return (
    <div
      className="Venue-card d-flex justify-content-center align-items-center p-3 
    "
    >
      <Row className="">
        <Col md={3}>
          <div className="venue-header-img">
            <img src={headerImg} alt="headerImg" />
          </div>
        </Col>
        <Col
          md={9}
          className="d-flex justify-content-center align-items-center  flex-column"
        >
          <div className="venue-header-text-div">
            <h4 className="heading">Blu Club Dubai</h4>
            <span className="d-block pb-3 pt-1 span1">Night Club</span>
            <span className="form-paragraph ">
              <img src={location} alt="location" />
              32nd floor of V-Hotel in Al Habtoor City - Dubai - UAE
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderForm;
