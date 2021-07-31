import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const Analysis = () => {
  const [chartData, setChartData] = useState([
    { Technology: "PHP", Projects: 100 },
    { Technology: "MySqli", Projects: 90 },
    { Technology: "Laravel", Projects: 95 },
    { Technology: "ReactJS", Projects: 85 },
    { Technology: "OpenCart", Projects: 80 },
    { Technology: "VueJS", Projects: 70 },
    { Technology: "Django", Projects: 60 },
    { Technology: "Vanilla JS", Projects: 100 },
  ]);

  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="sectionTitle">TECHNOLOGY USED</h1>
        <div className="sectionTitleBottom"></div>
        <Row>
          <Col lg={6}>
            <ResponsiveContainer>
              <BarChart width={100} height={300} data={chartData}>
                <XAxis dataKey="Technology" />
                <Tooltip />
                <Bar dataKey="Projects" fill="#051b35" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6}>
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
        </Row>
      </Container>
    </Fragment>
  );
};

export default Analysis;
