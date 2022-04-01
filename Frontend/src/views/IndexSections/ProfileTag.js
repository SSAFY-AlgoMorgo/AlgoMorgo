
import React from "react";


// reactstrap components
import {
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

function ProfileTag() {
    return (
      <>
          <Container>
            <Card className="card-profile bg-secondary mt-0">
              <div>
                <p className="h7 mt-3 ml-4 font-weight-bold"><i class="ni ni-tag"></i> 태그 분포</p>
              </div>
              <Row className="py-3 align-items-center">
                <Col sm="5">
                  <img
                    className="ml-5"
                    alt="..."
                    src={require("assets/img/algo/tag.jpg")}
                  />
                </Col>
                <Col sm="7">
                <div className="ml-5">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>태그</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>문제</h7>
                    </Col>
                  </Row>
                </div>
                <hr width="90%" />

                <div className="ml-5">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>그래프 이론</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>12</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>그래프 탐색</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>11</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>브루트포스 알고리즘</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>9</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>구현</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>8</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>너비 우선 탐색</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>7</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>깊이 우선 탐색</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>7</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>시물레이션</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>6</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>그리디 알고리즘</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>4</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>백트래킹</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>3</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>수학</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>3</h7>
                    </Col>
                  </Row>
                </div>

                <div className="ml-5 mt-3">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>재귀</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>2</h7>
                    </Col>
                  </Row>
                </div>
                  
                <div className="mt-3">
                  <p className="h7 text-center font-weight-bold"><i class="ni ni-bold-down"></i> 더보기</p>
                </div>

                

                {/* <details className="my-4">
                  <summary>
                    <p className="h7 text-center font-weight-bold"><i class="ni ni-bold-down"></i> 더보기</p>
                  </summary>
                    
                  <div className="my-4">

                    <div className="ml-5 mt-3">
                      <Row>
                        <Col className="font-weight-bold ml-3">
                        <h7>백트래킹</h7>
                        </Col>
                        <Col className="font-weight-bold text-right mr-6">
                        <h7>3</h7>
                        </Col>
                      </Row>
                    </div>

                  </div>
                </details> */}

                



                </Col>
              </Row>
            
            <br />


            </Card>
          </Container>

      </>
    );
  }

export default ProfileTag;
