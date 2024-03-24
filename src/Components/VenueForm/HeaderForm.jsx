import React, { useState } from "react";
import "./VenueForm.css";
import headerImg from "../../assets/images/VenueHeader.png";
import location from "../../assets/icons/Location.svg";
import { Col, Row, Button, Form } from "react-bootstrap";
import edit from "../../assets/icons/Edit.svg";
const HeaderForm = () => {
  const [editMode, setEditMode] = useState(false);

  // Initial venue data
  const initialVenueData = {
    name: "Blu Club Dubai",
    type: "Night Club",
    location: "32nd floor of V-Hotel in Al Habtoor City - Dubai - UAE",
  };

  const [venueData, setVenueData] = useState(initialVenueData); // State to manage venue data

  const handleEditClick = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  const handleSaveClick = () => {
    // Save edited data and exit edit mode
    setEditMode(false);
    // Perform save action here (e.g., send data to backend)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenueData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="Venue-card d-flex justify-content-center align-items-center p-3">
      <img
        src={edit}
        alt="img"
        className="edit-img"
        onClick={handleEditClick}
      />
      <Row>
        <Col md={3}>
          <div className="venue-header-img">
            <img src={headerImg} alt="headerImg" />
          </div>
        </Col>
        <Col
          md={9}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          {editMode ? (
            <Form className="venue-header-text-div">
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  value={venueData.name}
                  onChange={handleInputChange}
                  className="heading"
                />
              </Form.Group>
              <Form.Group controlId="formType">
                <Form.Control
                  type="text"
                  name="type"
                  value={venueData.type}
                  onChange={handleInputChange}
                  className="d-block pb-3 pt-1 span1"
                />
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Control
                  type="text"
                  name="location"
                  value={venueData.location}
                  onChange={handleInputChange}
                  className="form-paragraph" // Apply form-paragraph style to location input
                />
              </Form.Group>
              <Button variant="success" onClick={handleSaveClick}>
                Save
              </Button>{" "}
              {/* Save button */}
            </Form>
          ) : (
            <div className="venue-header-text-div">
              <h4 className="heading">{venueData.name}</h4>
              <span className="d-block pb-3 pt-1 span1">{venueData.type}</span>
              <span className="form-paragraph">
                <img src={location} alt="location" />
                {venueData.location}
              </span>
              {/* <Button variant="primary" onClick={handleEditClick}>
                Edit
              </Button> */}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default HeaderForm;
