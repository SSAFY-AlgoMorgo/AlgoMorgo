import React, { useEffect, useState } from 'react';
import Badge from 'reactstrap/lib/Badge';
import axios from 'axios';
import {
  Card,
  CardBody,
  Row,
  Col,
  Progress
} from "reactstrap";

function MyMonthMission() {
  const [value, onChange] = useState(new Date());
  const [participationRate, setParticipationRate] = useState(0.0);
  const [participation, setParticipation] = useState(0);
  const [solveRate, setSolveRate] = useState(0.0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [monthMissions, setMonthMissions] = useState([]);
  const [todayMissions, setTodayMissions] = useState([]);
  useEffect(() => {

    let date = new Date();
    let tmpYear = date.getFullYear();
    let tmpMonth = date.getMonth()+1;
    setYear(tmpYear);
    setMonth(tmpMonth);
    let total = new Set();
    let participate = new Set();
    let correct = 0;

    let userId = localStorage.getItem("userId");
    let userJWT = localStorage.getItem("Authorization");
    let urlForToday = `http://j6c204.p.ssafy.io:8081/v1/redis/today/${userId}`;
    let urlForMonth = `http://j6c204.p.ssafy.io:8081/v1/mission/${userId}/${tmpYear}/${tmpMonth}`;
    console.log(userJWT);
    axios.get(urlForToday, {
      headers: {
        "Accept":"application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "Bearer "+userJWT
      },
    }).then(res => {
      setTodayMissions(res.data);
      for (let m = 0; m < res.data.length; m++) {
        let tmpDate = res.data[m].createDate.slice(0, 10);
        total.add(tmpDate);
        if (res.data[m].successDate != null) {
          participate.add(tmpDate);
          correct++;
        }
      }
    }).then(res => {
      console.log(userJWT);
      axios.get(urlForMonth, {
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": "Bearer "+userJWT
        },
      }).then(res => {
        setMonthMissions(res.data);
        for (let m = 0; m < res.data.length; m++) {
          let tmpDate = res.data[m].createDate.slice(0, 10);
          total.add(tmpDate);
          if (res.data[m].successDate != null) {
            participate.add(tmpDate);
            correct++;
          }
        }
        setParticipation(participate.size);
        setParticipationRate((participate.size / total.size * 100).toFixed(2));
        setSolveRate((correct / res.data.length * 100).toFixed(2));
      })
    })
  }, []);
  return (
    <div>
      <Card className="shadow my-5" style={{ width: "100%" }}>
        <CardBody className="px-5" >
          {/* 미션 그래프 */}
          <h4 className="h4 font-weight-bold">월간 미션 현황({year}년 {month}월)</h4>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <h6>참여율</h6>
              </div>
              <div className="progress-percentage">
                <span>{participationRate}%</span>
              </div>
            </div>
            <Progress max="100" value={participationRate} color="default" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <h6>정답률</h6>
              </div>
              <div className="progress-percentage">
                <span>{solveRate}%</span>
              </div>
            </div>
            <Progress max="100" value={solveRate} />
          </div>
          
          {/* 미션 도표 */}
          <Row className="py-3">
            <Col sm="6">
              <h6 className='font-weight-bold'>참여일 수: {participation}일</h6>
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
                  {todayMissions.map(mission =>
                    <tr>
                      <td>{mission.problemDto.problemNum}</td>
                      <td>{mission.problemDto.problemName}</td>
                      <td>{mission.problemDto.problemSubmit}</td>
                      <td>{mission.problemDto.problemAnswer}</td>
                    </tr>
                  )}
                </tbody>
                </table>
            </Col>
            <Col sm="6">
              <h6 className='font-weight-bold'>정답 비율: {solveRate}%</h6>
              <h6 className='mt-3 font-weight-bold'> 미션</h6>
              <div style={ {width:"100%",height:"150px",overflow:"auto"}}>
                <table className='table-bordered' style={{ width: "100%"}} >
                  <thead>
                    <tr>
                      <th>문제</th>
                      <th>문제 제목</th>
                      <th>정답</th>
                      <th>정답 비율</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      monthMissions.map(mission =>
                        <tr>
                          <td>{mission.problemDto.problemNum}</td>
                          <td>{mission.problemDto.problemName}</td>
                          <td>
                            {
                              mission.successDate !== null
                                ? <Badge className="text-uppercase ml-1" color="success" pill>O</Badge>
                                : <Badge className="text-uppercase ml-1" color="danger" pill>
                                x
                              </Badge>
          
                          }
                          </td>
                          <td>{mission.problemDto.problemAnswer}</td>
                        </tr>
                        )
                    }
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default MyMonthMission;
