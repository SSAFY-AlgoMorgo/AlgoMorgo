package com.assj.algomorgobusiness.repository;

import com.assj.algomorgobusiness.dto.RedisDto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RedisRepository extends CrudRepository<RedisDto, String> {

}
