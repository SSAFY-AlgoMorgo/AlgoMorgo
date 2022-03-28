package com.assj.algomorgobusiness.service.baekJoonuser;

import com.assj.algomorgobusiness.dto.BaekjoonUserDto;
import com.assj.algomorgobusiness.dto.ProblemDto;

import java.util.List;

public interface BaekjoonUserService {
    List<BaekjoonUserDto> fetchBJUser();
    BaekjoonUserDto getBJUser(String userName);
    List<ProblemDto> fetchProblemByBaekjoonId(String userName); // 보류
}
