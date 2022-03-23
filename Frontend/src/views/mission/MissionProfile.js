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

class MissionProfile extends React.Component {
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
        <main className="missionprofile-page" ref="main">
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
                  <Col sm="10">
                    <h4>가입한 날</h4>
                  </Col>
                  <Col sm="2">
                  <div>
                    <h4 className="text-center">
                    2021.03.17
                    </h4>
                  </div>
                  </Col>
                </Row>
              </div>
            </Container>
            
            <hr width="60%" />

            <Container className="py-lg-md d-flex mt-5">
              <div className="col px-0">
                <Row className="py-3 align-items-center">
                  <Col sm="10">
                    <h4>총 미션 수행일</h4>
                  </Col>
                  <Col sm="2">
                  <div>
                    <h4 className="text-center">
                    59
                    </h4>
                  </div>
                  </Col>
                </Row>
              </div>
            </Container>            
              
            
            <hr width="60%" />
            
            <Container className="py-lg-md d-flex mt-5">
              <div className="col px-0">
                <Row className="py-3 align-items-center">
                  <Col sm="10">
                    <h4>연속 미션 수행일</h4>
                  </Col>
                  <Col sm="2">
                  <div>
                    <h4 className="text-center">
                    17
                    </h4>
                  </div>
                  </Col>
                </Row>
              </div>
            </Container>

            <hr width="60%" />

            <Container className="py-lg-md d-flex mt-5">
              <div className="col px-0">
                <Row className="py-3 align-items-center">
                  <Col sm="10">
                    <h4>완료한 데일리 미션 수</h4>
                  </Col>
                  <Col sm="2">
                  <div>
                    <h4 className="text-center">
                    25
                    </h4>
                  </div>
                  </Col>
                </Row>
              </div>
            </Container>

            <hr width="60%" />

            <Container className="py-lg-md d-flex mt-5">
              <div className="col px-0">
                <Row className="py-3 align-items-center">
                  <Col sm="10">
                    <h4>완료한 시크릿 미션 수</h4>
                  </Col>
                  <Col sm="2">
                  <div>
                    <h4 className="text-center">
                    3
                    </h4>
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
                      <h4 className="display-6 font-weight-bold text-white">
                        <center>총<br /> 미션 수행일</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>59일</center>
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
                      <h4 className="display-6 font-weight-bold text-white">
                        <center>연속<br /> 미션 수행일</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>17일</center>
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
                      <h4 className="display-6 font-weight-bold text-white">
                        <center>완료한 <br />데일리 미션</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>25개</center>
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
                      <h4 className="display-6 font-weight-bold text-white">
                        <center>완료한<br /> 시크릿 미션</center>
                      </h4>
                      <p className="lead text-italic text-white">
                      <center>3개</center>
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

export default MissionProfile;
