package com.assj.algomorgobusiness.service.algorithm;

import com.assj.algomorgobusiness.dto.AlgorithmDto;

import java.util.List;

public interface AlgorithmService {
    List<AlgorithmDto> fetchAlgorithm();
    AlgorithmDto getAlgorithm(int algorithmId);
    AlgorithmDto getAlgorithmByName(String algorithmName);
}
