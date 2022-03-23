package com.assj.algomorgobusiness.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MissionDto {
    private ProblemDto problemDto;
    private LocalDateTime createDate;
    private LocalDateTime successDate;
}
