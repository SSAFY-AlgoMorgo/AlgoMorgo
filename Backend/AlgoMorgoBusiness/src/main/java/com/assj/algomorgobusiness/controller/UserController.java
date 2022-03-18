package com.assj.algomorgobusiness.controller;

import com.assj.algomorgobusiness.dto.UserDto;
import com.assj.algomorgobusiness.service.user.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/user")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping
    public ResponseEntity registUser(@ResponseBody UserDto userDto){
        if(userService.registUser(userDto))
            return  new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> fetchUser(){
        List<UserDto> result = userService.fetchUser();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateUser(@ResponseBody UserDto userDto){
        if(userService.updateUser(userDto))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") String userId){
        if(userService.deleteUser(userId))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable("userId") String userId){
        UserDto result = userService.getUser(userId);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }

    @GetMapping("/duplicate/check/{userId}")
    public ResponseEntity duplicate(@PathVariable("userId") String userId){
        if(userService.duplicate(userId))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity((HttpStatus.INTERNAL_SERVER_ERROR));
    }


}
