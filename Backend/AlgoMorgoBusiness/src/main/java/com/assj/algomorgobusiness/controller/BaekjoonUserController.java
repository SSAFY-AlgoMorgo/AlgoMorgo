package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.BaekjoonUserDto;
import com.assj.algomorgobusiness.dto.ProblemDto;
import com.assj.algomorgobusiness.entity.BaekjoonUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/baekjoon")
public class BaekjoonUserController {
    @Autowired
    BaekjoonUserServiceImpl baekjoonUserService;

    @GetMapping
    public ResponseEntity<List<BaekjoonUserDto>> fetchBJUser(){
        List<BaekjoonUserDto> result = baekjoonUserService.fetchBJUser();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{userName}")
    public ResponseEntity<BaekjoonUserDto> getBJUser(@PathVariable("userName") String userName){
        BaekjoonUserDto result = baekjoonUserService.getBJUser(userName);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/log/{userName}")
    public ResponseEntity<List<ProblemDto>> fetchProblemByBaekjoonId(@PathVariable("userName") String userName){
        List<ProblemDto> result = baekjoonUserService.fetchProblemByBaekjoonId(userName);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
