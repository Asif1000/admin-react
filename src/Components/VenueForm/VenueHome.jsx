import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DescriptionForm from "./DescriptionForm";
import AmenitiesForm from "./AmenitiesForm";
import UpcomingEvent from "./UpcomingEvent";
import HeaderForm from "./HeaderForm";
import StatusForm from "./StatusForm";

const VenueHome = () => {
  return (
    <Container className="Venue-form-container mt-2">
      <Row className="mb-3 mt-2">
        <Col md={6} sm={12} xs={12} className="">
          <HeaderForm />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <StatusForm />
        </Col>
      </Row>
      <Row className="m-1">
        <DescriptionForm />
      </Row>
      <Row className="m-1">
        <AmenitiesForm />
      </Row>
      <Row className="m-1">
        <UpcomingEvent />
      </Row>
    </Container>
  );
};

export default VenueHome;
