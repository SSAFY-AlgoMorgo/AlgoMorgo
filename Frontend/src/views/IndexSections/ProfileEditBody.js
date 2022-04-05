import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

function ProfileEditBody() {

  const history = useHistory()

  const [inputs, setInputs] = useState({
    baekjoonId: localStorage.getItem("baekjoonId"),
    language: localStorage.getItem("language"),
    password: '',
    pwcheck: '',
  })
  const [id, setUserId] = useState({
    userId : localStorage.getItem("userId")
  })
  const [nick, setNickName] = useState({
    nickName: localStorage.getItem("nickName")
  })
  
  let [checks, setChecks] = useState({
    nickNameCheck : false,
    flag : false
  })

  const { baekjoonId, language, password, pwcheck } = inputs
  const { userId } = id
  const { nickName } = nick
  let { nickNameCheck, flag} = checks

  const onChangeNickName = (e) => {
    const { name, value } = e.target   

    const nextNick = {            
      ...nick,  
      [name]: value,
    }
    setNickName(nextNick)
    const nextChecks = {
      nickNameCheck : false,
      flag : password === pwcheck ? true : false
    }
    setChecks(nextChecks);
  }

  const onChange = (e) => {
    const { name, value } = e.target   

    const nextInputs = {            
      ...inputs,  
      [name]: value,
    }
    setInputs(nextInputs)
    const nextChecks = {
      nickNameCheck : nickNameCheck,
      flag : password === pwcheck ? true : false
    }
    setChecks(nextChecks);
  }

  const onPassChange = (e) => {
    const { name, value } = e.target   

    const nextInputs = {            
      ...inputs,  
      [name]: value,
    }
    setInputs(nextInputs)
  }


  const duplicateNickName = useCallback(async(e)=>{
    if(nickName.length < 8 || 20 < nickName.length){
      nickNameCheck = false
      alert("닉네임 길이는 8글자 이상 20자 이하로 가능합니다.")
      return
    }
    try{
      await axios({
        method:"get",
        url:"http://j6c204.p.ssafy.io:8081/v1/user/duplicateNickName/check/"+nickName,
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type":"application/json;charset=UTF-8"
        }
      })
      nickNameCheck = true;
      alert("사용가능한 닉네임입니다.")
      
    }catch(e){
      nickNameCheck = false;
      alert("사용불가능한 닉네임입니다.")
    }
  })


  const profileChange = useCallback(async (e) =>{
    if(nickName.length < 8 || 20 < nickName.length){
      alert("닉네임 길이는 8글자 이상 20자 이하로 가능합니다.")
      return
    }
    if(password !== pwcheck){
      alert("비밀번호를 확인해주세요.")
      return;
    }
    if(password.length < 8){
      alert("비밀번호 길이는 8글자 이상 가능합니다.")
    }
    
      await axios({
        method:"put",
        url:"http://j6c204.p.ssafy.io:8081/v1/user/",
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type":"application/json;charset=UTF-8"
        },
        data:{
          "userId" : userId,
          "language" : language,
          "nickName" : nickName,
          "baekjoonId" : baekjoonId,
          "password" : password
        }
      }).then(response =>{
        localStorage.setItem("userId",userId)
        alert("회원정보 변경을 완료했습니다.")
        history.replace("/profile-page")
      }).catch(error =>{
        if(error.response.status == 418){
          alert("solved.ac에 가입되어있지 않은 사용자입니다.")
          return
        }
        if(error.response.status == 400){
          alert("아이디를 확인해주세요.")
          return
        }
        if(error.response.status == 403){
          alert("닉네임을 확인해주세요.")
          return
        }
      })
      
      // console.log(userInfo)
      
    
  })

  const unRegister = useCallback(async (e) =>{
      await axios({
        method:"delete",
        url:"http://j6c204.p.ssafy.io:8081/v1/user/" + userId,
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type":"application/json;charset=UTF-8",
          "Authorization" : "Bearer " + localStorage.getItem("Authorization")
        }
      }).then(response =>{
        alert("회원탈퇴를 완료했습니다. 이용해주셔서 감사합니다.")
        history.replace("/login-page")
      }).catch(error =>{
        alert("회원탈퇴에 실패했습니다.")
      })
  })
  
    return (
      <>
        
        <section className="section">
          <Container>
            <Card className="card-profile bg-secondary mt-0">
              <div>
                <p className="h7 mt-3 ml-4 font-weight-bold"><i class="ni ni-single-02"></i> 회원 정보</p>
              </div>

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 mt--3 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>현재 비밀번호</h7>
                    </Button>
                </Col>
                <Col sm="8">
                  <FormGroup>
                    <Input
                      id="exampleFormControlInput1"
                      placeholder="현재 비밀번호 입력"
                      type="password"
                      name="password"
                      onChange={onPassChange}
                      value={password}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 mt--3 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>새 비밀번호</h7>
                    </Button>
                </Col>
                <Col sm="8">
                  <FormGroup>
                    <Input
                      id="exampleFormControlInput1"
                      placeholder=""
                      type="password"
                      name="password"
                      onChange={onChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 mt--3 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>닉네임</h7>
                    </Button>
                </Col>
                <Col sm="8">
                  <FormGroup>
                    <Input
                      id="exampleFormControlInput2"
                      placeholder=""
                      type="nickname"
                      value={nickName}
                      onChange={onChangeNickName}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="py-3 align-items-center">
                <Col sm="3">
                <Button className="ml-6 mt--3 col-7"
                      block
                      font-weight-bold
                      color="neutral"
                      disabled
                      type="button">
                      <h7>선호언어</h7>
                    </Button>
                </Col>
                <Col sm="8">
                  <FormGroup>
                    <Input
                      id="exampleFormControlInput4"
                      placeholder=""
                      type="text"
                      value={language}
                      onChange={onChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
             
              <div className="text-right mt-3 mr-5 mb-5">
                <button type="button" class="btn-1 btn btn-primary" onClick={profileChange}>정보 수정</button>
                <button type="button" class="btn-1 btn btn-danger" onClick={unRegister}>회원 탈퇴</button>
              </div>


              </Card>
            </Container>
          </section>

      </>
    );
  }

export default ProfileEditBody;
