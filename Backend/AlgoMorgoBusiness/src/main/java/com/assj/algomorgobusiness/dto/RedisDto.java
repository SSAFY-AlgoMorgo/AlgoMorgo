package com.assj.algomorgobusiness.dto;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RedisHash("userId")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RedisDto {
    private List<infoDto> infoList = new ArrayList<>();

    @Id
    private String userId;

}
