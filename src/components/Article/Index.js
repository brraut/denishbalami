import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

function ArticleIndex() {
  return (
    <>
      <Navbar />
      <div className="article">
        <Container>
          <Row>
            <Col>
              <div className="main-title">Articles</div>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={4} sm={6} xs={12}>
              <Link to="/article/new" className="article-wrapper">
                <div className="img-wrapper">
                  <img src="/images/banner.jpeg" alt="articles" />
                </div>
                <div className="article-title">When Sun goes Down</div>
              </Link>
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
              <Link to="/article/new" className="article-wrapper">
                <div className="img-wrapper">
                  <img src="/images/banner.jpeg" alt="articles" />
                </div>
                <div className="article-title">When Sun goes Down</div>
              </Link>
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
              <Link to="/article/new" className="article-wrapper">
                <div className="img-wrapper">
                  <img src="/images/banner.jpeg" alt="articles" />
                </div>
                <div className="article-title">When Sun goes Down</div>
              </Link>
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
              <Link to="/article/new" className="article-wrapper">
                <div className="img-wrapper">
                  <img src="/images/banner.jpeg" alt="articles" />
                </div>
                <div className="article-title">When Sun goes Down</div>
              </Link>
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
              <Link to="/article/new" className="article-wrapper">
                <div className="img-wrapper">
                  <img src="/images/banner.jpeg" alt="articles" />
                </div>
                <div className="article-title">When Sun goes Down</div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ArticleIndex;
