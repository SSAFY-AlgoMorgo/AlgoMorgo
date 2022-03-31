
import React from "react";


// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

class MissionComplete extends React.Component {
  render() {
    return (
      <>
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
            
      </>
    );
  }
}

export default MissionComplete;