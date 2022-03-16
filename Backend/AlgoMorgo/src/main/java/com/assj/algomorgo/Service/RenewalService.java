package com.assj.algomorgo.Service;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

public interface RenewalService {
    public HttpResponse<String> renewalLog(String userId) throws IOException, InterruptedException;
}
