
import React from "react";


// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

function MissionInfo() {
    return (
      <>
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
            
      </>
    );
  }

export default MissionInfo;