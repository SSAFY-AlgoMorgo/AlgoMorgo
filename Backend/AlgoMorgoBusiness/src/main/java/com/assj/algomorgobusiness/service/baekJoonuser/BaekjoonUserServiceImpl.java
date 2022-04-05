package com.assj.algomorgobusiness.service.baekJoonuser;

import com.assj.algomorgobusiness.entity.BaekjoonUser;
import com.assj.algomorgobusiness.dto.BaekjoonUserDto;
import com.assj.algomorgobusiness.dto.ProblemDto;
import com.assj.algomorgobusiness.repository.BaekjoonUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BaekjoonUserServiceImpl implements BaekjoonUserService{

    private final BaekjoonUserRepository baekjoonUserRepository;

    @Override
    public List<BaekjoonUserDto> fetchBJUser() {
        List<BaekjoonUser> baekjoon = baekjoonUserRepository.findAll();
        List<BaekjoonUserDto> baekjoonUserDto = baekjoon.stream().map(baekjoonUser -> BaekjoonUserDto.builder()
                .userId(baekjoonUser.getUserId())
                .userName(baekjoonUser.getUserName())
                .userTier(baekjoonUser.getUserTier())
                .build()).collect(Collectors.toList());

        return baekjoonUserDto;
    }

    @Override
    public BaekjoonUserDto getBJUser(String userName) {
        Optional<BaekjoonUser> baekjoon = baekjoonUserRepository.findBaekjoonUserByUserName(userName);
        BaekjoonUser baekjoonUser = baekjoon.get();

        BaekjoonUserDto baekjoonUserDto = BaekjoonUserDto.builder()
                .userId(baekjoonUser.getUserId())
                .userName(baekjoonUser.getUserName())
                .userTier(baekjoonUser.getUserTier())
                .build();

        return baekjoonUserDto;
    }

    @Override
    public List<ProblemDto> fetchProblemByBaekjoonId(String userName) {
        // 보류
        return null;
    }
}
