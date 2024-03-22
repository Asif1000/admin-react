import React from "react";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
const ListingCards = ({ image, title, videoImage }) => {
  return (
    <Card className="listing-card text-start">
      <Card.Img variant="top" src={image} className="listing-card-img " />
      <Card.Body>
        <h3 className="card-sub-heading">{title}</h3>
        <div className="d-flex gap-2">
          <img src={videoImage} alt="Video Logo" />
          <span className="paragraph">Tutorial Video</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListingCards;
