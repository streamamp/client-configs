var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 120,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'ArmyRumourServiceLimited/arrse2018',
    token: 'l7IcLIac3Sav7dcr7U5fPc5JZciYsahYUrUcj8BFgG9BVzPGFUFt62SgogYc2JAS',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: '2018_ARRSE_Safe_Front_Head',
            path: '/1060220/2018_ARRSE/2018A_safe_front_head',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit1_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180902,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263411'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76089'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76090'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76091'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000 - 9999',
                //         '750 - 999',
                //         '400 - 749',
                //         '0 - 399'
                //     ],
                //     params: {
                //         placementId: 1201147
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '394567',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '394567',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '394567',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775517',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788081
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788084
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788087
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_Front_Centre',
            path: '/1060220/2018_ARRSE/2018A_safe_front_centre',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit2_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit2_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180903,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263412'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76092'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76093'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76094'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000 - 9999',
                //         '750 - 999',
                //         '400 - 749',
                //         '0 - 399'
                //     ],
                //     params: {
                //         placementId: 1201154
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396041',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396041',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396041',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775518',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788100
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788104
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788105
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_Front_Foot',
            path: '/1060220/2018_ARRSE/2018A_safe_front_foot',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit3_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit3_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180904,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263413'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76095'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76096'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76097'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396042',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396042',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396042',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775520',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788107
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788110
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788111
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_ROS_Head',
            path: '/1060220/2018_ARRSE/2018A_safe_ros_head',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit4_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit4_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 354861,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '15767451'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76098'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76099'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76100'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396043',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396043',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396043',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775526',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12795373
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12795379
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12795381
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_ROS_Foot',
            path: '/1060220/2018_ARRSE/2018A_safe_ros_foot',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit5_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit5_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180906,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263415'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76101'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76102'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76103'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396044',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396044',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396044',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775523',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12795383
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12795385
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12795388
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_ROS_Side',
            path: '/1060220/2018_ARRSE/2018A_safe_ros_side',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
                            600
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Army_Unit6_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180907,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263416'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76104'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76105'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        tagid: '76106'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76107'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396045',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396045',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        siteId: '396045',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396045',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539783875',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12795391
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12795392
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        placementId: 12795393
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 399'
                    ],
                    params: {
                        placementId: 13682972
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '750 - 999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '400 - 749': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '0 - 399': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_ROS_Posn1',
            path: '/1060220/2018_ARRSE/2018A_safe_ros_posn1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit7_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit7_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180908,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263417'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76108'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76109'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76110'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396046',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396046',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396046',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775521',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788113
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788115
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788116
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_ROS_Posn2',
            path: '/1060220/2018_ARRSE/2018A_safe_ros_posn2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit8_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit8_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                         '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180909,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                         '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263418'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76111'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76112'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76113'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396047',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396047',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396047',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775522',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788117
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788119
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788129
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_Safe_ROS_Posn3',
            path: '/1060220/2018_ARRSE/2018A_safe_ros_posn3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit9_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit9_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 354865,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '15767592'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76114'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76115'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76116'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396048',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396048',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396048',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775523',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788130
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788133
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788135
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_NoSafe_ROS_Head',
            path: '/1060220/2018_ARRSE_NoAdsense/2018A_nsafe_ros_head',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit11_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                         '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180911,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                         '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263420'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76122'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76123'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396050',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396050',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775526',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788145
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788146
                    }
                }
            ],
            breakpoints: {
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_NoSafe_ROS_Foot',
            path: '/1060220/2018_ARRSE_NoAdsense/2018A_nsafe_ros_foot',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit12_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit12_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180912,
                        memberid: 100615
                    }
                },
                 {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                       placementId: '12263421'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76124'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76125'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76126'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396051',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396051',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396051',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775527',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788147
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788149
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788156
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_NoSafe_ROS_Posn1',
            path: '/1060220/2018_ARRSE_NoAdsense/2018A_nsafe_ros_posn1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit13_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit13_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180913,
                        memberid: 100615
                    }
                },
               {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263422'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76127'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76128'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76129'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396052',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396052',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396052',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775530',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788157
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788175
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788178
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_NoSafe_ROS_Posn2',
            path: '/1060220/2018_ARRSE_NoAdsense/2018A_nsafe_ros_posn2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit14_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit14_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 354866,
                        memberid: 100615
                    }
                },
                 {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '15767678'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76130'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76131'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76132'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396053',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396053',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396053',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775531',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788184
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788190
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788192
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_NoSafe_ROS_Posn3',
            path: '/1060220/2018_ARRSE_NoAdsense/2018A_nsafe_ros_posn3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Army_Unit15_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Army_Unit15_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180915,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                       placementId: '12263424'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        tagid: '76133'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76134'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76135'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        siteId: '396054',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396054',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396054',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775536',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999'
                    ],
                    params: {
                        placementId: 12788193
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788196
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788199
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '750 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '400 - 749': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 399': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: '2018_ARRSE_NoSafe_ROS_Side',
            path: '/1060220/2018_ARRSE_NoAdsense/2018A_nsafe_ros_side',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
                            600
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Army_Unit16_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        dmxid: 180916,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: '12263425'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749'
                    ],
                    params: {
                        tagid: '76136'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76137'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        tagid: '76138'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 399'
                    ],
                    params: {
                        tagid: '76139'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749'
                    ],
                    params: {
                        siteId: '396055',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396055',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        siteId: '396055',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 399'
                    ],
                    params: {
                        siteId: '396055',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        unit: '539775537',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749'
                    ],
                    params: {
                        placementId: 12788210
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '750 - 999',
                        '400 - 749',
                        '0 - 399'
                    ],
                    params: {
                        placementId: 12788213
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        placementId: 12788214
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 399'
                    ],
                    params: {
                        placementId: 13682946
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '750 - 999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '400 - 749': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '0 - 399': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ]
            }
        }
    ],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            'Language': 'en',
            'Display Persistent Consent Link': false,
            'No Option': false,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [
                1,
                2,
                3,
                4,
                5
            ],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'Army Rumour Service'
        },
        hasCustomStyles: false,
        styles: {
            ui: {},
            link: {},
            primaryButton: {},
            primaryButtonHover: {},
            isSecondaryButtonHidden: false,
            secondaryButton: {},
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {},
            toggleOff: {},
            additionalStyles: ''
        }
    },
    breakpoints: [
        {
            label: '1000 - 9999',
            minWidth: 1000,
            maxWidth: 9999,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    160,
                    600
                ],
                [
                    300,
                    250
                ],
                [
                    300,
                    600
                ]
            ]
        },
        {
            label: '750 - 999',
            minWidth: 750,
            maxWidth: 999,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    160,
                    600
                ],
                [
                    300,
                    250
                ]
            ]
        },
        {
            label: '400 - 749',
            minWidth: 400,
            maxWidth: 749,
            sizesSupported: [
                [
                    300,
                    250
                ],
                [
                    320,
                    50
                ],
                [
                    160,
                    600
                ]
            ]
        },
        {
            label: '0 - 399',
            minWidth: 0,
            maxWidth: 399,
            sizesSupported: [
                [
                    320,
                    50
                ],
                [
                    300,
                    250
                ]
            ]
        }
    ]
};
