import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark py-4">
      <h2 className="mb-0 text-capitalize text-white my-5 text-center ">
        <span className="text-primary">connect</span> with us
      </h2>
      <Container>
        <Row className="text-white mx-auto py-5">
          <Col md={3} sm={6}>
            <h5 className="mb-4">Solutions</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  About Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5 className="mb-4">FAQs</h5>
            <ul className="list-unstyled">
            <li>
                <a href="/" className="text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Solutions
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5 className="mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:demo@demo.com" className="text-decoration-none">
                  demo@demo.com
                </a>
              </li>
              <li>
                <a href="tel:2424242424" className="text-decoration-none">
                  +91 2424242424
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5 className="mb-4">Follow us</h5>
            <ul className="list-inline">
              <li className="list-inline-item mr-4">
                <a href="/" className="text-decoration-none">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item mr-4">
                <a href="/" className="text-decoration-none">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item mr-4">
                <a href="/" className="text-decoration-none">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-sm-center border-top px-4">
        <p className="mb-0 mt-4 text-white px-2">
          <span >
            © 2020 React Web Boilerplate. All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
