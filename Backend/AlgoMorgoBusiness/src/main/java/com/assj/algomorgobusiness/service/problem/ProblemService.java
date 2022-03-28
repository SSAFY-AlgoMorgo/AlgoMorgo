package com.assj.algomorgobusiness.service.problem;

import com.assj.algomorgobusiness.dto.ProblemDto;

import java.util.List;

public interface ProblemService {
    List<ProblemDto> fetchProblem(); // 전체 목록
    ProblemDto getProblem(int problemId); // 문제 아이디로 검색
    ProblemDto getProblemByNum(int problemNum); // 문제 번호로 검색
    List<ProblemDto> fetchProblemByClass(int algorithmId); // 알고리즘 아이디를 가지고 있는거
    List<ProblemDto> fetchProblemBySolved(String sort); // 맞힌 사람 수 검색
    List<ProblemDto> fetchProblemByAvg(String sort); // 평균 제출 횟수 검색


}
