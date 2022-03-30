package com.assj.algomorgobusiness.service.redis;

import com.assj.algomorgobusiness.dto.RedisDto;

import java.util.Map;

public interface RedisService {
    RedisDto save(RedisDto redisDto);
    RedisDto getUserMission(String userId);

}
