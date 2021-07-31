import {
  faCheckSquare,
  faGlobe,
  faLaptop,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Summary = () => {
  return (
    <Fragment>
      <Container fluid={true} className="summaryFixedBanner p-0">
        <div className="summaryBannerOverlay">
          <Container className="text-center">
            <Row>
              <Col lg={8} md={6}>
                <Row className="countSection">
                  <Col>
                    <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                    <h1 className="countNumber">
                      <CountUp start={0} end={35000} duration={2.75}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Students Worldwide</h4>
                    <hr className="bg-white w-25 m-auto" />
                  </Col>
                  <Col>
                    <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                    <h1 className="countNumber">
                      <CountUp start={0} end={22} duration={2.75}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Courses Published</h4>
                    <hr className="bg-white w-25 m-auto" />
                  </Col>
                  <Col>
                    <FontAwesomeIcon className="iconProject" icon={faStar} />
                    <h1 className="countNumber">
                      <CountUp start={0} end={3000} duration={2.75}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Positive Feedbacks</h4>
                    <hr className="bg-white w-25 m-auto" />
                  </Col>
                </Row>
              </Col>

              <Col lg={4} md={6}>
                <Card className="workCard">
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      What I Have Achieved
                    </Card.Title>
                    <Card.Text>
                      <p className="cardSubTitle">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckSquare}
                        />{" "}
                        Requirement Gathering
                      </p>
                      <p className="cardSubTitle">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckSquare}
                        />{" "}
                        System Analysis
                      </p>
                      <p className="cardSubTitle">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckSquare}
                        />{" "}
                        Code Testing
                      </p>
                      <p className="cardSubTitle">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckSquare}
                        />{" "}
                        Implementation
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
};

export default Summary;
