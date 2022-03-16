package com.assj.algomorgo.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "problem")
public class Problem {

    @Id
    @Column(name = "problem_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int problemId;

    @Column(name = "problem_num", nullable = false, unique = true)
    private int problemNum;

    @Column(name = "problem_name", nullable = false, length = 300)
    private String problemName;

    @Column(name = "problem_point")
    @ColumnDefault("100")
    private int problemPoint;

    @Column(name = "problem_solved")
    @ColumnDefault("0")
    private int problemSolved;

    @Column(name = "problem_submit")
    @ColumnDefault("0")
    private Long problemSubmit;
    //maybe 340,000 * 18,492 = 6,440,280,000
    //one person one problem one submit

    @Column(name = "problem_answer", columnDefinition = "char(8)")
    @ColumnDefault("0.0%")
    private String problemAnswer;

    @Column(name = "problem_avg")
    @ColumnDefault("0")
    private Double problemAvg;

//    @ManyToMany
//    @JoinTable(name = "Tag",
//        joinColumns = @JoinColumn(name = "problem_id"),
//        inverseJoinColumns = @JoinColumn(name = "algotirhm_id")
//    )
//    private List<Algorithm> algorithms = new ArrayList<>();
//
//    @ManyToMany
//    @JoinTable(name = "Mission",
//            joinColumns = @JoinColumn(name = "problem_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private List<BaekjoonUser> baekjoonUsers = new ArrayList<>();

    @OneToMany(mappedBy = "algorithm", cascade = CascadeType.ALL)
    private List<Tag> problemHasAlgorithm = new ArrayList<>();

    @OneToMany(mappedBy = "problem", cascade = CascadeType.ALL)
    private List<Log> userSolveProblem = new ArrayList<>();


}
