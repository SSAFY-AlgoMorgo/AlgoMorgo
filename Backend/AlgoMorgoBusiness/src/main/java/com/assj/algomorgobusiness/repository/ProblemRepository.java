package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.Entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemRepository extends JpaRepository<Problem,Integer> {
}
