package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.Entity.BaekjoonUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BaekjoonUserRepository extends JpaRepository<BaekjoonUser,Integer> {
    Optional<BaekjoonUser> findBaekjoonUserByUserName(String userName);
}
