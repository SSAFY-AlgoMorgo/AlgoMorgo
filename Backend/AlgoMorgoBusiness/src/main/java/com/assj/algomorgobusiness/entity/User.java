package com.assj.algomorgobusiness.entity;

import com.assj.algomorgobusiness.dto.UserDto;
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

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id", length = 20, unique = true)
    private String userId;

    @Column(name = "language", length = 10)
    private String language;

    @Column(name = "nickname", nullable = false, length = 50)
    private String nickName;

    @Column(name = "baekjoon_id", length = 50)
    private String baekjoonId;

    @Column(name = "password")
    private String password;

    @Enumerated(EnumType.STRING)
    private Status status = Status.Activate;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Mission> missions = new ArrayList<>();

}
