import React from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import pageone from "../../assets/images/page1.png";
import pagetwo from "../../assets/images/page2.png";
import pagethree from "../../assets/images/page3.png";
import imgone from "../../assets/images/19.png";
import imgtwo from "../../assets/images/20.png";
import imgthree from "../../assets/images/21.png";

const Welcome = () => {
  return (
    <Fragment>
      <div className="intro-area--top">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="section-title text-center">
                <div className="intro-area-inner">
                  <h6 className="sub-title double-line">WELCOME</h6>
                  <h2 className="maintitle">
                    An examplary
                    <br />
                    learning community
                  </h2>

                  <Container className="text-center mt-5">
                    <Row>
                      <Col lg={4} md={6}>
                        <img src={pageone} />
                        <h1 className="serviceName">Easy as it gets</h1>
                        <p className="sectionDescription">
                          Lorem, ipsum dolor.
                        </p>
                      </Col>
                      <Col lg={4} md={6}>
                        <img src={pagetwo} />
                        <h1 className="serviceName">Learn the way you want</h1>
                        <p className="sectionDescription">
                          Lorem, ipsum dolor.
                        </p>
                      </Col>
                      <Col lg={4} md={6}>
                        <img src={pagethree} />
                        <h1 className="serviceName">Think unique</h1>
                        <p className="sectionDescription">
                          Lorem, ipsum dolor.
                        </p>
                      </Col>
                    </Row>
                    <Row className="intro-footer bg-base text-center mt-5">
                      <Col lg={4} md={6}>
                        <Row>
                          <Col md={6}>
                            <img className="sideImg" src={imgone} />
                          </Col>
                          <Col md={6}>
                            <h5 className="text-justify homeIntro">
                              Development
                            </h5>
                            <p className="text-justify sectionDescription">
                              Lorem, ipsum dolor.
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={6}>
                        <Row>
                          <Col md={6}>
                            <img className="sideImg" src={imgtwo} />
                          </Col>
                          <Col md={6}>
                            <h5 className="text-justify homeIntro">
                              Web Design
                            </h5>
                            <p className="text-justify sectionDescription">
                              Lorem, ipsum dolor.
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={6}>
                        <Row>
                          <Col md={6}>
                            <img className="sideImg" src={imgthree} />
                          </Col>
                          <Col md={6}>
                            <h5 className="text-justify homeIntro">
                              Ecommerce
                            </h5>
                            <p className="text-justify sectionDescription">
                              Lorem, ipsum dolor.
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Welcome;
