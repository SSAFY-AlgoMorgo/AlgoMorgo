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
import { Link } from "react-router-dom";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class ProfileBody extends React.Component {
  render() {
    return (
      <>
        
        <section className="section">
            <Container>
            <Card className="card-profile bg-secondary mt-0">
              <div>
                <p className="h7 mt-3 ml-4 font-weight-bold"><i class="ni ni-single-02"></i> 회원 정보</p>
              </div>

              <Row className="py-3 align-items-center">
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
                </Row>

              <Row className="py-3 align-items-center">
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
              </Row>

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
}

export default ProfileBody;
