package com.assj.algomorgo.Repository;

import com.assj.algomorgo.Entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MissionRepository extends JpaRepository<Mission,Integer> {

    @Query(value = "SELECT * FROM mission WHERE user_id = :userId AND success_date IS NULL",nativeQuery = true)
    List<Mission> getMisson(@Param("userId") String userId);

    @Query(value = "UPDATE misson SET success_date = :curTime WHERE misson_id = :missonId",nativeQuery = true)
    void updateMisson(@Param("missonId")int missonId, @Param("curTime") String curTime);
}
