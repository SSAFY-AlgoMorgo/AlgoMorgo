
import React from "react";


// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

function ProfileBody() {
    return (
      <>
        
        <section className="section">
            <Container>
            <Card className="card-profile bg-secondary mt-0">
              <div>
                <p className="h7 mt-3 ml-4 font-weight-bold"><i class="ni ni-single-02"></i> 회원 정보</p>
              </div>

              {/* <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <Button className="ml-6 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>아이디</h7>
                    </Button>
                </Col>
                  <Col sm="8">
                    <Button
                      block
                      color="neutral"
                      disabled
                      type="button">
                    <h7>ssafykim</h7>   
                  </Button>
                </Col>
                </Row> */}

              {/* <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>비밀번호</h7>
                    </Button>
                </Col>
                <Col sm="8">
                <Button
                      block
                      color="neutral"
                      disabled
                      type="button">
                    <h7>************</h7>   
                  </Button>
                </Col>
              </Row> */}

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>닉네임</h7>
                    </Button>
                </Col>
                <Col sm="8">
                <Button
                      block
                      color="neutral"
                      disabled
                      type="button">
                    <h7>김싸피</h7>   
                  </Button>
                </Col>
              </Row>

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>백준 아이디</h7>
                    </Button>
                </Col>
                <Col sm="8">
                <Button
                      block
                      color="neutral"
                      disabled
                      type="button">
                    <h7>ssafykim</h7>   
                  </Button>
                </Col>
              </Row>

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>선호언어</h7>
                    </Button>
                </Col>
                <Col sm="8">
                <Button
                      block
                      color="neutral"
                      disabled
                      type="button">
                    <h7>&nbsp;</h7>   
                  </Button>
                </Col>
              </Row>
              <br />
              </Card>
            </Container>
          </section>

      </>
    );
  }

export default ProfileBody;
