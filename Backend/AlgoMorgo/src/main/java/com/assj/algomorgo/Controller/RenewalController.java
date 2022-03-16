package com.assj.algomorgo.Controller;

import com.assj.algomorgo.Service.RenewalService;
import com.assj.algomorgo.Service.RenewalServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

@RestController
@RequestMapping("/batch")
public class RenewalController {

    @Autowired
    private RenewalServiceImpl renewalService;

    @GetMapping("/renewal/{userId}")
    public HttpResponse<String> renewalLog(@PathVariable("userId") String userId) throws IOException, InterruptedException {
        HttpResponse<String> result = renewalService.renewalLog(userId);
        return result;
    }
}
