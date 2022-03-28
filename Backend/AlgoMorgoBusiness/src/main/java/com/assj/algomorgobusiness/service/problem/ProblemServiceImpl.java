package com.assj.algomorgobusiness.service.problem;

import com.assj.algomorgobusiness.Entity.Problem;
import com.assj.algomorgobusiness.Entity.Tag;
import com.assj.algomorgobusiness.dto.ProblemDto;
import com.assj.algomorgobusiness.repository.ProblemRepository;
import com.assj.algomorgobusiness.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProblemServiceImpl implements ProblemService{

    private final ProblemRepository problemRepository;
    private final TagRepository tagRepository;

    @Override
    public List<ProblemDto> fetchProblem() {
        List<Problem> plist = problemRepository.findAll();
        List<ProblemDto> problemDtoList = plist.stream().map(problem -> ProblemDto.builder()
                .problemId(problem.getProblemId())
                .problemNum(problem.getProblemNum())
                .problemName(problem.getProblemName())
                .problemPoint(problem.getProblemPoint())
                .problemSolved(problem.getProblemSolved())
                .problemSubmit(problem.getProblemSubmit())
                .problemAnswer(problem.getProblemAnswer())
                .problemAvg(problem.getProblemAvg())
                .build()).collect(Collectors.toList());

        return problemDtoList;
    }

    @Override
    public ProblemDto getProblem(int problemId) {
        Optional<Problem> pr = problemRepository.findById(problemId);
        Problem problem = pr.get();

        ProblemDto problemDto = ProblemDto.builder()
                .problemId(problem.getProblemId())
                .problemNum(problem.getProblemNum())
                .problemName(problem.getProblemName())
                .problemPoint(problem.getProblemPoint())
                .problemSolved(problem.getProblemSolved())
                .problemSubmit(problem.getProblemSubmit())
                .problemAnswer(problem.getProblemAnswer())
                .problemAvg(problem.getProblemAvg())
                .build();

        return problemDto;
    }

    @Override
    public ProblemDto getProblemByNum(int problemNum) {
        Optional<Problem> pr = problemRepository.findProblemByProblemNum(problemNum);
        Problem problem = pr.get();

        ProblemDto problemDto = ProblemDto.builder()
                .problemId(problem.getProblemId())
                .problemNum(problem.getProblemNum())
                .problemName(problem.getProblemName())
                .problemPoint(problem.getProblemPoint())
                .problemSolved(problem.getProblemSolved())
                .problemSubmit(problem.getProblemSubmit())
                .problemAnswer(problem.getProblemAnswer())
                .problemAvg(problem.getProblemAvg())
                .build();

        return problemDto;
    }

    @Override
    public List<ProblemDto> fetchProblemByClass(int algorithmId) {
        Optional<Tag> tag = tagRepository.findTagByAlgorithm_AlgorithmId(algorithmId);
        Problem num = tag.get().getProblem();

        List<Problem> plist = problemRepository.findAllById(Collections.singleton(num.getProblemId()));
        List<ProblemDto> problemDtoList = plist.stream().map(problem -> ProblemDto.builder()
                .problemId(problem.getProblemId())
                .problemNum(problem.getProblemNum())
                .problemName(problem.getProblemName())
                .problemPoint(problem.getProblemPoint())
                .problemSolved(problem.getProblemSolved())
                .problemSubmit(problem.getProblemSubmit())
                .problemAnswer(problem.getProblemAnswer())
                .problemAvg(problem.getProblemAvg())
                .build()).collect(Collectors.toList());

        return problemDtoList;
    }

    @Override
    public List<ProblemDto> fetchProblemBySolved(String type) {
        List<Problem> plist;

        if(type.equals("high")) {
            plist = problemRepository.findAll(Sort.by(Sort.Direction.DESC, "problemSolved"));
        }

        else {
            plist = problemRepository.findAll(Sort.by(Sort.Direction.ASC, "problemSolved"));
        }

        List<ProblemDto> problemDtoList = plist.stream().map(problem -> ProblemDto.builder()
                .problemId(problem.getProblemId())
                .problemNum(problem.getProblemNum())
                .problemName(problem.getProblemName())
                .problemPoint(problem.getProblemPoint())
                .problemSolved(problem.getProblemSolved())
                .problemSubmit(problem.getProblemSubmit())
                .problemAnswer(problem.getProblemAnswer())
                .problemAvg(problem.getProblemAvg())
                .build()).collect(Collectors.toList());

        return problemDtoList;

    }

    @Override
    public List<ProblemDto> fetchProblemByAvg(String type) {
        List<Problem> plist;

        if(type.equals("high")) {
            plist = problemRepository.findAll(Sort.by(Sort.Direction.DESC, "problemAnswer"));
        }

        else {
            plist = problemRepository.findAll(Sort.by(Sort.Direction.ASC, "problemAnswer"));
        }

        List<ProblemDto> problemDtoList = plist.stream().map(problem -> ProblemDto.builder()
                .problemId(problem.getProblemId())
                .problemNum(problem.getProblemNum())
                .problemName(problem.getProblemName())
                .problemPoint(problem.getProblemPoint())
                .problemSolved(problem.getProblemSolved())
                .problemSubmit(problem.getProblemSubmit())
                .problemAnswer(problem.getProblemAnswer())
                .problemAvg(problem.getProblemAvg())
                .build()).collect(Collectors.toList());

        return problemDtoList;
    }


}
