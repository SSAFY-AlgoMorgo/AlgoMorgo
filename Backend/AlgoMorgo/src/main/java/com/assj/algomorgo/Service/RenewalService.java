package com.assj.algomorgo.Service;

import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.List;

public interface RenewalService {
    public ResponseEntity<String> renewalLog(String userId) throws IOException, InterruptedException;
}
