import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/Icons/home-icon.svg";
import logoimg1 from "../../assets/Icons/video-icon.svg";
import mask from "../../assets/Icons/Mask.svg";
import Next from "../../assets/Icons/Next.svg";
import Search from "../../assets/Icons/Search.svg";
import mike from "../../assets/Icons/Mike.svg";
import ListingCards from "./ListingCards";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import StackedColumnChart from "./Bar";
import "./Dashboard.css";
import ColumnBarChart2 from "./ColumnBarChart2";

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const listings = [
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
    { image: img1, title: "Properties", videoImage: logoimg1 },
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
        <h5>Select your Listing</h5>
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
      <section className="search-section d-flex align-items-center justify-content-center pt-md-3">
        <Row>
          <Col xs={12} md={2}>
            <div className="image-container">
              <img src={mask} alt="Images" className="mask-img" />
            </div>
          </Col>
          <Col
            xs={12}
            md={10}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="search-container d-flex align-items-end justify-content-end position-relative">
              <Form>
                <Form.Group controlId="searchInput">
                  <Form.Control
                    type="text"
                    placeholder="Hi! I am freedo!How may i help you ?"
                    className="custom-search-input"
                  />
                </Form.Group>
              </Form>
              <div className="search-img position-absolute start-0 ms-5">
                <img src={Search} alt="search-img" className="search-img" />
              </div>
              <div className="position-absolute end-0 me-5">
                <img src={mike} alt="mike-img" className="mike-img" />
              </div>
              <div className=" next-icon position-absolute end-0 me-3 opacity-md-2 p-md-3  next-img-div">
                <img src={Next} alt="next-img" className="next-img" />
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* 3rd section */}
      <section className="mt-md-3">
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
          <Col md={6} sm={12}>
            <div className="chart-card rounded-1 p-md-2">
              <h4 className="sub-heading">Visitors stats</h4>
              <DonutChart chartId={"donutChart"} />
            </div>
          </Col>
        </Row>
      </section>

      {/* 4th section */}
      <section className="mt-md-3">
        <Row>
          <Col md={6} sm={12} xs={12}>
            <div className="chart-card rounded-1 p-md-2">
              <h4 className="sub-heading">Traffic By Device</h4>
              <ColumnBarChart2 />
            </div>
          </Col>
          <Col md={6} sm={12} xs={12} className="p-md-2">
            <div className="d-flex flex-wrap justify-content-center gap-5">
              <Card className="grid-card d-flex flex-column align-items-center justify-content-center">
                <Card.Body className=" d-flex flex-column align-items-center justify-content-center g-texts">
                  <h5 className="text-center g-texts fw-bold">
                    Company Profit
                  </h5>
                  <h3 className="text-center fw-bold g-texts">
                    5.6k <span className="g-span ml-md-2">+70.67</span>
                  </h3>
                </Card.Body>
              </Card>
              <Card className="grid-card d-flex flex-column align-items-center justify-content-center">
                <Card.Body className=" d-flex flex-column align-items-center justify-content-center g-texts">
                  <h5 className="text-center g-texts fw-bold">
                    Company Profit
                  </h5>
                  <h3 className="text-center fw-bold g-texts">
                    5.6k <span className="g-span ml-md-2">+70.67</span>
                  </h3>
                </Card.Body>
              </Card>
              <Card className="grid-card d-flex flex-column align-items-center justify-content-center">
                <Card.Body className=" d-flex flex-column align-items-center justify-content-center g-texts">
                  <h5 className="text-center g-texts fw-bold">
                    Company Profit
                  </h5>
                  <h3 className="text-center fw-bold g-texts">
                    5.6k <span className="g-span ml-md-2">+70.67</span>
                  </h3>
                </Card.Body>
              </Card>
              <Card className="grid-card d-flex flex-column align-items-center justify-content-center">
                <Card.Body className=" d-flex flex-column align-items-center justify-content-center g-texts">
                  <h5 className="text-center g-texts fw-bold">
                    Company Profit
                  </h5>
                  <h3 className="text-center fw-bold g-texts">
                    5.6k <span className="g-span ml-md-2">+70.67</span>
                  </h3>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
      {/* 5th section */}
      <section className="mt-md-3">
        <Row>
          <div className="chart-card bar-cards rounded-1 p-md-2">
            <h4 className="sub-heading">Traffic By Device</h4>
            <StackedColumnChart chartId="admissionChart" />
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Dashboard;
