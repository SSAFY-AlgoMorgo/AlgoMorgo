import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="daily-mission-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                    <center>
                      <p className="h3 text-white"><i class="ni ni-single-copy-04 mr-2"></i>데일리 미션</p>
                    </center>
                </div>
              </Container>
            </section>
            {/* 1st Hero Variation */}
          </div>
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
                          <h6 className="text-primary text-uppercase mt-3">
                            10158. 개미
                          </h6>
                        
                          <div>

                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="description mt-3">
                              수학, 사칙연산, 애드 혹
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt-4"
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
                          <h6 className="text-primary text-uppercase">
                            10158. 개미
                          </h6>
                          <p className="description mt-3">
                            수학, 사칙연산, 애드 혹
                          </p>
                          <div>
                            <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="ni ni-curved-next"></i>
                          </Button>
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
                          <h6 className="text-primary text-uppercase">
                            10158. 개미
                          </h6>
                          <p className="description mt-3">
                            수학, 사칙연산, 애드 혹
                          </p>
                          <div>
                            <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="ni ni-curved-next"></i>
                          </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>


          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-primary shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        미션 완료 확인버튼은 30분마다 활성화 됩니다.
                      </h3>
                      <p className="lead text-white mt-3">
                        최근 확인 시간 : 
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href=""
                        size="lg"
                      >
                        미션 완료 확인하기
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>


        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default Landing;
