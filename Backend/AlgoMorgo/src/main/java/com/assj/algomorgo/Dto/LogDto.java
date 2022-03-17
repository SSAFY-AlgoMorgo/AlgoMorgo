package com.assj.algomorgo.Dto;

import lombok.Data;

import java.util.List;

@Data
public class LogDto {

    private int logId;

    private int userId;

    private List<ProblemDto> problemDtoList;

}
