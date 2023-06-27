import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";

function CustomFooter() {
  return (
    <Container fluid className="footer p-5">
      <Row>
        <Col md={4}>
          <div className="container">
            <h3>About Us</h3>
            <p
              style={{
                fontSize: "12px",
              }}
              className="w-75"
            >
              INNOVATIVE CENTRE is authorized Cambridge Exam Centre (UZ050) and
              it was established to meet the need for quality training and
              professional level expertise for most students who plan to study
              abroad and pass globally recognized English and Business exams and
              qualifications. We pride ourselves on the quality of courses and
              services we offer and the flexibility of our training programmes
              that were recognized by UNESCO.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:examdepartment@innovativecentre.org">
              examdepartment@innovativecentre.org
            </a>
          </p>
          <p>
            Phone: <a href="tel:+998995970106">+998995970106</a>
          </p>
          <p>
            Phone: <a href="tel:+998557010106">+998557010106</a>
          </p>
        </Col>
        <Col md={4}>
          <h3>Follow Us</h3>
          <ul className="list-unstyled">
            <li>
              <a
                style={{
                  color: "#0088cc",
                }}
                href="#"
              >
                <BsTelegram /> Telegram
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "#4267B2",
                }}
                href="#"
              >
                <BsFacebook /> Facebook
              </a>
            </li>
            <li>
              {/* #FF0000
               */}
              <a
                style={{
                  color: "#FF0000",
                }}
                href="#"
              >
                <BsYoutube /> YouTube
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "#8a3ab9",
                }}
                href="#"
              >
                <BsInstagram /> Instagram
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className="text-center">
            &copy; 2023 Innovative Centre <br /> Enabling world-class education
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomFooter;
