import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="sectionTitle">MY VIDEOS</h1>
        <div className="sectionTitleBottom"></div>
        <Row>
          <Col md={6} className="videoText">
            <p className="text-justify sectionDescription">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              voluptatem, sit magnam dolorum officia accusantium hic vitae
              cumque labore pariatur itaque sed aperiam dignissimos atque,
              molestiae quos rerum quam beatae.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              repellat et, similique pariatur doloribus ducimus! Suscipit esse
              animi, ratione voluptas molestiae qui, ex vitae quo expedita ipsam
              quaerat ipsum? Maiores.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              quidem neque repellat tenetur nisi, voluptatum veniam at sed autem
              impedit eius distinctio illum earum totam, aliquid amet culpa
              saepe quae?
            </p>
          </Col>
          <Col md={6} className="videoCard">
            <FontAwesomeIcon
              onClick={handleShow}
              className="iconProject"
              icon={faPlay}
            />
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <BigPlayButton position="center" />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Video;
