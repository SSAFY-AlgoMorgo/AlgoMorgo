/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-0 shape-default">
              
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-left" lg="7">
                    <h2 className="text-white font-weight-bold py-3">
                      맞춤 알고리즘 문제 추천이 필요하다면?
                    </h2>

                    <h5 className="text-white font-weight-bold py-1">
                      내게 부족한 알고리즘 역량은 무엇일까?
                    </h5>
                    <h5 className="text-white font-weight-bold py-1">
                      실력에 딱 맞는 문제 추천이 필요하다면?
                    </h5>
                    <button type="button" class="btn btn-primary">
                      Button
                    </button>
                  </Col>
                  <Col className="text-left" lg="4">
                    <h2 className="text-white">
                      맞춤 알고리즘 문제 추천이 필요하다면?
                    </h2>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
