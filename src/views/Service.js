import React from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";

function Service() {
  return (
    <React.Fragment>
      <Layout>
        <Container>
          <Row className="justify-content-md-center align-items-center my-5 text-center">
            <Col xs lg="6">
              <h1>Services</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export default Service;
