import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";


// reactstrap components
import {
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

function ProfileTag() {
  const HEADER = {
    headers: {
      Authorization: "Bearer "+localStorage.getItem("Authorization"),
    },
  };

  const [tagList, setTagList] = useState([]);

  const getTag = async() => {
    await axios
      .get("http://j6c204.p.ssafy.io:8081/v1/user/"+localStorage.getItem("userId"), HEADER)
      .then((response) => {
        setTagList(response.data.userSolvedInfo);
      })
      .catch((err) => {
        // alert("게시물이 아예 없습니다");
      });
  };

  useEffect(() => {
    getTag();
  }, []);

  let index = [];
  let myTagList = [];
  for (let x in tagList) { 
    index.push(x); 
  }
  for(let i = 0; i<Object.keys(tagList).length; i++){
    myTagList.push(tagList[index[i]]);
  }

  
    return (
      <>
          <Container>
            <Card className="card-profile bg-secondary mt-0">
              <div>
                <p className="h7 mt-3 ml-4 font-weight-bold"><i class="ni ni-tag"></i> 태그 분포</p>
              </div>
              <Row className="py-3 align-items-center">
                <Col sm="5">
                  {/* <img
                    className="ml-5"
                    alt="..."
                    src={require("assets/img/algo/tag.jpg")}
                  /> */}
                </Col>
                <Col sm="7">
                <div className="ml-5">
                  <Row>
                    <Col className="font-weight-bold ml-3">
                    <h7>태그</h7>
                    </Col>
                    <Col className="font-weight-bold text-right mr-6">
                    <h7>문제</h7>
                    </Col>
                  </Row>
                </div>
                <hr width="90%" />

                {myTagList.map(
                  (tag, idx) => (
                    <div className="ml-5">
                      <Row>
                        <Col className="font-weight-bold ml-3">
                        <h7>{tag.cnt}</h7>
                        </Col>
                        <Col className="font-weight-bold text-right mr-6">
                        <h7>{tag.algorithmKor}</h7>
                        </Col>
                        
                      </Row>
                    </div>
                  )
                )}
                  
                {/* 해볼 예정 */}
                {/* <div className="mt-3">
                  <p className="h7 text-center font-weight-bold"><i class="ni ni-bold-down"></i> 더보기</p>
                </div> */}

                

                {/* <details className="my-4">
                  <summary>
                    <p className="h7 text-center font-weight-bold"><i class="ni ni-bold-down"></i> 더보기</p>
                  </summary>
                    
                  <div className="my-4">

                    <div className="ml-5 mt-3">
                      <Row>
                        <Col className="font-weight-bold ml-3">
                        <h7>백트래킹</h7>
                        </Col>
                        <Col className="font-weight-bold text-right mr-6">
                        <h7>3</h7>
                        </Col>
                      </Row>
                    </div>

                  </div>
                </details> */}

                



                </Col>
              </Row>
            
            <br />


            </Card>
          </Container>

      </>
    );
  }

export default ProfileTag;
