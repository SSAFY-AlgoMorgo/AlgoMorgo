import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import '../../assets/css/Calendar.css';

function makeDate(y, m, d) {
  let result = "";
  result += y+"-";
  if (m < 10)
    result += "0";
  result += m + "-";
  if (d < 10)
    result += "0";
  result += d;
  return result;
}
let count = false;
function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const [selectedMission, setSelectedMission] = useState([]);

  let curTime = new Date();
  let curYear = curTime.getFullYear();
  let curMonth = curTime.getMonth() + 1;
  let curDate = curTime.getDate();
  useEffect(() => {
    console.log(count);
    if (!count) {
      count = true;
      return;
    }
    let tmpYear = value.getFullYear();
    let tmpMonth = value.getMonth() + 1;
    let tmpDate = value.getDate();
    let url = "";
    let myDate = "";
    let userId = localStorage.getItem("userId");
    let userJWT = localStorage.getItem("Authorization");
    if (tmpYear === curYear && tmpMonth === curMonth && tmpDate === curDate) {
      // 오늘 날짜를 클릭했으면 redis에서 가져오기
      url = `http://j6c204.p.ssafy.io:8081/v1/redis/today/${userId}`;
    }
    else {
      url = `http://j6c204.p.ssafy.io:8081/v1/mission/${userId}/${tmpYear}/${tmpMonth}`;
      myDate = makeDate(tmpYear, tmpMonth, tmpDate);
    }
    axios.get(url, {
      headers: {
        "Accept":"application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "Bearer "+userJWT
      },
    }).then(res => {
      if (myDate === "") {
        setSelectedMission(res.data);
      }
      else {
        let tmpMissions = [];
        for (let m = 0; m < res.data.length; m++) {
          let tmpDate = res.data[m].createDate.slice(0, 10);
          if (tmpDate === myDate) {
            tmpMissions.push(res.data[m]);
          }
        }
        setSelectedMission(tmpMissions);
      }
    })
  }, [value]);
  useEffect(() => {
    console.log(selectedMission);
  }, [selectedMission]);
  return (
    <div className='my-5'>
      <Calendar onChange={onChange} value={value} calendarType="US"/>
    </div>
  );
}

export default MyCalendar;
