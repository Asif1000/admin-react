import React, { useState } from "react";
import "./Dashboard.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/Icons/home-icon.svg";
import logoimg1 from "../../assets/Icons/video-icon.svg";
import mask from "../../assets/Icons/Mask.svg";
import Next from "../../assets/Icons/Next.svg";
import Search from "../../assets/Icons/Search.svg";
import mike from "../../assets/Icons/Mike.svg";
import ListingCards from "./ListingCards";

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
            {" "}
            <IoIosArrowForward className="arrow" />
          </Button>
        </div>
      </header>
      <Row
        id="listing-container"
        className="overflow-hidden flex-nowrap pt-md-4"
      >
        {listings?.map((listing, index) => (
          <Col key={index} className="px-2">
            <ListingCards {...listing} />
          </Col>
        ))}
      </Row>

      {/* //search section */}
      <section className="search-section d-flex align-items-center justify-content-center pt-md-4">
        <Row>
          <Col xs={12} md={3}>
            <div className="image-container">
              <img src={mask} alt="Images" className="mask-img" />
            </div>
          </Col>
          <Col
            xs={12}
            md={9}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="search-container d-flex align-items-center justify-content-end position-relative">
              <Form>
                <Form.Group controlId="searchInput">
                  <Form.Control
                    type="text"
                    placeholder="Hi! I am freedo!How may i help you ?"
                    className="custom-search-input"
                  />
                </Form.Group>
              </Form>
              <div className="search-img position-absolute start-0 ms-4">
                <img src={Search} alt="search-img" className="search-img" />
              </div>
              <div className="position-absolute end-0 me-5">
                <img src={mike} alt="mike-img" className="mike-img" />
              </div>
              <div className="position-absolute end-0 me-3 opacity-md-2 p-md-3 rounded-4 next-img-div">
                <img src={Next} alt="next-img" className="next-img" />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Dashboard;
