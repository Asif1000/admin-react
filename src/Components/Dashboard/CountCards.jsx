import React from "react";
import { Card } from "react-bootstrap";

const CountCards = ({ title, value, subValue }) => {
  return (
    <Card className="grid-card d-flex flex-column align-items-center justify-content-center">
      <Card.Body className="d-flex flex-column align-items-center justify-content-center g-texts">
        <h5 className="text-center g-texts fw-bold">{title}</h5>
        <h1 className="text-center fw-bold g-texts">
          {value} <span className="g-span ml-md-2">{subValue}</span>
        </h1>
      </Card.Body>
    </Card>
  );
};

export default CountCards;
