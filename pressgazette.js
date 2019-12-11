var streamampConfig = {
    gptSingleRequestEnabled: true,
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    adUnitsToRefresh:['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7'],
    maxRefreshTime: 120,
    minRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'GlobalData/pressgazette',
    token: 'DhZCdUe9k7Kv27xxSUWogZc4hrAjroHM4f5lp3D4vWTQXvtUchvpFiGVFXO7Va0S',
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
            path: '/5269235/Press_Gazette/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
                        ],
                        [
                            970,
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
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'GD_PressGazette_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_PressGazette_Unit1_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        dmxid: 161677,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        dmxid: 161676,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 174730,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        tagid: '67341'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '67342'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67340'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970',
                //         '490 - 759',
                //         '0 - 489'
                //
                //     ],
                //     params: {
                //         placementId: 1202331
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        siteId: '308080',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '308082',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308077',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        unit: '539287557',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        publisherId: '2527009',
                        adSlot: 'PressGazette_Unit1_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '2527010',
                        adSlot: 'PressGazette_Unit1_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527008',
                        adSlot: 'PressGazette_Unit1_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        placementId: 12103778
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 12103783
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103775
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759'
                    ],
                    params: {
                        placementId: 17428288
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 17428291
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428286
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ]
                ],
                '760 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '490 - 759': [
                    [
                        728,
                        90
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 489': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/5269235/Press_Gazette/Unit2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            600
                        ],
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
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_PressGazette_Unit2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161680,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161679,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67343'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67344'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970'
                //     ],
                //     params: {
                //         placementId: 1202332
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308083',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308084',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        unit: '539287567',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527011',
                        adSlot: 'PressGazette_Unit2_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527012',
                        adSlot: 'PressGazette_Unit2_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103784
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103786
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428293
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428295
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '760 - 970': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit3',
            path: '/5269235/Press_Gazette/Unit3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            600
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            50
                        ],
                        [
                            320,
                            100
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
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_PressGazette_Unit3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161682,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 161681,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 235454,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67345'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67347'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67346'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970',
                //         '490 - 759',
                //         '0 - 489'
                //     ],
                //     params: {
                //         placementId: 1202333
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308086',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308088',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308087',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        unit: '539287574',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527014',
                        adSlot: 'PressGazette_Unit3_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527013',
                        adSlot: 'PressGazette_Unit3_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527015',
                        adSlot: 'PressGazette_Unit3_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103787
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103790
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        placementId: 13768721
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428307
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428309
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428308
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '760 - 970': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '490 - 759': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 489': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit4',
            path: '/5269235/Press_Gazette/Unit4',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            600
                        ],
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
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_PressGazette_Unit4_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161684,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161683,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67348'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67349'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970'
                //     ],
                //     params: {
                //         placementId: 1202334
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308090',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308091',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        unit: '539287575',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527016',
                        adSlot: 'PressGazette_Unit4_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527017',
                        adSlot: 'PressGazette_Unit4_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103793
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103795
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428313
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428318
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '760 - 970': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit5',
            path: '/5269235/Press_Gazette/Unit5',
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
                        ],
                        [
                            320,
                            100
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
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'GD_PressGazette_Unit5_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_PressGazette_Unit5_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161689,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 161685,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 161686,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67352'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67350'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67351'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970',
                //         '490 - 759',
                //         '0 - 489'
                //     ],
                //     params: {
                //         placementId: 1202335
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308096',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308093',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308094',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        unit: '539287578',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527019',
                        adSlot: 'PressGazette_Unit5_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527020',
                        adSlot: 'PressGazette_Unit5_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527018',
                        adSlot: 'PressGazette_Unit5_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103801
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103797
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103798
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428323
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428321
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428322
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '760 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '490 - 759': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 489': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/5269235/Press_Gazette/Unit6',
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
                        ],
                        [
                            320,
                            100
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
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_PressGazette_Unit6_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 161690,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 235455,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67353'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67354'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970',
                //         '490 - 759',
                //         '0 - 489'
                //     ],
                //     params: {
                //         placementId: 1202336
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308098',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308099',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        unit: '539287579',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527022',
                        adSlot: 'PressGazette_Unit6_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527021',
                        adSlot: 'PressGazette_Unit6_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103806
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        placementId: 13768722
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428325
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428329
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '760 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '490 - 759': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 489': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/5269235/Press_Gazette/Unit7',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
                        ],
                        [
                            728,
                            90
                        ],
                        [
                            970,
                            250
                        ],
                        [
                            320,
                            50
                        ],
                        [
                            320,
                            100
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
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'GD_PressGazette_Unit7_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_PressGazette_Unit7_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 161691,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        dmxid: 161694,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        dmxid: 161696,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        dmxid: 161692,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67355'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        tagid: '67357'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '67358'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        tagid: '67356'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '760 - 970',
                //         '490 - 759',
                //         '0 - 489'
                //     ],
                //     params: {
                //         placementId: 1202337
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308101',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        siteId: '308104',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '308106',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        siteId: '308102',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        unit: '539287583',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527024',
                        adSlot: 'PressGazette_Unit7_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        publisherId: '2527023',
                        adSlot: 'PressGazette_Unit7_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        publisherId: '2527025',
                        adSlot: 'PressGazette_Unit7_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '2527026',
                        adSlot: 'PressGazette_Unit7_970x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103808
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 12103814
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 12103817
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 12103809
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970',
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428331
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '760 - 970'
                    ],
                    params: {
                        placementId: 17428335
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 17428336
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '490 - 759',
                        '0 - 489'
                    ],
                    params: {
                        placementId: 17428333
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ]
                ],
                '760 - 970': [
                    [
                        300,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '490 - 759': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 489': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        }
    ],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
            'Display Persistent Consent Link': true,
            'No Option': true,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [
                1,
                2,
                3,
                4,
                5
            ],
            'Initial Screen Body Text': 'We and our partners use technology such as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click below to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.',
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'PressGazette',
            'Publisher Logo': 'https://static.amp.services/logos/press-gazette-logo.png'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#ffffff',
                textColor: '#000000'
            },
            link: {
                textColor: '#e70022'
            },
            primaryButton: {
                backgroundColor: '#e70022',
                borderColor: '#e70022',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#ff3552',
                borderColor: '#ff3552',
                textColor: '#FFFFFF'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: '#ffffff',
                textColor: '#000000'
            },
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {
                backgroundColor: '#e70022',
                borderColor: '#e70022'
            },
            toggleOff: {
                backgroundColor: '#000000',
                borderColor: '#000000'
            },
            additionalStyles: '',
            toggleSwitchBorderColor: '#000000',
            toggleStatusTextColor: '#000000'
        }
    },
    breakpoints: [
        {
            label: '971 - 9999',
            minWidth: 971,
            maxWidth: 9999,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    970,
                    250
                ],
                [
                    300,
                    600
                ],
                [
                    300,
                    250
                ]
            ]
        },
        {
            label: '760 - 970',
            minWidth: 760,
            maxWidth: 970,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    300,
                    600
                ],
                [
                    300,
                    250
                ]
            ]
        },
        {
            label: '490 - 759',
            minWidth: 490,
            maxWidth: 759,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    320,
                    50
                ],
                [
                    300,
                    250
                ]
            ]
        },
        {
            label: '0 - 489',
            minWidth: 0,
            maxWidth: 489,
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
}