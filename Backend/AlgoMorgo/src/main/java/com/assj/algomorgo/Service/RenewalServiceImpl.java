package com.assj.algomorgo.Service;

import com.assj.algomorgo.Entity.Misson;
import com.assj.algomorgo.Repository.MissonRepository;
import com.assj.algomorgo.Repository.RenewalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class RenewalServiceImpl implements RenewalService{

    @Autowired
    RenewalRepository renewalRepo;

    @Autowired
    MissonRepository missonRepo;

    @Override
    public HttpResponse<String> renewalLog(String userId) throws IOException, InterruptedException {
        //userId 이용해서 baekjoonId 가져오기
        String baekjoonId = renewalRepo.findBaekjoonId(userId);
        //baekjoonId,solved api 이용해서 유저가 푼 문제 목록 가져오기
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://solved.ac/api/v3/search/problem?query=solved_by%3A"+baekjoonId))
                .header("Content-Type", "application/json")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> logResponse = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        List<String> logs = new ArrayList<>();
        System.out.println(logResponse.body());
        //userId 이용해서 Misson 목록 중 success_date가 null인 리스트 가져오기
        List<Misson> unsolvedList = missonRepo.getMisson(userId);
        //unsolvedList와 logResponse를 비교하며 클리어한 미션이 있는지 확인
        for(int i=0; i< unsolvedList.size(); i++){
            for(int j=0; j< logs.size(); j++){
                if(unsolvedList.get(i).problemId.equals(logs.get(j))){
                    //있다면 그 미션의 create_date와 현재 시간 비교해서 오늘 푼건지 확인
                    String curTime = "";
                    if(unsolvedList.get(i).createDate == curTime){
                        //오늘 풀었다면 그 row의 success_data를 현재시간으로 갱신
                        missonRepo.updateMisson(unsolvedList.get(i).missonId,curTime);
                        //성공 메세지 전달? 혹은 방금 푼 문제의 번호 전달?
                    }
                }
            }
        }




        return logResponse;
    }
}
