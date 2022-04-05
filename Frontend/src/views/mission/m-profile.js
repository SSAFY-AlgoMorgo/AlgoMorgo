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
        <main className="mission-profile-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-5">
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
                      <p className="h3 text-white"><i class="ni ni-paper-diploma mr-2"></i>미션 프로필</p>
                    </center>
                </div>
              </Container>
            </section>

              <Container className="py-lg-md d-flex mt-5">
                <div className="col px-0">
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="text-uppercase font-weight-bold">
                        가입한 날
                      </h6>
                    </Col>
                    <Col sm="9">
                    <div>
                      <h6 className="text-right">
                      2021.03.17
                      </h6>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <hr width="70%" />
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="text-uppercase font-weight-bold">
                        가입한 날
                      </h6>
                    </Col>
                    <Col sm="9">
                    <div>
                      <h6 className="text-right">
                      2021.03.17
                      </h6>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <hr width="70%" />
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="text-uppercase font-weight-bold">
                        가입한 날
                      </h6>
                    </Col>
                    <Col sm="9">
                    <div>
                      <h6 className="text-right">
                      2021.03.17
                      </h6>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <hr width="70%" />
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="text-uppercase font-weight-bold">
                        가입한 날
                      </h6>
                    </Col>
                    <Col sm="9">
                    <div>
                      <h6 className="text-right">
                      2021.03.17
                      </h6>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <hr width="70%" />
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="text-uppercase font-weight-bold">
                      가입한 날
                      </h6>
                    </Col>
                    <Col sm="9">
                    <div>
                      <h6 className="text-right">
                      2021.03.17
                      </h6>
                    </div>
                    </Col>
                  </Row>
                </div>
            </Container>
            


            <section className="section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="3">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/algo/gold.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <h4 className="display-4 font-weight-bold text-white">
                        <center>미션 수행일</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>12일</center>
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
                  <Col md="3">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/algo/gold.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <h4 className="display-4 font-weight-bold text-white">
                        <center>미션 수행일</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>12일</center>
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
                  <Col md="3">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/algo/gold.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <h4 className="display-4 font-weight-bold text-white">
                        <center>미션 수행일</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>12일</center>
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
                  <Col md="3">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/algo/gold.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <h4 className="display-4 font-weight-bold text-white">
                        <center>미션 수행일</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>12일</center>
                      </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          </div>
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Landing;
