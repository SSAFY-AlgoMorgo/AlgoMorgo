package com.assj.algomorgobusiness.service.user;


import com.assj.algomorgobusiness.config.TokenConfig;
import com.assj.algomorgobusiness.dto.UserDto;
import com.assj.algomorgobusiness.entity.User;
import com.assj.algomorgobusiness.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenConfig tokenConfig;

    private AuthenticationManagerBuilder authenticationManagerBuilder;

    public UserServiceImpl(AuthenticationManagerBuilder authenticationManagerBuilder){
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @Override
    public boolean registUser(UserDto userDto) {
        if(userRepository.findByUserId(userDto.getUserId()).orElse(null) != null){
            throw new RuntimeException("이미 가입한 유저입니다.");
        }
        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setBaekjoonId(userDto.getBaekjoonId());
        user.setNickName(userDto.getNickName());
        user.setLanguage(userDto.getLanguage());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        return userRepository.save(user) != null ? true : false;
    }

    @Override
    public List<UserDto> fetchUser() {
        List<UserDto> list = userRepository.findAll().stream().map( user -> {
          UserDto userDto = new UserDto();
          userDto.setUserId(user.getUserId());
          userDto.setBaekjoonId(user.getBaekjoonId());
          userDto.setNickName(user.getNickName());
          userDto.setLanguage(user.getLanguage());
          userDto.setId(user.getId());
            return userDto;
        }).collect(Collectors.toList());
        return list;
    }

    @Override
    public boolean updateUser(UserDto userDto) {
        User user = userRepository.findByUserIdAndPassword(userDto.getUserId(),userDto.getPassword()).get();
        if(user.equals(null))
            return false;
        //JWT로 사용자를 확인 하지만, 회원정보 수정 시에 패스워드를 잘못입력하면 회원 수정이 불가능
        user.setNickName(userDto.getNickName());
        user.setLanguage(userDto.getLanguage());

        return !userRepository.save(user).equals(null) ? true : false;
    }

    @Override
    public boolean updateUser(UserDto userDto, String password) {
        User user = userRepository.findByUserIdAndPassword(userDto.getUserId(),userDto.getPassword()).get();
        if(user.equals(null))
            return false;
        //JWT로 사용자를 확인 하지만, 회원정보 수정 시에 패스워드를 잘못입력하면 회원 수정이 불가능
        user.setNickName(userDto.getNickName());
        user.setLanguage(userDto.getLanguage());
        user.setPassword(password);

        return !userRepository.save(user).equals(null) ? true : false;
    }

    @Override
    public UserDto getUser(String userId) {
        return null;
    }

    @Override
    public boolean duplicate(String userId) {
        return false;
    }

    @Override
    public boolean deleteUser(String userId) {
        return false;
    }

    @Override
    public Map<String, String> login(String userId, String password) {

        User user = userRepository.findByUserId(userId).get();
        if(user.equals(null))
            return null;
        String nickName = user.getNickName();
        String baekjoonId = user.getBaekjoonId();
        String language = user.getLanguage();

        Map<String, String> result = new HashMap<>();
        result.put("nickName", nickName);
        result.put("baekjoonId",baekjoonId);
        result.put("language", language);
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userId, password);

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String JWT = tokenConfig.tokenMaking(authentication,result);
        log.info("create Token",JWT);
        result.put("jwt", JWT);
        return result;
    }
}
