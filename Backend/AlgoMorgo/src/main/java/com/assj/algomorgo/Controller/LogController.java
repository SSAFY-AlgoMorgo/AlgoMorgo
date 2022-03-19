package com.assj.algomorgo.Controller;

import com.assj.algomorgo.Service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/batch")
public class LogController {

    @Autowired
    private LogService logService;

    @PostMapping("/user/detail")
    public ResponseEntity<?> renewalUserDetail() {
        logService.renewalUserDetail();
        return new ResponseEntity<>("Success insert userDetailData ", HttpStatus.OK);
    }

    @GetMapping("/hi")
    public ResponseEntity<?> getHelloWorld(){
        return new ResponseEntity<>("Hello World", HttpStatus.OK);
    }

}
