package com.assj.algomorgo.Dto;

import lombok.Data;

import java.util.List;

@Data
public class TagDto {

    private int tagId;

    private int problemId;

    private List<AlgorithmDto> algorithmDtoList;

}
