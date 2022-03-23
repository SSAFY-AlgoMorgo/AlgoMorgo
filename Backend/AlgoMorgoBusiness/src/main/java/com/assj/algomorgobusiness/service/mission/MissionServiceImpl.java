package com.assj.algomorgobusiness.service.mission;

import com.assj.algomorgobusiness.dto.MissionDto;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MissionServiceImpl implements MissionService{
    @Override
    public List<MissionDto> fetchMission(String userId) {
        return null;
    }

    @Override
    public List<MissionDto> getMission(String userId, int year, int month) {
        return null;
    }

    @Override
    public List<MissionDto> getMissionByWeek(String userId) {
        return null;
    }

    @Override
    public List<MissionDto> getMissionByCreateDate(String userId, LocalDateTime createDate) {
        return null;
    }
}
