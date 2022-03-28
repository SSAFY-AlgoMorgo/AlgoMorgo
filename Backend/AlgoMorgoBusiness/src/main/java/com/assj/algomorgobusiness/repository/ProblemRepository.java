package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProblemRepository extends JpaRepository<Problem,Integer> {
    Optional<Problem> findProblemByProblemNum(int problemNum);

}

