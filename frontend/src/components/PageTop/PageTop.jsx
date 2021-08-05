import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageTop = ({ pageTitle }) => {
  return (
    <Fragment>
      <Container fluid={true} className="topFixedPage p-0">
        <div className="topPageOverlay">
          <Container className="topContentPage">
            <Row>
              <Col className="text-center">
                <h1 className="topPageTitle">{pageTitle}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
};

export default PageTop;
