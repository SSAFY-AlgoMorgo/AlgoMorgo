import React, { useCallback, useState } from "react";
import axios from "axios";

// nodejs library that concatenates classes

// reactstrap components
import {
  Container,
  Col,
  Button,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import MissionCard from 'views/IndexSections/MissionCard.js';
import MissionComplete from 'views/IndexSections/MissionComplete.js';

class DailyMission extends React.Component {
  state = {};
  

  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {

    const [inputs, setInputs] = useState({  
      problem1Name: localStorage.getItem("problem1Name"),
      problem1Num: localStorage.getItem("problem1Num"),
      problem2Name: localStorage.getItem("problem2Name"),
      problem2Num: localStorage.getItem("problem2Num"),
      problem3Name: localStorage.getItem("problem3Name"),
      problem3Num: localStorage.getItem("problem3Num"),
      problem1Answer: localStorage.getItem("problem1Answer"),
      problem2Answer: localStorage.getItem("problem2Answer"),
      problem3Answer: localStorage.getItem("problem3Answer")
  
    })

    const getRefresh = useCallback(async(e) =>{
      try{
        const {data: resonse,} = await axios({
          method:"get",
          url:"http://j6c204.p.ssafy.io:8081/v1/redis/refresh/"+localStorage.getItem("userId"),
          headers: {
            "Accept":"application/json;charset=UTF-8",
            "Content-Type":"application/json;charset=UTF-8",
            "Authorization" : "Bearer "+localStorage.getItem("Authorization")
          }
          
        })
        // console.log(headers)
        // console.log(resonse)
        const problemInfo = {
          "problem1Name": resonse[0]["problemDto"]["problemName"],
          "problem1Num": resonse[0]["problemDto"]["problemNum"],
          "problem2Name": resonse[1]["problemDto"]["problemName"],
          "problem2Num": resonse[1]["problemDto"]["problemNum"],
          "problem3Name": resonse[2]["problemDto"]["problemName"],
          "problem3Num": resonse[2]["problemDto"]["problemNum"],
          "problem1Answer":resonse[0]["problemDto"]["problemAnswer"],
          "problem2Answer":resonse[1]["problemDto"]["problemAnswer"],
          "problem3Answer":resonse[2]["problemDto"]["problemAnswer"]
        }
        // console.log(userInfo)
        localStorage.setItem("problem1Name",  resonse[0]["problemDto"]["problemName"])
        localStorage.setItem("problem1Num", resonse[0]["problemDto"]["problemNum"])
        localStorage.setItem("problem2Name",  resonse[1]["problemDto"]["problemName"])
        localStorage.setItem("problem2Num", resonse[1]["problemDto"]["problemNum"])
        localStorage.setItem("problem3Name",  resonse[2]["problemDto"]["problemName"])
        localStorage.setItem("problem3Num", resonse[2]["problemDto"]["problemNum"])
        localStorage.setItem("problem1Answer", resonse[0]["problemDto"]["problemAnswer"])
        localStorage.setItem("problem2Answer", resonse[1]["problemDto"]["problemAnswer"])
        localStorage.setItem("problem3Answer", resonse[2]["problemDto"]["problemAnswer"])
  
        
        setInputs(problemInfo)
      }catch(error){
        alert("문제 로드에 실패했습니다.")
      }
    })

    return (
      <>
        <DemoNavbar />
        <main className="dailymission-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                    <center>
                      <p className="h3 text-white"><i class="ni ni-single-copy-04 mr-2"></i>데일리 미션</p>
                      <Col className="ml-lg-auto" lg="2">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href=""
                        size="lg"
                        onClick={getRefresh}
                      >
                        미션 갱신하기
                      </Button>
                    </Col>
                    </center>
                </div>
              </Container>
            </section>
          </div>

          <MissionCard />
          <MissionComplete />

        </main>
      </>
    );
  }
}

export default DailyMission;
