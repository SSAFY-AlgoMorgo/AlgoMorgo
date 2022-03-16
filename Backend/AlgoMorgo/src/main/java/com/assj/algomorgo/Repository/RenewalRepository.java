package com.assj.algomorgo.Repository;

import com.assj.algomorgo.Entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RenewalRepository extends JpaRepository<Log,Integer> {

    @Query(value = "SELECT nickname FROM User WHERE user_id = :userId", nativeQuery = true)
    String findBaekjoonId(@Param(value = "userId") String userId);


}
