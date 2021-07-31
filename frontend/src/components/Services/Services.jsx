import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designation from "../../assets/images/design.png";
import ecommerceIcon from "../../assets/images/ecommerce.png";
import webIcon from "../../assets/images/web.png";

const Services = () => {
  return (
    <Fragment>
      <Container>
        <h1 className="sectionTitle">MY SERVICES</h1>
        <div className="sectionTitleBottom"></div>
        <Row>
          <Col lg={4} md={6}>
            <div className="serviceCard">
              <img
                className="serviceIcons"
                src={ecommerceIcon}
                alt="Service Icon"
              />
              <h2 className="serviceName">Ecommerce</h2>
              <p className="sectionDescription">
                I design and develop ecommerce and online store websites.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="serviceCard">
              <img
                className="serviceIcons"
                src={designation}
                alt="Service Icon"
              />
              <h2 className="serviceName">Web Design</h2>
              <p className="sectionDescription">
                Modern web designs and attractive effects which are eye
                catching.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="serviceCard">
              <img className="serviceIcons" src={webIcon} alt="Service Icon" />
              <h2 className="serviceName">Web Development</h2>
              <p className="sectionDescription">
                Clean and fresh bug free code to make your website perfectly
                dynamic.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Services;
