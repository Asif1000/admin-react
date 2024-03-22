import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/Icons/home-icon.svg";
import car from "../../assets/Icons/Car.svg";
import Jobs from "../../assets/Icons/Jobs.svg";
import Directory from "../../assets/Icons/Directory.svg";
import Venus from "../../assets/Icons/Venus.svg";
import Hotel from "../../assets/Icons/Hotel.svg";
import logoimg1 from "../../assets/Icons/video-icon.svg";
import mask from "../../assets/Icons/Mask.svg";
import Next from "../../assets/Icons/Next.svg";
import Search from "../../assets/Icons/Search.svg";
import mike from "../../assets/Icons/Mike.svg";
import ListingCards from "./ListingCards";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import ColumnBarChart1 from "./ColumnBarChart1";
import "./Dashboard.css";
import ColumnBarChart2 from "./ColumnBarChart2";
import CountCards from "./CountCards";

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const listings = [
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: car, title: "Motors", videoImage: logoimg1 },
    { image: Directory, title: "Directory", videoImage: logoimg1 },
    { image: Jobs, title: "Jobs", videoImage: logoimg1 },
    { image: Venus, title: "Venues", videoImage: logoimg1 },
    { image: Hotel, title: "Hotel", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
  ];

  const handleScroll = (scrollOffset) => {
    setScrollPosition(scrollPosition + scrollOffset);
    const container = document.getElementById("listing-container");
    container.scrollLeft += scrollOffset;
  };

  return (
    <Container className="dashboard p-md-4 p-sm-2">
      <header className="d-flex justify-content-between">
        <h5 className="mb-2">Select your Listing</h5>
        <div className="scroll-arrows">
          <Button
            variant="transparent"
            className="scroll-button"
            onClick={() => handleScroll(-100)}
          >
            <IoIosArrowBack className="arrow" />
          </Button>
          <Button
            variant="transparent"
            className="scroll-button"
            onClick={() => handleScroll(100)}
          >
            <IoIosArrowForward className="arrow" />
          </Button>
        </div>
      </header>
      <Row
        id="listing-container"
        className="flex-nowrap pt-md-3 overflow-x-hidden"
      >
        {listings?.map((listing, index) => (
          <Col key={index} className="px-2">
            <ListingCards {...listing} />
          </Col>
        ))}
      </Row>

      {/* //search section */}
      <section className="search-section d-flex align-items-center justify-content-center mb-4 mt-3">
        <Row>
          <Col xs={12} sm={12} md={2}>
            <div className="image-container d-flex align-items-center justify-content-center ">
              <img src={mask} alt="Images" className="mask-img" />
            </div>
          </Col>
          <Col
            xs={12}
            md={10}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="search-container d-flex align-items-end justify-content-end position-relative">
              <Form>
                <Form.Group controlId="searchInput">
                  <Form.Control
                    type="text"
                    placeholder="Hi! I am freedo! How may i help you ?"
                    className="custom-search-input"
                  />
                </Form.Group>
              </Form>
              <div className="search-img-div ">
                <img src={Search} alt="search-img" className="search-img" />
              </div>
              <div className="mike-img-div ">
                <img src={mike} alt="mike-img" className="mike-img" />
              </div>
              <div className="next-icon  opacity-md-2 p-md-3  next-img-div">
                <img src={Next} alt="next-img" className="next-img" />
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* line chart section */}
      <section className="mb-4">
        <Row>
          <Col md={6} xs={12} sm={12}>
            <div className="chart-card rounded-1 p-md-2">
              <h4 className="sub-heading">Visitors stats</h4>
              <LineChart
                chartId={"lineChart"}
                chartData={[
                  {
                    category: "Jan",
                    value1: 10000,
                    value2: 50000,
                  },
                  {
                    category: "Feb",
                    value1: 10000,
                    value2: 20000,
                  },
                  {
                    category: "Mar",
                    value1: 100000,
                    value2: 70000,
                  },
                  {
                    category: "April",
                    value1: 100000,
                    value2: 90000,
                  },
                  {
                    category: "Jun",
                    value1: 100000,
                    value2: 80000,
                  },
                  {
                    category: "Jul",
                    value1: 100000,
                    value2: 85000,
                  },
                  {
                    category: "Aug",
                    value1: 10000,
                    value2: 70000,
                  },
                  {
                    category: "Sep",
                    value1: 50000,
                    value2: 70000,
                  },
                  {
                    category: "Oct",
                    value1: 10000,
                    value2: 70000,
                  },
                  {
                    category: "Nov",
                    value1: 20000,
                    value2: 30000,
                  },
                  {
                    category: "Dec",
                    value1: 100000,
                    value2: 70000,
                  },
                ]}
              />
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className="chart-card rounded-1 p-md-2">
              <h4 className="sub-heading">Country States</h4>
              <DonutChart chartId={"donutChart"} />
            </div>
          </Col>
        </Row>
      </section>

      {/* traffic track section */}
      <section className="mb-4">
        <Row>
          <Col md={6} sm={12} xs={12}>
            <div className="traffic-chart-card rounded-1 p-md-2">
              <h4 className="sub-heading">Traffic By Device</h4>
              <ColumnBarChart2 />
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            xs={12}
            className="d-flex  justify-content-center align-items-center"
          >
            <div className="d-flex flex-wrap justify-content-center gap-md-5 p-0">
              <CountCards
                title="Company Profit"
                value="5.6k"
                subValue="+70.67"
              />
              <CountCards
                title="Today Inquiries"
                value="5.6k"
                subValue="+70.67"
              />
              <CountCards title="Now Visitors" value="5.6k" subValue="+70.67" />
              <CountCards
                title="Repeat Visitors"
                value="5.6k"
                subValue="+70.67"
              />
            </div>
          </Col>
        </Row>
      </section>
      {/* recent enqueries  section */}
      <section className="mb-3 p-md-1">
        <Row>
          <div className="chart-card bar-cards rounded-1 p-md-2">
            <h4 className="sub-heading">Recent Enquiries</h4>
            <ColumnBarChart1 chartId="admissionChart" />
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Dashboard;
