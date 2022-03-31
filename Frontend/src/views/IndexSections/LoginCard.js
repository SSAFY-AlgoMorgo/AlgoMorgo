
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
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

class LoginCard extends React.Component {
  render() {
    return (
      <>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <h3>로그인</h3>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="아이디" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="비밀번호"
                              type="password"
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>아이디 저장</span>
                          </label>
                        </div>
                        <br />
                        <div>
                          <Button
                           block
                           className="btn-round"
                           color="default"
                           size="lg"
                           type="button"
                          >
                          로그인
                          </Button>
                        </div>
                        <div className="mt-3">
                          <Button
                           block
                           className="btn-round"
                           color="primary"
                           size="lg"
                           type="button"
                           to="/register-page" 
                           tag={Link}
                          >
                          회원가입
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            
      </>
    );
  }
}

export default LoginCard;