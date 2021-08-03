import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientReviews = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    speed: 5000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Container fluid className="sliderBack">
        <h1 className="reviewTitle p-3">TESTIMONIAL</h1>
        <div className="reviewTitleBottom"></div>
        <Slider {...settings}>
          <div>
            <Row className="text-center justify-content-center">
              <Col md={6}>
                <img className="circleImg" src={client1} alt="" />
                <h2 className="clientName">Thomas Doyle</h2>
                <p className="clientComment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  numquam repellat officia ratione cumque, praesentium amet
                  commodi nostrum harum molestiae.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="text-center justify-content-center">
              <Col md={6}>
                <img className="circleImg" src={client2} alt="" />
                <h2 className="clientName">Alexis Stone</h2>
                <p className="clientComment">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem vel commodi repellat quibusdam cum eum? Quaerat
                  accusantium maxime perferendis id.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="text-center justify-content-center">
              <Col md={6}>
                <img className="circleImg" src={client3} alt="" />
                <h2 className="clientName">Lauren Ferguson</h2>
                <p className="clientComment">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                  accusamus libero voluptatem accusantium sapiente
                  exercitationem incidunt iure velit harum quas?
                </p>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </Fragment>
  );
};

export default ClientReviews;
