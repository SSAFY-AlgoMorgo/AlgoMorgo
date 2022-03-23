package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.entity.BaekjoonUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaekjoonUserRepository extends JpaRepository<BaekjoonUser,Integer> {
}
