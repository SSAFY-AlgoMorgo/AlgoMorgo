package com.assj.algomorgobusiness.dto;

import lombok.Data;

@Data
public class ProblemDto {
    private int problemId;
    private int problemNum;
    private String problemName;
    private int problemPoint;
    private int problemSolved;
    private long problemSubmit;
    private String problemAnswer;
    private double problemAvg;
}
