package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.MissionDto;
import com.assj.algomorgobusiness.dto.RedisDto;
import com.assj.algomorgobusiness.repository.RedisRepository;
import com.assj.algomorgobusiness.service.redis.RedisService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/redis")
public class RedisController {

    private final RedisService redisService;

    @PostMapping("/add")
    public RedisDto add(@RequestBody RedisDto redisDto){
        log.info("확인용", redisDto);

        return redisService.save(redisDto);
    }

    @GetMapping("/today/{Id}")
    public List<MissionDto> getUserMission(@PathVariable("Id") String Id) {

        return redisService.getUserMission(Id);
    }

    @GetMapping("/refresh/{Id}")
    public List<MissionDto> getRefreshMission(@PathVariable("Id") String Id) {

        return redisService.getRefreshMission(Id);
    }

}
