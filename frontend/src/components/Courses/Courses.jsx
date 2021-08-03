import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import courseImage1 from "../../assets/images/course1.jpg";
import courseImage2 from "../../assets/images/course2.jpg";
import courseImage3 from "../../assets/images/course3.jpg";
import courseImage4 from "../../assets/images/course4.jpg";

const Courses = () => {
  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="sectionTitle">MY COURSES</h1>
        <div className="sectionTitleBottom"></div>
        <Row>
          <Col lg={6}>
            <Row>
              <Col md={6} className="p-2">
                <img className="courseImg" src={courseImage1} alt="Course" />
              </Col>
              <Col md={6}>
                <h5 className="text-justify serviceName">Laravel 8</h5>
                <p className="text-justify sectionDescription">
                  Laravel 8 - Learn how to build an advanced e-commerce app from
                  scratch
                </p>
                <a className="courseViewMore float-left" href="">
                  View Details
                </a>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="p-2">
                <img className="courseImg" src={courseImage2} alt="Course" />
              </Col>
              <Col md={6}>
                <h5 className="text-justify serviceName">Laravel 8</h5>
                <p className="text-justify sectionDescription">
                  Laravel 8 - Learn how to build an advanced e-commerce app from
                  scratch
                </p>
                <a className="courseViewMore float-left" href="">
                  View Details
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="p-2">
            <Row>
              <Col md={6}>
                <img className="courseImg" src={courseImage3} alt="Course" />
              </Col>
              <Col md={6}>
                <h5 className="text-justify serviceName">Laravel 8</h5>
                <p className="text-justify sectionDescription">
                  Laravel 8 - Learn how to build an advanced e-commerce app from
                  scratch
                </p>
                <a className="courseViewMore float-left" href="">
                  View Details
                </a>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="p-2">
                <img className="courseImg" src={courseImage4} alt="Course" />
              </Col>
              <Col md={6}>
                <h5 className="text-justify serviceName">Laravel 8</h5>
                <p className="text-justify sectionDescription">
                  Laravel 8 - Learn how to build an advanced e-commerce app from
                  scratch
                </p>
                <a className="courseViewMore float-left" href="">
                  View Details
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Courses;
