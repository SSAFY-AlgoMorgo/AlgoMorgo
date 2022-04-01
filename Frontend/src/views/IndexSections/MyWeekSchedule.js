import React, { useState } from 'react';

import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

function MyMonthMission() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Row className="py-3 align-items-top">
        <Col sm="3">
          <h4 className='font-weight-bold text-primary'>2022년 3월 28일 (목)</h4>
        </Col>
        <Col sm="9">
          <h6 className='font-weight-bold'>오늘의 미션</h6>
          <Card className="shadow my-4" style={{ width: "100%" }}>
            <CardBody className="px-5" >
              <h6 className='text-danger'>최단 거리 계산</h6>
              <Row className="py-3 align-items-center">
                <Col sm="3">
                  <h6 className='font-weight-bold'>13460</h6>
                </Col>
                <Col sm="3">
                  <h6 className='font-weight-bold'>구슬 탈출 2</h6>
                </Col>
                <Col sm="3">
                  <h6 className='font-weight-bold'>제출: 59142번</h6>
                </Col>
                <Col sm="3">
                  <h6 className='font-weight-bold'>정답률: 26.584%</h6>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="shadow my-4" style={{ width: "100%" }}>
            <CardBody className="px-5" >
              <h6 className='text-danger'>dfs</h6>
              <Row className="py-3 align-items-center">
                <Col sm="3">
                  <h6 className='font-weight-bold'>14500</h6>
                </Col>
                <Col sm="3">
                  <h6 className='font-weight-bold'>테트로미노</h6>
                </Col>
                <Col sm="3">
                  <h6 className='font-weight-bold'>제출: 52266번</h6>
                </Col>
                <Col sm="3">
                  <h6 className='font-weight-bold'>정답률: 35.480%</h6>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyMonthMission;
