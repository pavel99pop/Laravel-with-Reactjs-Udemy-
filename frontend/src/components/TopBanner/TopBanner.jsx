import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../assets/styles/styles.css";

const TopBanner = () => {
  return (
    <Fragment>
      <Container fluid={true} className="topFixedBanner p-0">
        <div className="topBannerOverlay">
          <Container className="topContent">
            <Row>
              <Col className="text-center">
                <h1 className="topTitle">EASY LEARNING</h1>
                <h4 className="topSubTitle">Learn Professionally</h4>
                <Button variant="primary">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
};

export default TopBanner;
