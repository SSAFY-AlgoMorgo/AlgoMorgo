package com.assj.algomorgo.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "mission")
public class Mission {

    @Id
    @Column(name = "mission_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long missionId;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    @Column(name = "success_date")
    private LocalDateTime successDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "problem_id")
    private Problem problem;

}
