import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../assets/images/face.png";
import { init } from "ityped";

const AboutMe = () => {
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["Web Developer", "UI/UX Designer"],
    });
  }, []);
  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="sectionTitle">ABOUT ME</h1>
        <div className="sectionTitleBottom"></div>
        <Row>
          <Col md={6}>
            <div className="aboutMeBg">
              <img className="aboutMeImg" src={face} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="aboutMeBody">
              <h2 className="aboutMeDetails">Hi there, I'm</h2>
              <h2 className="aboutMeTitle">Adrian Burns</h2>
              <h3 className="aboutMeDetails">
                I am <span id="myElement"></span>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AboutMe;
