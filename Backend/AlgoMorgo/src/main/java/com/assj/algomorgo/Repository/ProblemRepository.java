package com.assj.algomorgo.Repository;

import com.assj.algomorgo.Entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemRepository extends JpaRepository<Problem, Integer> {
    Problem findByProblemNum(int problemNum);
}
