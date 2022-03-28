package com.assj.algomorgobusiness.service.user;


import com.assj.algomorgobusiness.config.TokenConfig;
import com.assj.algomorgobusiness.dto.AlgorithmDto;
import com.assj.algomorgobusiness.dto.UserDto;
import com.assj.algomorgobusiness.entity.Status;
import com.assj.algomorgobusiness.entity.User;
import com.assj.algomorgobusiness.repository.BaekjoonUserRepository;
import com.assj.algomorgobusiness.repository.UserRepository;
import com.google.gson.*;
import com.google.gson.stream.JsonReader;
import jdk.nashorn.internal.parser.JSONParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BaekjoonUserRepository baekjoonUserRepository;

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
        if(userRepository.findByNickName(userDto.getNickName()).orElse(null) != null){
            throw new RuntimeException("이미 사용 중인 닉네임입니다.");
        }
        if(baekjoonUserRepository.findByUserName(userDto.getBaekjoonId()).orElse(null) == null){
            throw new RuntimeException("서비스 제공이 불가능한 사용자입니다. solved.ac 연동을 확인해주시고, 다이아 1이상이거나 브론즈 1이하인지 확인해주세요.");
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
        if(user == null)
            return false;
        if(!passwordEncoder.matches(userDto.getPassword(), user.getPassword()))
            //바꾸고자 할 때 확인 받은 비밀번호와 원래 비밀번호가 일치하는지 확인
            return false;
        //JWT로 사용자를 확인 하지만, 회원정보 수정 시에 패스워드를 잘못입력하면 회원 수정이 불가능
        user.setNickName(userDto.getNickName());
        user.setLanguage(userDto.getLanguage());

        return !userRepository.save(user).equals(null) ? true : false;
    }

    @Override
    public boolean updateUser(UserDto userDto, String password) {
        User user = userRepository.findByUserId(userDto.getUserId()).get();
        if(user == null)
            return false;
        if(!passwordEncoder.matches(userDto.getPassword(), user.getPassword()))
            return false;
        //JWT로 사용자를 확인 하지만, 회원정보 수정 시에 패스워드를 잘못입력하면 회원 수정이 불가능
        user.setNickName(userDto.getNickName());
        user.setLanguage(userDto.getLanguage());
        user.setPassword(passwordEncoder.encode(password));

        return !userRepository.save(user).equals(null) ? true : false;
    }

    @Override
    public Map<String, Object> getUser(String userId) {

        User user = userRepository.findByUserId(userId).get();
        if(user == null)
            return null;
        Map<String, Object> result = new HashMap<>();
        String nickName = user.getNickName();
        String language = user.getLanguage();
        String baekjoonId = user.getBaekjoonId();
        UserDto userDto = new UserDto().builder().nickName(nickName).language(language).baekjoonId(baekjoonId).build();
        Map<Integer,AlgorithmDto> solved = getSolved(baekjoonId);
        result.put("userSolvedInfo", solved);
        result.put("userInfo", userDto);
        return result;
    }

    private Map<Integer,AlgorithmDto> getSolved(String baekjoonId) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity entity = new HttpEntity("parameters",headers);
        int page = 1;
        String url = "https://solved.ac/api/v3/search/problem?query=solved_by:"+baekjoonId+"&page=";
        Gson gson = new Gson();

        ResponseEntity<Map> responseEntity = restTemplate.exchange(url+page, HttpMethod.GET, entity, Map.class);

        if(responseEntity.getStatusCode() != HttpStatus.OK)
            return null;
        int count = (int) responseEntity.getBody().get("count") ;
        List<Object> items = (ArrayList<Object>) responseEntity.getBody().get("items");

        if(count > 100){
            while(page*100<count) {
                page++;
                responseEntity = restTemplate.exchange(url + page, HttpMethod.GET, entity, Map.class);
                if (responseEntity.getStatusCode() == HttpStatus.TOO_MANY_REQUESTS) {
                    try {
                        Thread.sleep(600_000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                List<Object> newItems = (ArrayList<Object>) responseEntity.getBody().get("items");
                int size= newItems.size();
                int i=0;
                while (i<size) {
                    items.add(newItems.get(i++));
                }
            }
        }
//        items.stream().forEach(item -> log.info(item.toString()));
        Map<Integer, AlgorithmDto> result = new HashMap<>();
        JsonParser jsonParser = new JsonParser();
        items.stream().forEach(item ->{
            Map<String, Object> data = (Map<String, Object>) item;
            List<Object> tags = (ArrayList<Object>) data.get("tags");
            int size = tags.size();
            int i =0;
            while(i<size){
                Map<String, Object> tagInfo = (Map<String, Object>) tags.get(i++);
                Integer tagId = (Integer) tagInfo.get("bojTagId");
                AlgorithmDto algorithmDto = result.getOrDefault(tagId,null);
                int cnt = algorithmDto == null ? 1 : algorithmDto.getCnt()+1;
                List<Object> displayNames = (ArrayList<Object>) tagInfo.get("displayNames");
                log.debug(displayNames.toString());
                Map<String, Object> engMap = (Map<String, Object>) displayNames.get(0);
                Map<String, Object> korMap = (Map<String, Object>) displayNames.get(1);
                String kor = (String) korMap.get("name");
                String eng = (String) engMap.get("name");
                AlgorithmDto inputData = new AlgorithmDto(cnt, kor, eng);
                result.put(tagId, inputData);
            }

        });
        return result;
    }

    @Override
    public boolean duplicate(String userId) {

        User user = userRepository.findByUserId(userId).get();
        if(user != null)
            return false;
        return true;
    }

    @Override
    public boolean deleteUser(String userId,String password) {
        User user = userRepository.findByUserId(userId).get();
        if(user == null)
            return false;
        if(!passwordEncoder.matches(password, user.getPassword()))
            return false;
        user.setStatus(Status.Deactivate);

        return true;
    }

    @Override
    public Map<String, String> login(String userId, String password) {

        User user = userRepository.findByUserId(userId).get();

        if(user.equals(null))
            return null;
        if(user.getStatus() != Status.Activate)
            return null;
        if(!passwordEncoder.matches(password,user.getPassword()))
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
