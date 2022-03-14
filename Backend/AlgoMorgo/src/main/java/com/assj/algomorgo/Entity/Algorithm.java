package com.assj.algomorgo.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "algorithm")
public class Algorithm {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "algorithm_id")
    private int algorithmId;

    @Column(name = "algorithm_kor")
    private String algorithmKor;

    @Column(name = "algorithm_eng")
    private String algorithmEng;
}
