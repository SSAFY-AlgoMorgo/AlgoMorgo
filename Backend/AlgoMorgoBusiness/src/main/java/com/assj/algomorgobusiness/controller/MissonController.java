package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.MissionDto;
import com.assj.algomorgobusiness.service.mission.MissionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/v1/mission")
public class MissonController {

    @Autowired
    MissionServiceImpl missionService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<MissionDto>> fetchMission(@PathVariable("userId") String userId){
        List<MissionDto> result = missionService.fetchMission(userId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{userId}/{year}/{month}")
    public ResponseEntity<List<MissionDto>> getMission(@PathVariable("userId") String userId, @PathVariable("year") int year, @PathVariable("month") int month){
        List<MissionDto> result = missionService.getMission(userId,year,month);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/week/{userId}")
    public ResponseEntity<List<MissionDto>> getMissionByWeek(@PathVariable("userId") String userId){
        List<MissionDto> result = missionService.getMissionByWeek(userId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{userId}/{createDate}")
    public ResponseEntity<List<MissionDto>> getMissionByCreateDate(@PathVariable("userId") String userId, @PathVariable("createDate")LocalDateTime createDate){
        List<MissionDto> result = missionService.getMissionByCreateDate(userId,createDate);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
