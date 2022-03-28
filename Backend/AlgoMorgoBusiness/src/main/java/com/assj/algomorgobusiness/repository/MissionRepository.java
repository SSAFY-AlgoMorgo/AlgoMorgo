package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MissionRepository extends JpaRepository<Mission,Long> {

    @Query("SELECT * from mission")
    Optional<Mission> findAllByCreateDate(long id);
}
