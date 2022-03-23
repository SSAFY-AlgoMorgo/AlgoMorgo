package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.UserDto;
import com.assj.algomorgobusiness.filter.JwtFilter;
import com.assj.algomorgobusiness.service.user.UserService;
import com.assj.algomorgobusiness.service.user.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity registUser(@RequestBody UserDto userDto){
        if(userService.registUser(userDto))
            return  new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> fetchUser(){
        List<UserDto> result = userService.fetchUser();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> map){

        String userId = map.getOrDefault("userId",null);
        String password = map.getOrDefault("password",null);
        log.info(userId);
        log.info(password);
        Map<String, String> result = userService.login(userId, password);
        if(result.size() == 0)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        HttpHeaders headers = new HttpHeaders();
        log.warn(result.get("jwt"));
        headers.add(JwtFilter.AUTHORIZATION_HEADER,"Bearer "+  result.get("jwt"));
        result.remove("jwt");
        return new ResponseEntity<>(result, headers, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateUser(@RequestBody Map<String, Object> map){
        String changePassword = (String) map.getOrDefault("changePassword",null);
        UserDto userDto = new UserDto();
        userDto.setId((Integer) map.get("id"));//변경 불가
        userDto.setUserId((String) map.get("userId"));//변경 불가
        userDto.setNickName((String) map.get("nickName"));//변경 가능
        userDto.setBaekjoonId((String) map.get("baekjoonId"));//변경 불가
        userDto.setLanguage((String) map.get("language"));//변경 가능
        userDto.setPassword((String) map.get("password"));//변경 가능 - 회원 정보를 수정할 때 비밀번호가 필요하다.
        if(userService.updateUser(userDto))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") String userId){
        if(userService.deleteUser(userId))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Map<String,Object>> getUser(@PathVariable("userId") String userId){
        Map<String, Object> result = new HashMap<>();
        UserDto userDto = userService.getUser(userId);
        return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
    }

    @GetMapping("/duplicate/check/{userId}")
    public ResponseEntity duplicate(@PathVariable("userId") String userId){
        if(userService.duplicate(userId))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity((HttpStatus.INTERNAL_SERVER_ERROR));
    }


}
