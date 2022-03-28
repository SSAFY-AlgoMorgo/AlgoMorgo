package com.assj.algomorgobusiness.service.algorithm;

import com.assj.algomorgobusiness.entity.Algorithm;
import com.assj.algomorgobusiness.dto.AlgorithmDto;
import com.assj.algomorgobusiness.repository.AlgorithmRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AlgorithmServiceImpl implements AlgorithmService{

    private final AlgorithmRepository algorithmRepository;

    @Override
    public List<AlgorithmDto> fetchAlgorithm() {
        List<Algorithm> algo = algorithmRepository.findAll();
        List<AlgorithmDto> algorithmDtoList = algo.stream().map(algorithm -> AlgorithmDto.builder()
                .algorithmId(algorithm.getAlgorithmId())
                .algorithmKor(algorithm.getAlgorithmKor())
                .algorithmEng(algorithm.getAlgorithmEng())
                .build()).collect(Collectors.toList());

        return algorithmDtoList;
    }

    @Override
    public AlgorithmDto getAlgorithm(int algorithmId) {
        Optional<Algorithm> algo = algorithmRepository.findById(algorithmId);
        Algorithm algorithm = algo.get();

        AlgorithmDto algorithmDto = AlgorithmDto.builder()
                .algorithmId(algorithm.getAlgorithmId())
                .algorithmKor(algorithm.getAlgorithmKor())
                .algorithmEng(algorithm.getAlgorithmEng())
                .build();

        return algorithmDto;
    }

    @Override
    public AlgorithmDto getAlgorithmByName(String algorithmName) {
        Optional<Algorithm> algo;

        if(algorithmRepository.findAlgorithmByAlgorithmKor(algorithmName).isPresent()) {
            algo = algorithmRepository.findAlgorithmByAlgorithmKor(algorithmName);
        }
        else {
            algo = algorithmRepository.findAlgorithmByAlgorithmEng(algorithmName);
        }
        Algorithm algorithm = algo.get();

        AlgorithmDto algorithmDto = AlgorithmDto.builder()
                .algorithmId(algorithm.getAlgorithmId())
                .algorithmKor(algorithm.getAlgorithmKor())
                .algorithmEng(algorithm.getAlgorithmEng())
                .build();

        return algorithmDto;
    }
}
