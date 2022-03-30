package com.assj.algomorgobusiness.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
public class infoDto {
    private String createDate;

    private String successDate;

    private String problemId;

    private String selected;
}
