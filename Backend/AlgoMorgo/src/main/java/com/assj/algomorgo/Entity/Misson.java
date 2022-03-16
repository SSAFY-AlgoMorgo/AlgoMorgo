package com.assj.algomorgo.Entity;

import javax.persistence.*;

@Entity
public class Misson {
    @Id
    @Column(name = "log_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int missonId;
}
