package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.Entity.Algorithm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlgorithmRepository extends JpaRepository<Algorithm,Integer> {
    Optional<Algorithm> findAlgorithmByAlgorithmKor(String algorithmName);
    Optional<Algorithm> findAlgorithmByAlgorithmEng(String algorithmName);
}
