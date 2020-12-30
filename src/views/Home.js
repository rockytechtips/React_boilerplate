import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Carousel fade controls={false}>
          <Carousel.Item style={{'height':"90vh"}}>
            <img
              className="d-block w-100"
              src="img/slide1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>HOMEPAGE</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height':"90vh"}}>
            <img
              className="d-block w-100"
              src="img/slide2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height':"90vh"}}>
            <img
              className="d-block w-100"
              src="img/slide3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <Row className="my-5 text-center">
            <Col className="my-3" xs lg="4">
              <Card style={{ width: "18rem" }} className="mx-auto">
                <Card.Img variant="top" src="img/slide1.jpg" />
                <Card.Body>
                  <Card.Title>About Us</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/about">
                    <Button variant="primary">Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="my-3" xs lg="4">
              <Card style={{ width: "18rem" }} className="mx-auto">
                <Card.Img variant="top" src="img/slide2.jpg" />
                <Card.Body>
                  <Card.Title>Services</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/services">
                    <Button variant="primary">Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="my-3" xs lg="4">
              <Card style={{ width: "18rem" }} className="mx-auto">
                <Card.Img variant="top" src="img/slide3.jpg" />
                <Card.Body>
                  <Card.Title>Contact Us</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/contact">
                    <Button variant="primary">Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export default Home;
