import React from "react";
import Layout from "../components/Layout";
import { Col, Container, Row} from "react-bootstrap";

function Contact() {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center align-items-center my-5 text-center">
          <Col xs lg="6">
            <h1>Contact Us</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Contact;
