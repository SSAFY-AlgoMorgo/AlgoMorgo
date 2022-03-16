package com.assj.algomorgo.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "user")
public class User {

    @javax.persistence.Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Id;

    @Id
    @Column(name = "user_id", length = 20)
    private String userId;

    @Column(name = "language", length = 10)
    private String Language;

    @Column(name = "nickname", nullable = false, length = 50)
    private String Nickname;

    @Column(name = "baekjoon_id", length = 50)
    private String baekjoonId;

    @Column(name = "password")
    private String Password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Mission> missions = new ArrayList<>();

}
