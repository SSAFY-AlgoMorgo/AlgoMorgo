import json
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import pymysql
import time
import pandas as pd
import numpy as np
from numpy import dot
from numpy.linalg import norm
import math
import pickle

algoList = ['lis',
        'math',
        'knuth',
        'pick',
        'lazyprop',
        'ad_hoc',
        'geometry',
        'planar_graph',
        'offline_dynamic_connectivity',
        'matroid',
        'hirschberg',
        'dp_bitfield',
        'priority_queue',
        'bipartite_graph',
        'two_pointer',
        'geometry_3d',
        'flow',
        'pigeonhole_principle',
        'hash_set',
        'parametric_search',
        'case_work',
        'suffix_tree',
        'sprague_grundy',
        'divide_and_conquer',
        'discrete_log',
        'pollard_rho',
        'stoer_wagner',
        'interpreter',
        'rabin_karp',
        'fft',
        'sparse_table',
        'manacher',
        'burnside',
        'splay_tree',
        'line_intersection',
        'greedy',
        'euler_phi',
        'euclidean',
        'trie',
        'scc',
        'backtracking',
        'prefix_sum',
        'cactus',
        'constructive',
        'general_matching',
        'modular_multiplicative_inverse',
        'mitm',
        'suffix_array',
        'dp',
        'generating_function',
        'green',
        'floyd_warshall',
        'graph_traversal',
        'precomputation',
        'deque',
        'dfs',
        'arithmetic',
        'dp_deque',
        'primality_test',
        'exponentiation_by_squaring',
        'number_theory',
        'smaller_to_larger',
        'biconnected_component',
        'bayes',
        'discrete_sqrt',
        'kitamasa',
        'berlekamp_massey',
        'half_plane_intersection',
        'regex',
        'cht',
        '2_sat',
        'centroid',
        'data_structures',
        'heuristics',
        'palindrome_tree',
        'physics',
        'calculus',
        'mcmf',
        'majority_vote',
        'dijkstra',
        'euler_tour_technique',
        'geometry_hyper',
        'flt',
        'sweeping',
        'link_cut_tree',
        'topological_sorting',
        'bidirectional_search',
        'linearity_of_expectation',
        'duality',
        'sorting',
        'extended_euclidean',
        'hld',
        'inclusion_and_exclusion',
        'segtree',
        'multi_segtree',
        'gaussian_elimination',
        'miller_rabin',
        'hall',
        'simulation',
        'tree_isomorphism',
        'numerical_analysis',
        'hungarian',
        'statistics',
        'probability',
        'mobius_inversion',
        'monotone_queue_optimization',
        'stack',
        'a_star',
        'sqrt_decomposition',
        'mst',
        'tree_set',
        'bipartite_matching',
        'coordinate_compression',
        'alien',
        'crt',
        'articulation',
        'polygon_area',
        'dual_graph',
        'bfs',
        'dancing_links',
        'linear_algebra',
        'simulated_annealing',
        'rb_tree',
        'mfmc',
        'offline_queries',
        'point_in_non_convex_polygon',
        'z',
        'bitmask',
        'convex_hull',
        'eulerian_path',
        'randomization',
        'divide_and_conquer_optimization',
        'lca',
        'pst',
        'min_enclosing_circle',
        'knuth_x',
        'combinatorics',
        'dominator_tree',
        'hashing',
        'linked_list',
        'bruteforcing',
        'linear_programming',
        'top_tree',
        'stable_marriage',
        'rope',
        'dp_connection_profile',
        'slope_trick',
        'graphs',
        'sliding_window',
        'sieve',
        'game_theory',
        'string',
        'binary_search',
        'dp_tree',
        'centroid_decomposition',
        'trees',
        'tree_compression',
        'kmp',
        'rotating_calipers',
        'permutation_cycle_decomposition',
        'euler_characteristic',
        'bellman_ford',
        'voronoi',
        'tsp',
        'lucas',
        'arbitrary_precision',
        'pythagoras',
        '0_1_bfs',
        'bitset',
        'delaunay',
        'pbs',
        'merge_sort_tree',
        'ternary_search',
        'queue',
        'implementation',
        'parsing',
        'disjoint_set',
        'knapsack',
        'point_in_convex_polygon',
        'mo',
        'directed_mst',
        'recursion',
        'aho_corasick'
    ]
def cos_sim(a, b):
    return dot(a, b)/(norm(a)*norm(b))

@api_view(['GET'])
def recommendProblem(request):
    with open('probPerUser.pickle','rb') as fr:
        probPerUser = pickle.load(fr)

    with open('problemWithTag.pickle','rb') as fr:
        problemWithTag = pickle.load(fr)
    df = pd.read_csv('sample.csv')
    # [0] : 0번 유저 값 = 모두 다 0 , [num][0] : 해당 row의 userId 값 = num , [num][1] ~ [num][끝] : num인 유저의 각 태그 별 푼 갯수
    dfToArray = df.values
    conn = pymysql.connect(host='j6c204.p.ssafy.io', port=3306, user='C204', password='ssafyC204', db='logTest', charset='utf8')
    cur = conn.cursor()
    sql = 'SELECT * FROM user'
    cur.execute(sql)
    # 가져온 유저들 : users[num] = 가져온 유저 중 num번째 유저 정보들, users[num][0] : id(pk), users[num][1] : language, users[num][2] : nickname, users[num][3] : password, users[num][4] : baekjoonId, users[num][5] : userId
    users = cur.fetchall()
    result = []
    for user in users:
        baekjoonId = user[4]
        userId = user[5]
        url = "https://solved.ac/api/v3/search/problem?query=solved_by%3A" + str(baekjoonId)
        response = requests.get(url)
        userSolvedNums = []
        userSolvedTagNums = np.zeros(len(algoList))
        if response.status_code == 200:
            # 우리 유저가 푼 문제가 100문제가 넘어서 api를 더 불러야되는지 체크
            count = int(int(response.json()['count'])/100)
            curUserLogs = response.json()['items']
            for log in curUserLogs:
                probNum = int(log['problemId'])
                userSolvedNums.append(probNum)
                tags = problemWithTag[probNum]
                for i in range(1, len(tags)):
                    tag = tags[i]
                    for i in range(0, len(algoList)):
                        if (tag == algoList[i]):
                            userSolvedTagNums[i] += 1
            if(count >= 1):
                for i in range(count):
                    print("22222222222222222222")
                    url2 = url + "&page="+str(i+2)
                    response2 = requests.get(url2)
                    if response2.status_code == 200:
                        curUserLogs = response2.json()['items']
                        for log in curUserLogs:
                            probNum = int(log['problemId'])
                            userSolvedNums.append(probNum)
                            tags = problemWithTag[probNum]
                            for i in range(1, len(tags)):
                                tag = tags[i]
                                for i in range(0, len(algoList)):
                                    if (tag == algoList[i]):
                                        userSolvedTagNums[i] += 1
        tmpTier = 0
        for num in userSolvedNums:
            tmpTier += problemWithTag[num][0]
        userTier = int(tmpTier/len(userSolvedNums))
        print("userTier: "+str(userTier))
        # sample에 있는 값들과 코사인 유사도를 구해서 배열에 저장
        csWithAllUser = []
        for i in range(38383):
            if(i == 0):
                continue;
            oppUserId = int(dfToArray[i][0])
            oppTagNums = dfToArray[i][1:]
            item = {
                'userId': 0,
                'cs': 0.0
            }
            tmp = cos_sim(userSolvedTagNums,oppTagNums)
            if math.isnan(tmp):
                continue
            item['userId'] = oppUserId
            item['cs'] = cos_sim(userSolvedTagNums,oppTagNums)

            csWithAllUser.append(item)
        # 코사인 유사도 기준으로 sorting
        sortedCs = sorted(csWithAllUser, key=(lambda x:x['cs']))
        mission = []
        lowCnt = 0
        highCnt = 0
        for i in range(0,len(sortedCs)):
            print(i)
            if i> len(sortedCs)/2:
                break
            if(lowCnt <7):
                candidate = []
                lowId = int(sortedCs[i]['userId'])
                logs = probPerUser[lowId]
                print("lowId : "+str(lowId))
                for key in logs.keys():
                    if not(key in userSolvedNums):
                        candidate.append(key)
                for prob in candidate:
                    if lowCnt == 7:
                        break
                    probTier = problemWithTag[prob][0]
                    if probTier >= userTier-2 and probTier <= userTier+1:
                        mission.append(prob)
                        lowCnt += 1
            if(highCnt <3):
                candidate = []
                highId = int(sortedCs[len(sortedCs)-1-i]['userId'])
                logs = probPerUser[highId]
                print("highId : " + str(highId))
                for key in logs.keys():
                    if not (key in userSolvedNums):
                        candidate.append(key)
                for prob in candidate:
                    if highCnt == 3:
                        break
                    probTier = problemWithTag[prob][0]
                    if probTier >= userTier - 2 and probTier <= userTier + 1:
                        mission.append(prob)
                        highCnt += 1
            if(len(mission) == 10):
                break

        missionPerUser = {
            'user_id' : userId,
            'missions' : mission
        }
        result.append(missionPerUser)


    return Response(result,status = status.HTTP_200_OK);

def createFromLog(problemWithTag):
    KNNTable = np.zeros((38383, len(algoList)))
    probPerUser = [{} for i in range(38383)]
    conn = pymysql.connect(host='j6c204.p.ssafy.io', port=3306, user='C204', password='ssafyC204', db='logTest',
                           charset='utf8')
    cur = conn.cursor()
    sql = 'SELECT problem_num FROM problem order by problem_id'
    cur.execute(sql)
    probs = cur.fetchall()
    sql2 = 'SELECT * FROM log'
    cur.execute(sql2)
    logs = cur.fetchall()

    for log in logs:
        print(log[0])
        # log[0] : 로그 아이디(log_id) , log[1] : 문제 아이디(problem_id), log[2] : 유저 아이디(user_id)
        try:
            probNum = probs[log[1] - 1][0]
            tags = problemWithTag[probNum]
            probPerUser[log[2]][probNum] = tags[0]
            for i in range(1,len(tags)):
                tag = tags[i]
                for i in range(0, len(algoList)):
                    if (tag == algoList[i]):
                        KNNTable[log[2]][i] += 1
        except:
            df = pd.DataFrame(KNNTable)
            df.to_csv('sample.csv', sep=',')
    df = pd.DataFrame(KNNTable)
    df.to_csv('sample.csv', sep=',')
    with open('probPerUser.pickle', 'wb') as fw:
        pickle.dump(probPerUser,fw)

def createProblemWithTag():
    problemWithTag = {}
    for i in range(1, 230):
        url = "https://solved.ac/api/v3/search/problem?query=%22%22&page=" + str(i)
        response = requests.get(url)
        if response.status_code == 200:
            print(i)
            for res in response.json()['items']:
                probNum = res['problemId']
                tmp = []
                tmp.append(res['level'])
                for tag in res['tags']:
                    tagName = tag['key']
                    tmp.append(tagName)
                problemWithTag[probNum] = tmp
        if response.status_code == 429:
            print(response.reason)
            time.sleep(600)
    with open('problemWithTag.pickle', 'wb') as fw:
        pickle.dump(problemWithTag,fw)