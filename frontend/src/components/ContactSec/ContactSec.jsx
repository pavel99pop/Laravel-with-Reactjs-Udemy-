import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactSec = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h1 className="serviceName">Leave a message</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h1 className="serviceName">Get in touch</h1>
            <p className="sectionDescription">
              <FontAwesomeIcon icon={faEnvelope} /> support@example.com
              <br /> <FontAwesomeIcon icon={faPhone} /> +69 43434-3434 <br />
              4740 Paradise Lane San Dimas CA California-91773 USA
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ContactSec;
