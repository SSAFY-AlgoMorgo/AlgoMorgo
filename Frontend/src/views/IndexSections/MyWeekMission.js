import React, { useState } from 'react';
import Badge from 'reactstrap/lib/Badge';
import {
  Card,
  CardBody,
  Row,
  Col,
  Progress,
} from "reactstrap";

function MyWeekMission() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card className="shadow my-5" style={{ width: "100%" }}>
        <CardBody className="px-5" >
          {/* 미션 그래프 */}
          <h4 className="h4 font-weight-bold">주간 미션 현황(3월 둘째주)</h4>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <h6>참여율</h6>
              </div>
              <div className="progress-percentage">
                <span>100%</span>
              </div>
            </div>
            <Progress max="100" value="100" color="default" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <h6>정답률</h6>
              </div>
              <div className="progress-percentage">
                <span>100%</span>
              </div>
            </div>
            <Progress max="100" value="100" />
          </div>
          
          {/* 미션 도표 */}
          <Row className="py-3 align-items-center">
            <Col sm="6">
              <h6 className='font-weight-bold'>참여일 수: 5일</h6>
              <h6 className='mt-3 font-weight-bold'>오늘의 미션</h6>
              <table className='table-bordered' style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>문제</th>
                    <th>문제 제목</th>
                    <th>제출</th>
                    <th>정답 비율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td>59142</td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td>59142</td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td>59142</td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td>59142</td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td>59142</td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td>59142</td>
                    <td>26.584%</td>
                  </tr>
                </tbody>
                </table>
            </Col>
            <Col sm="6">
            <h6 className='font-weight-bold'>정답 비율: 100%</h6>
              <h6 className='mt-3 font-weight-bold'>해결한 미션</h6>
              <table className='table-bordered' style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>문제</th>
                    <th>문제 제목</th>
                    <th>정답</th>
                    <th>정답 비율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td><Badge className="text-uppercase ml-1" color="success" pill>
                      O
                    </Badge>
                    </td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td><Badge className="text-uppercase ml-1" color="danger" pill>
                      x
                    </Badge>
                    </td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td><Badge className="text-uppercase ml-1" color="success" pill>
                      O
                    </Badge>
                    </td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td><Badge className="text-uppercase ml-1" color="danger" pill>
                      x
                    </Badge>
                    </td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td><Badge className="text-uppercase ml-1" color="success" pill>
                      O
                    </Badge>
                    </td>
                    <td>26.584%</td>
                  </tr>
                  <tr>
                    <td>13460</td>
                    <td>구슬 탈출 2</td>
                    <td><Badge className="text-uppercase ml-1" color="danger" pill>
                      x
                    </Badge>
                    </td>
                    <td>26.584%</td>
                  </tr>
                </tbody>
                </table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default MyWeekMission;
