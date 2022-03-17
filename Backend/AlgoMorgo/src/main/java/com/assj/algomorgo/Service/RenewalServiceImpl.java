package com.assj.algomorgo.Service;

import com.assj.algomorgo.Entity.Mission;
import com.assj.algomorgo.Repository.MissionRepository;
import com.assj.algomorgo.Repository.RenewalRepository;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class RenewalServiceImpl implements RenewalService{

    @Autowired
    RenewalRepository renewalRepo;

    @Autowired
    MissionRepository missionRepo;

    @Override
    public ResponseEntity<String> renewalLog(String userId) throws IOException, InterruptedException {
        //userId 이용해서 baekjoonId 가져오기
        String baekjoonId = renewalRepo.findBaekjoonId(userId);
        String id = renewalRepo.findId(userId);
        int[] solvedList = null;
        //baekjoonId,solved api 이용해서 유저가 푼 문제 목록 가져오기
        try {
            URL url = new URL("https://solved.ac/api/v3/search/problem?query=solved_by%3A"+baekjoonId);
            HttpURLConnection conn = (HttpURLConnection)url.openConnection();

            conn.setRequestMethod("GET"); // http 메서드
            conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
            conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

            // 서버로부터 데이터 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line = null;

            while((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
                sb.append(line);
            }
            JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
            JSONArray arr = obj.getJSONArray("items");
            solvedList = new int[arr.length()];
            for(int i=0; i<arr.length(); i++){
                solvedList[i] = arr.getJSONObject(i).getInt("problemId");
                System.out.println(solvedList[i]);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        List<String> logs = new ArrayList<>();
        //userId 이용해서 Misson 목록 중 success_date가 null인 리스트 가져오기
        List<Mission> unsolvedList = missionRepo.getMisson(userId);
        //unsolvedList와 logResponse를 비교하며 클리어한 미션이 있는지 확인
        for(int i=0; i< unsolvedList.size(); i++){
            for(int j=0; j< logs.size(); j++){
                if(unsolvedList.get(i).getProblem().getProblemId().equals(logs.get(j))){
                    //있다면 그 미션의 create_date와 현재 시간 비교해서 오늘 푼건지 확인
                    LocalDateTime curTime = null;
                    if(unsolvedList.get(i).getCreateDate() == curTime){
                        //오늘 풀었다면 그 row의 success_date를 현재시간으로 갱신
                        missionRepo.updateMisson(unsolvedList.get(i).getMissionId(),curTime);
                        //성공 메세지 전달? 혹은 방금 푼 문제의 번호 전달?
                    }

                }
            }
        }




        return null;
    }
}
