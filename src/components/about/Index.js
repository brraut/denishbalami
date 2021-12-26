import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AboutIndex() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <i className="fa fa-arrow-left"></i>
      </div>
      <Container>
        <div className="about-title">About Me</div>
        <div className="about-wrapper">
          <Row>
            <Col md={8} order>
              <div className="about-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  harum dolore ducimus minus iste officiis laborum eum beatae
                  est quo error, iusto suscipit optio neque quidem ut pariatur
                  hic delectus.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  harum dolore ducimus minus iste officiis laborum eum beatae
                  est quo error, iusto suscipit optio neque quidem ut pariatur
                  hic delectus. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Sed harum dolore ducimus minus iste officiis
                  laborum eum beatae est quo error, iusto suscipit optio neque
                  quidem ut pariatur hic delectus.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profile-wrapper">
                <img src="/images/profile.jpeg" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AboutIndex;
