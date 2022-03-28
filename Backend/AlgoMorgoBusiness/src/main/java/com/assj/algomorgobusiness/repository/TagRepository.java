package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag,Integer> {
    Optional<Tag> findTagByAlgorithm_AlgorithmId(int algorithmId);
}
