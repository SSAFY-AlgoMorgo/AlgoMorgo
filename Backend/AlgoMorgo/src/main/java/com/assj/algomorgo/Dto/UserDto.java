package com.assj.algomorgo.Dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    private int userId;
    private String userName;
    private String userTier;
}
