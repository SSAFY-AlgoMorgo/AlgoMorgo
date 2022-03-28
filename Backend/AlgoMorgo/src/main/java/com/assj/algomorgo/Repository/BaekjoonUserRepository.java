package com.assj.algomorgo.Repository;

import com.assj.algomorgo.Entity.BaekjoonUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BaekjoonUserRepository extends JpaRepository<BaekjoonUser, Integer> {

    List<BaekjoonUser> findAll();

//    List<BaekjoonUser> findAllOrderByUserId();
}
