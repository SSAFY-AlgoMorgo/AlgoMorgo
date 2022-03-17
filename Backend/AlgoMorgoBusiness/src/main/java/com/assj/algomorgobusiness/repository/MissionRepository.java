package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.Entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MissionRepository extends JpaRepository<Mission,Long> {
}
