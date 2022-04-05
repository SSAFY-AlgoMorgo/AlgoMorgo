import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button
} from "reactstrap";


function MyMonthMission() {
  const [value, onChange] = useState(new Date());
  const [curDate, setCurDate] = useState("");
  const [todayMissions, setTodayMissions] = useState([]);
  const [weekMissions, setWeekMissions] = useState([]);
  const [dates, setDates] = useState([]);
  const [curMissions, setCurMissions] = useState([]);
  const yoil = ["일", "월", "화", "수", "목", "금", "토"];
  let days = new Set();

  function setMission(date) {
    let tmpM = [];
    for (let m = 0; m < weekMissions.length; m++) {
      let tmpDate = weekMissions[m].createDate.slice(0, 10);
      if (date === tmpDate)
        tmpM.push(weekMissions[m]);
    }
    setCurMissions(tmpM);
  }
  useEffect(() => {
    let date = new Date();
    setCurDate(date.getFullYear()+"년 "+(date.getMonth()+1)+"월 "+date.getDate()+"일" + "(" + yoil[date.getDay()] + ")");

    let userId = localStorage.getItem("userId");
    let userJWT = localStorage.getItem("Authorization");
    let urlForToday = `http://j6c204.p.ssafy.io:8081/v1/redis/today/${userId}`;
    let urlForWeek = `http://j6c204.p.ssafy.io:8081/v1/mission/week/${userId}`;
    let tmpM = [];
    axios.get(urlForWeek, {
      headers: {
        "Accept": "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "Bearer " + userJWT
      },
    }).then(res => {
      for (let m = 0; m < res.data.length; m++) {
        let tmpDate = res.data[m].createDate.slice(0, 10);
        days.add(tmpDate);
      }
      tmpM = res.data;
      
    }).then(res => {
      axios.get(urlForToday, {
        headers: {
          "Accept": "application/json;charset=UTF-8",
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": "Bearer " + userJWT
        },
      }).then(res => {
        console.log(res.data);
        for (let m = 0; m < res.data.length; m++) {
          let tmpDate = res.data[m].createDate.slice(0, 10);
          days.add(tmpDate);
          tmpM.push(res.data[m]);
        }
        let tmpD = [];
        days.forEach((day) => tmpD.push(day));
        setDates(tmpD);
        setWeekMissions(tmpM);
      });
    })
  }, []);
  return (
    <div>
      <Row className="py-3 align-items-top">
        <Col sm="3">
          {dates.map((date) =>
            <Button onClick={() => setMission(date)} className='font-weight-bold text-primary'>{date}</Button>
          )}
        </Col>
        <Col sm="9">
          <h6 className='font-weight-bold'>오늘의 미션</h6>
          {curMissions.map(mission => 
            <Card className="shadow my-4" style={{ width: "100%" }}>
              <CardBody className="px-5" >
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <h6 h6 className='font-weight-bold'>{ mission.problemDto.problemNum}</h6>
                  </Col>
                  <Col sm="3">
                    <h6 className='font-weight-bold'>{mission.problemDto.problemName}</h6>
                  </Col>
                  <Col sm="3">
                    <h6 className='font-weight-bold'>제출: {mission.problemDto.problemSubmit}번</h6>
                  </Col>
                  <Col sm="3">
                    <h6 className='font-weight-bold'>정답률: {mission.problemDto.problemAnswer}</h6>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default MyMonthMission;
