import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <Container fluid className="footerSection">
        <Row>
          <Col lg={3} md={6} className="p-5 text-center">
            <h2 className="footerName text-center">Follow Me</h2>
            <div className="socialContainer">
              <a className="social facebook" href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a className="social youtube" href="">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a className="social twitter" href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>
          <Col lg={3} md={6} className="p-5 text-justify">
            <h2 className="footerName">Address</h2>
            <p className="footerDescription">
              <FontAwesomeIcon icon={faEnvelope} /> support@example.com
              <br /> <FontAwesomeIcon icon={faPhone} /> +69 43434-3434 <br />
              4740 Paradise Lane San Dimas CA California-91773 USA
            </p>
          </Col>
          <Col lg={3} md={6} className="p-5 text-justify">
            <h2 className="footerName">Information</h2>
            <a className="footerLink" href="">
              About Me
            </a>
            <br />
            <a className="footerLink" href="">
              Company Profile
            </a>
            <br />
            <a className="footerLink" href="">
              Contact Me
            </a>
            <br />
          </Col>
          <Col lg={3} md={6} className="p-5 text-justify">
            <h2 className="footerName">Policy</h2>
            <a className="footerLink" href="">
              Refund Policy
            </a>
            <br />
            <a className="footerLink" href="">
              Terms and Conditions
            </a>
            <br />
            <a className="footerLink" href="">
              Privacy Policy
            </a>
            <br />
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center copyrightSection">
        <a className="copyrightLink" href="">
          &copy; Copyright 2021 Easy Learning. All Rights Reserved.
        </a>
      </Container>
    </Fragment>
  );
};

export default Footer;
