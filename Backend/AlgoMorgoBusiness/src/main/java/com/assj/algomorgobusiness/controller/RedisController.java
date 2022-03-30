package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.RedisDto;
import com.assj.algomorgobusiness.repository.RedisRepository;
import com.assj.algomorgobusiness.service.redis.RedisService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/v1/redis")
public class RedisController {

    @Autowired
    private RedisService redisService;

    @Autowired
    private RedisRepository redisRepository;

    @PostMapping("/add")
    public RedisDto add(@RequestBody RedisDto redisDto){
        log.info("확인용", redisDto);

        return redisService.save(redisDto);
    }

    @GetMapping("/today/{userId}")
    public RedisDto getUserMission(@PathVariable("userId") String userId) {

        return redisService.getUserMission(userId);
    }

}
