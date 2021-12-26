import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContactIndex() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <i className="fa fa-arrow-left"></i>
      </div>
      <Container>
        <div className="contact-title">Contact Me</div>
        <div className="contact-wrapper">
          <h6>Need a hand? Or a high Five</h6>
          <h6>Here's how to reach us.</h6>
          <ul>
            <li>
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="detail">9861905565</div>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <a href="" target="_blank" className="detail">
                denishbalami13@gmail.com
              </a>
            </li>
            <li>
              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>
              <a href="" target="_blank" className="detail">
                denishbalami13@gmail.com
              </a>
            </li>
            <li>
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <a href="" target="_blank" className="detail">
                denishbalami13@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default ContactIndex;
