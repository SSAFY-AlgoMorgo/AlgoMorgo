package com.assj.algomorgobusiness.service.mission;

import com.assj.algomorgobusiness.dto.MissionDto;

import java.time.LocalDateTime;
import java.util.List;

public interface MissionService {

    List<MissionDto> getMission(String userId, int year, int month);

    List<MissionDto> getMissionByWeek(String userId);

}
