import React, { useCallback, useState } from "react";
import axios from "axios";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

function MissionCard() {

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
  const { problem1Name, problem1Num,problem2Name,problem2Num,problem3Name,problem3Num, problem1Answer, problem2Answer, problem3Answer } = inputs   

  const onClick1 =function(){
    window.location.replace("https://www.acmicpc.net/problem/"+problem1Num)
  }

  const onClick2 =function(){
    window.location.replace("https://www.acmicpc.net/problem/"+problem2Num)
  }

  const onClick3 =function(){
    window.location.replace("https://www.acmicpc.net/problem/"+problem3Num)
  }

  const getMission = useCallback(async(e) =>{
    try{
      const {data: resonse,} = await axios({
        method:"get",
        url:"http://j6c204.p.ssafy.io:8081/v1/redis/today/"+localStorage.getItem("userId"),
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
  getMission()


    return (
      <>
        <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <img
                            alt="..."
                             src={require("assets/img/algo/math.jpg")}
                          />
                          <h5 className="text-primary text-uppercase mt-3">
                          {problem1Num}. {problem1Name}
                          </h5>
                          <div>
                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="mt-2">
                              정답률 : {problem1Answer}
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt--2"
                            color="primary"
                            href="#pablo"
                            onClick={onClick1}
                          >
                              <i className="ni ni-curved-next"></i>
                            </Button>
                            </Col>
                          </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <img
                            alt="..."
                             src={require("assets/img/algo/math.jpg")}
                          />
                          <h5 className="text-primary text-uppercase mt-3">
                          {problem2Num}. {problem2Name}
                          </h5>
                          <div>
                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="mt-2">
                              정답률 : {problem2Answer}
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt--2"
                            color="primary"
                            href="#pablo"
                            onClick={onClick2}
                          >
                              <i className="ni ni-curved-next"></i>
                            </Button>
                            </Col>
                          </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <img
                            alt="..."
                             src={require("assets/img/algo/math.jpg")}
                          />
                          <h5 className="text-primary text-uppercase mt-3">
                          {problem3Num}. {problem3Name}
                          </h5>
                          <div>
                          <Row className="align-items-center">
                            <Col sm="8">
                            <p className="mt-2">
                              정답률 : {problem3Answer}
                            </p>
                            </Col>
                            <Col sm="4">
                            <Button
                            className="mt--2"
                            color="primary"
                            href="#pablo"
                            onClick={onClick3}
                          >
                              <i className="ni ni-curved-next"></i>
                            </Button>
                            </Col>
                          </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
            
      </>
    );
  }

export default MissionCard;