// import React from 'react'

// const UpcomingEvent = () => {
//   return (
//     <div>UpcomingEvent</div>
//   )
// }

// export default UpcomingEvent

import React from "react";
import "./VenueForm.css";
import headerImg from "../../assets/images/VenueHeader.png";
import location from "../../assets/icons/Location.svg";
import { Col, Row } from "react-bootstrap";
const UpcomingEvent = () => {
  return (
    <div
      className="Venue-card d-flex justify-content-center align-items-center p-4 mb-3
    "
    >
      <div className="">
        <h4 className="sub-heading status  " style={{ width: 160 }}>
          Upcoming Events
        </h4>
        <hr className="g-hr" />
        <span className="form-paragraph pt-2">
          Golf Terrace is a residential development in Damac Hills, Dubai, which
          is a premium golf community that offers a luxurious living experience.
          The project comprises a range of elegant apartments, including 1, 2,
          and 3-bedroom units, and is designed to cater to the needs of
          discerning buyers and investors. The 2-bedroom apartments in Golf
          Terrace are spacious and offer stunning views of the golf course and
          surrounding greenery, with sizes ranging from approximately 1,086 to
          1,169 square feet. Read More
        </span>
      </div>
    </div>
  );
};

export default UpcomingEvent;
