package com.assj.algomorgobusiness.service.redis;

import com.assj.algomorgobusiness.dto.RedisDto;
import com.assj.algomorgobusiness.repository.RedisRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class RedisServiceImpl implements RedisService{

    private final RedisRepository redisRepository;

    @Override
    public RedisDto save(RedisDto redisDto) {
        return redisRepository.save(redisDto);

    }

    @Override
    public RedisDto getUserMission(String userId) {
        RedisDto redisDto = redisRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("Nothing saved. id=" + userId));

        return redisDto;
    }

}
