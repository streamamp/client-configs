var streamampConfig = {
    levelTargeting: true,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 30,
    maxRefreshTime: 45,
    adUnitsToRefresh: ['Unit3', 'Unit4', 'Unit7'],
    hasCollapsedEmptyDivs: true,
    publisher_id: 'LifeCycleMarketing/EmmasDiary',
    token: 'dRmhajv0oocSdMB6sHAk8phDIUTGMKTRPZfbBLKPxzfxOc2QgYQs5HR6WIxnIwJs',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'Unit1',
            path: '/21802520772/EmmasDiary/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
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
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'LCM_EmmasDiary_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'LCM_EmmasDiary_Unit1_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        dmxid: 368324,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        dmxid: 368325,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        placementId: 22007939
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 22007939
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        siteId: '359021',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        siteId: '361087',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        unit: '540708435',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        unit: '540708435',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        placementId: 15693492
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 15693497
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        placementId: 16837115
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 16837155
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '729-969': [
                    [
                        728,
                        90
                    ]
                ],
                '469-728': [
                    [
                        728,
                        90
                    ]
                ],
                '0-468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/21802520772/EmmasDiary/Unit2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
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
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'LCM_EmmasDiary_Unit2_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        dmxid: 368326,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        placementId: 22013289
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        siteId: '361088',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        unit: '540708436',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        placementId: 15693493
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728'
                    ],
                    params: {
                        placementId: 16837169
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '729-969': [
                    [
                        728,
                        90
                    ]
                ],
                '469-728': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Unit3',
            path: '/21802520772/EmmasDiary/Unit3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
                            600
                        ],
                        [
                            120,
                            600
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'LCM_EmmasDiary_Unit3_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 368327,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 22013290
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361089',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540708437',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15693494
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 16837170
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit4',
            path: '/21802520772/EmmasDiary/Unit4',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
                            600
                        ],
                        [
                            120,
                            600
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'LCM_EmmasDiary_Unit4_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 368328,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 22013291
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361090',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540708438',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15693495
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 16837171
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit5',
            path: '/21802520772/EmmasDiary/Unit5',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
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
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'LCM_EmmasDiary_Unit5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        dmxid: 368329,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 22013292
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        siteId: '361091',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        unit: '540708439',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 15693498
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 16837173
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729-969': [
                    [
                        300,
                        250
                    ]
                ],
                '469-728': [
                    [
                        300,
                        250
                    ]
                ],
                '0-468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/21802520772/EmmasDiary/Unit6',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
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
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'LCM_EmmasDiary_Unit6_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        dmxid: 368330,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 22013293
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        siteId: '361092',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        unit: '540708440',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 15693499
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 16837174
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729-969': [
                    [
                        300,
                        250
                    ]
                ],
                '469-728': [
                    [
                        300,
                        250
                    ]
                ],
                '0-468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/21802520772/EmmasDiary/Unit7',
            mediaTypes: {
                banner: {
                    sizes: [
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
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'LCM_EmmasDiary_Unit7_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        dmxid: 368331,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 22013294
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        siteId: '361093',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        unit: '540708441',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 15693500
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 16837175
                    }
                }
            ],
            breakpoints: {
                '0-468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit8',
            path: '/21802520772/EmmasDiary/Unit8',
            mediaTypes: {
                banner: {
                    sizes: [
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
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'LCM_EmmasDiary_Unit8_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        dmxid: 368332,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 22028088
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        siteId: '370837',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        unit: '540745584',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 15974408
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-468'
                    ],
                    params: {
                        placementId: 16837218
                    }
                }
            ],
            breakpoints: {
                '0-468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit9',
            path: '/21802520772/EmmasDiary/Unit9',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
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
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'LCM_EmmasDiary_Unit9_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        dmxid: 368333,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 22028090
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        siteId: '370838',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        unit: '540745586',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 15974412
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 16837251
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729-969': [
                    [
                        300,
                        250
                    ]
                ],
                '469-728': [
                    [
                        300,
                        250
                    ]
                ],
                '0-468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit10',
            path: '/21802520772/EmmasDiary/Unit10',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
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
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'LCM_EmmasDiary_Unit10_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        dmxid: 368334,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 22028091
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        siteId: '370839',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        unit: '540745585',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 15974417
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970-9999',
                        '729-969',
                        '469-728',
                        '0-468'
                    ],
                    params: {
                        placementId: 16837252
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729-969': [
                    [
                        300,
                        250
                    ]
                ],
                '469-728': [
                    [
                        300,
                        250
                    ]
                ],
                '0-468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit12.1',
            path: '/21802520772/EmmasDiary/Unit12.1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit12.2',
            path: '/21802520772/EmmasDiary/Unit12.2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit12.3',
            path: '/21802520772/EmmasDiary/Unit12.3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit12.4',
            path: '/21802520772/EmmasDiary/Unit12.4',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit12.5',
            path: '/21802520772/EmmasDiary/Unit12.5',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit12.6',
            path: '/21802520772/EmmasDiary/Unit12.6',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit12.7',
            path: '/21802520772/EmmasDiary/Unit12.7',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            280,
                            345
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        280,
                        345
                    ]
                ],
                '729-969': [
                    [
                        280,
                        345
                    ]
                ],
                '469-728': [
                    [
                        280,
                        345
                    ]
                ],
                '0-468': [
                    [
                        280,
                        345
                    ]
                ]
            }
        },
        {
            code: 'Unit13.1',
            path: '/21802520772/EmmasDiary/Unit13.1',
            mediaTypes: {
                banner: {
                    sizes: [
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
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        320,
                        50
                    ]
                ],
                '729-969': [
                    [
                        320,
                        50
                    ]
                ],
                '469-728': [
                    [
                        320,
                        50
                    ]
                ],
                '0-468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit13.7',
            path: '/21802520772/EmmasDiary/Unit13.7',
            mediaTypes: {
                banner: {
                    sizes: [
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
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        320,
                        50
                    ]
                ],
                '729-969': [
                    [
                        320,
                        50
                    ]
                ],
                '469-728': [
                    [
                        320,
                        50
                    ]
                ],
                '0-468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit14.1',
            path: '/21802520772/EmmasDiary/Unit14.1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            760,
                            360
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        760,
                        360
                    ]
                ],
                '729-969': [
                    [
                        760,
                        360
                    ]
                ],
                '469-728': [
                    [
                        760,
                        360
                    ]
                ],
                '0-468': [
                    [
                        760,
                        360
                    ]
                ]
            }
        },
        {
            code: 'Unit14.2',
            path: '/21802520772/EmmasDiary/Unit14.2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            760,
                            360
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        760,
                        360
                    ]
                ],
                '729-969': [
                    [
                        760,
                        360
                    ]
                ],
                '469-728': [
                    [
                        760,
                        360
                    ]
                ],
                '0-468': [
                    [
                        760,
                        360
                    ]
                ]
            }
        },
        {
            code: 'Unit14.3',
            path: '/21802520772/EmmasDiary/Unit14.3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            760,
                            360
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        760,
                        360
                    ]
                ],
                '729-969': [
                    [
                        760,
                        360
                    ]
                ],
                '469-728': [
                    [
                        760,
                        360
                    ]
                ],
                '0-468': [
                    [
                        760,
                        360
                    ]
                ]
            }
        },
        {
            code: 'Unit14.4',
            path: '/21802520772/EmmasDiary/Unit14.4',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729-969': [
                    [
                        300,
                        250
                    ]
                ],
                '469-728': [
                    [
                        300,
                        250
                    ]
                ],
                '0-468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit15.1',
            path: '/21802520772/EmmasDiary/Unit15.1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            640,
                            320
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        640,
                        320
                    ]
                ],
                '729-969': [
                    [
                        640,
                        320
                    ]
                ],
                '469-728': [
                    [
                        640,
                        320
                    ]
                ],
                '0-468': [
                    [
                        640,
                        320
                    ]
                ]
            }
        }
    ],
    cmp: {
        isEnabled: false
    },
    breakpoints: [
        {
            label: '970-9999',
            minWidth: 970,
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
                    120,
                    600
                ],
                [
                    280,
                    345
                ],
                [
                    320,
                    50
                ],
                [
                    760,
                    360
                ],
                [
                    640,
                    320
                ]
            ]
        },
        {
            label: '729-969',
            minWidth: 729,
            maxWidth: 969,
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
                    280,
                    345
                ],
                [
                    320,
                    50
                ],
                [
                    760,
                    360
                ],
                [
                    640,
                    320
                ]
            ]
        },
        {
            label: '469-728',
            minWidth: 469,
            maxWidth: 728,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    300,
                    250
                ],
                [
                    280,
                    345
                ],
                [
                    320,
                    50
                ],
                [
                    760,
                    360
                ],
                [
                    640,
                    320
                ]
            ]
        },
        {
            label: '0-468',
            minWidth: 0,
            maxWidth: 468,
            sizesSupported: [
                [
                    320,
                    50
                ],
                [
                    300,
                    250
                ],
                [
                    280,
                    345
                ],
                [
                    760,
                    360
                ],
                [
                    640,
                    320
                ]
            ]
        }
    ]
}