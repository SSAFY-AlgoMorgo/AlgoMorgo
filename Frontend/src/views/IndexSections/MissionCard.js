
import React from "react";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

function MissionCard() {
    return (
      <>
        <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <img
                            alt="..."
                             src={require("assets/img/algo/math.jpg")}
                          />
                          <h5 className="text-primary text-uppercase mt-3">
                            10158. 개미
                          </h5>
                          <div>
                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="mt-2">
                              수학, 사칙연산, 애드 혹
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt--2"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                              <i className="ni ni-curved-next"></i>
                            </Button>
                            </Col>
                          </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <img
                            alt="..."
                             src={require("assets/img/algo/math.jpg")}
                          />
                          <h5 className="text-primary text-uppercase mt-3">
                            10158. 개미
                          </h5>
                          <div>
                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="mt-2">
                              수학, 사칙연산, 애드 혹
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt--2"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                              <i className="ni ni-curved-next"></i>
                            </Button>
                            </Col>
                          </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <img
                            alt="..."
                             src={require("assets/img/algo/math.jpg")}
                          />
                          <h5 className="text-primary text-uppercase mt-3">
                            10158. 개미
                          </h5>
                          <div>
                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="mt-2">
                              수학, 사칙연산, 애드 혹
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt--2"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                              <i className="ni ni-curved-next"></i>
                            </Button>
                            </Col>
                          </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
            
      </>
    );
  }

export default MissionCard;