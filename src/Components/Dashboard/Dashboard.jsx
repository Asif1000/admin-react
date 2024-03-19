import React from "react";
import "./Dashboard.css";
import { Container } from "react-bootstrap";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div>
        <header className="d-flex justify-content-between">
          <h3>Select your Listing</h3>
          <IoIosArrowDroprightCircle />
        </header>
      </div>
    </div>
  );
};

export default Dashboard;
