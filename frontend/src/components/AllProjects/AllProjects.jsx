import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";

const AllProjects = () => {
  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="sectionTitle">Recent Projects</h1>
        <div className="sectionTitleBottom"></div>
        <Row>
          <Col lg={4} md={6}>
            <Card className="projectCard">
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Title className="serviceName">Project One</Card.Title>
                <Card.Text className="sectionDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style" to="/projectdetails">
                    Check it out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="projectCard">
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <Card.Title className="serviceName">Project Two</Card.Title>
                <Card.Text className="sectionDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style" to="/projectdetails">
                    Check it out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="projectCard">
              <Card.Img variant="top" src={project3} />
              <Card.Body>
                <Card.Title className="serviceName">Project Three</Card.Title>
                <Card.Text className="sectionDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style" to="/projectdetails">
                    Check it out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="projectCard">
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Title className="serviceName">Project One</Card.Title>
                <Card.Text className="sectionDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style" to="/projectdetails">
                    Check it out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="projectCard">
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <Card.Title className="serviceName">Project Two</Card.Title>
                <Card.Text className="sectionDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style" to="/projectdetails">
                    Check it out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="projectCard">
              <Card.Img variant="top" src={project3} />
              <Card.Body>
                <Card.Title className="serviceName">Project Three</Card.Title>
                <Card.Text className="sectionDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style" to="/projectdetails">
                    Check it out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AllProjects;
