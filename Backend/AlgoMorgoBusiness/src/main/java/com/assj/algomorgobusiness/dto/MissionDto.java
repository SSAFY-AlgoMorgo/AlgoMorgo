package com.assj.algomorgobusiness.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MissionDto {
    private long missionId;
    private int userId;
    private int problemId;
    private LocalDateTime createDate;
    private LocalDateTime successDate;
}
