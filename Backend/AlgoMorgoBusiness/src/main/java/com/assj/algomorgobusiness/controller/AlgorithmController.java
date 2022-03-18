package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.AlgorithmDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/algorithm")
public class AlgorithmController {

    @Autowired
    AlgorithmServiceImpl algorithmService;

    @GetMapping
    public ResponseEntity<List<AlgorithmDto>> fetchAlgorithm(){
        List<AlgorithmDto> result =  algorithmService.fetchAlgorithm;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{algorithmId}")
    public ResponseEntity<AlgorithmDto> getAlgorithm(@PathVariable("algorithmId") int algorithmId){
        AlgorithmDto result =  algorithmService.getAlgorithm(algorithmId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/search/{algorithmName}")
    public ResponseEntity<AlgorithmDto> getAlgorithmByName(@PathVariable("algorithmName") String algorithmName){
        AlgorithmDto result =  algorithmService.getAlgorithmByName(algorithmName);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
