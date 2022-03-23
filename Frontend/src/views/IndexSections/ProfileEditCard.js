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
import { Button, Container, Row, Col, Card } from "reactstrap";

class ProfileEditCard extends React.Component {
  render() {
    return (
      <>
        <Container>
              <Card className="bg-default border-0 mt-5">
                <div className="p-4">
                  <Row className="align-items-center">
                    <Col className="ml-lg-auto" lg="1">
                      <a
                        href="#"
                      >
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                        style={{ width: "75px" }}
                                  />
                      </a>
                    </Col>
                    <Col lg="10">
                      <h3 className="text-white">
                        김싸피님의 프로필입니다.
                      </h3>  
                    </Col>  
                    <Col className="ml-lg-auto" lg="1">
                      
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>

            
      </>
    );
  }
}

export default ProfileEditCard;
