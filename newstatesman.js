var streamampConfig = {
    gptSingleRequestEnabled: false,
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    adUnitsToRefresh: ["Unit1", "Unit2", "Unit3", "Unit4", "Unit5", "Unit6"],
    minRefreshTime: 120,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'GlobalData/NewStatesman',
    token: 'yzING9LuUg5JbqK6GLkzLQdjJWG6sTwZIbHsRthez6c6QysPXOtCP1us4R6lgTeC',
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
            path: '/5269235/New_Statesman/Unit1',
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
                            970,
                            90
                        ],
                        [
                            468,
                            60
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
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'GD_NewStatesman_Unit1_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        dmxid: 158964,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        dmxid: 158967,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        tagid: '40577'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        tagid: '40577'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999',
                //         '728-899'
                //     ],
                //     params: {
                //         placementId: 1202307
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        siteId: '307641',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        siteId: '307645',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        unit: '539029204',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526302',
                        adSlot: 'NewStatesman_Unit1_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526304',
                        adSlot: 'NewStatesman_Unit1_970x250@970x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        placementId: 11487418
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        placementId: 11487424
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        placementId: 17395605
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        placementId: 17395608
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ],
                    [
                        970,
                        90
                    ]
                ],
                '900-999': [
                    [
                        728,
                        90
                    ]
                ],
                '728-899': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/5269235/New_Statesman/Unit2',
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
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        dmxid: 159780,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        dmxid: 159781,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 158968,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        tagid: '40579'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        tagid: '40578'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '67331'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999',
                //         '728-899',
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202308
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        siteId: '307646',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        siteId: '307648',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307647',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        unit: '539029205',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526305',
                        adSlot: 'NewStatesman_Unit2_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526307',
                        adSlot: 'NewStatesman_Unit2_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526306',
                        adSlot: 'NewStatesman_Unit2_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 11487425
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 11552774
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 11487427
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 17395609
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 17395611
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17395610
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '900-999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '728-899': [
                    [
                        300,
                        250
                    ]
                ],
                '0-727': [
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
            code: 'Unit3',
            path: '/5269235/New_Statesman/Unit3',
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
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        dmxid: 159783,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        dmxid: 159784,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 159782,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        tagid: '40581'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        tagid: '40582'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '40587'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999',
                //         '728-899',
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202309
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        siteId: '307650',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        siteId: '307651',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307654',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        unit: '539029206',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        unit: '539029206',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526308',
                        adSlot: 'NewStatesman_Unit3_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526309',
                        adSlot: 'NewStatesman_Unit3_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526310',
                        adSlot: 'NewStatesman_Unit3_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 11487438
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 11487441
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 13509873
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 17395612
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 17395613
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17395614
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '900-999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '728-899': [
                    [
                        300,
                        250
                    ]
                ],
                '0-727': [
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
            path: '/5269235/New_Statesman/Unit4',
            mediaTypes: {
                banner: {
                    sizes: [
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
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit4_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        dmxid: 159787,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        dmxid: 159786,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 235456,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        tagid: '40582'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        tagid: '40583'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '67332'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999',
                //         '728-899',
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202310
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        siteId: '307652',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        siteId: '307655',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307653',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        unit: '539029209',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526313',
                        adSlot: 'NewStatesman_Unit4_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526311',
                        adSlot: 'NewStatesman_Unit4_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526312',
                        adSlot: 'NewStatesman_Unit4_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 11487443
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 11487446
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 13768710
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 17395615
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 17395618
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17395617
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '900-999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '728-899': [
                    [
                        300,
                        250
                    ]
                ],
                '0-727': [
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
            code: 'Unit5',
            path: '/5269235/New_Statesman/Unit5',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            970,
                            250
                        ],
                        [
                            728,
                            90
                        ],
                        [
                            320,
                            50
                        ],
                        [
                            970,
                            90
                        ],
                        [
                            468,
                            60
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
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'GD_NewStatesman_Unit5_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_NewStatesman_Unit5_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        dmxid: 356430,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        dmxid: 174648,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        dmxid: 159788,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        tagid: '67333'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        tagid: '40584'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        tagid: '40585'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999',
                //         '728-899',
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202311
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        siteId: '307657',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        siteId: '307659',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        siteId: '307661',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        unit: '539029210',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526314',
                        adSlot: 'NewStatesman_Unit5_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526315',
                        adSlot: 'NewStatesman_Unit5_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526316',
                        adSlot: 'NewStatesman_Unit5_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        placementId: 13509258
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        placementId: 11487492
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 11487494
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999'
                    ],
                    params: {
                        placementId: 17395619
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999',
                        '728-899'
                    ],
                    params: {
                        placementId: 17395620
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '728-899',
                        '0-727'
                    ],
                    params: {
                        placementId: 17395621
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        90
                    ]
                ],
                '900-999': [
                    [
                        728,
                        90
                    ]
                ],
                '728-899': [
                    [
                        728,
                        90
                    ],
                    [
                        320,
                        50
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '0-727': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/5269235/New_Statesman/Unit6',
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
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit6_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        dmxid: 174649,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        tagid: '40588'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999'
                //     ],
                //     params: {
                //         placementId: 1202312
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        siteId: '307664',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        unit: '539029211',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526318',
                        adSlot: 'NewStatesman_Unit6_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 11487495
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 17414952
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '900-999': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/5269235/New_Statesman/Unit7',
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
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit7_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        dmxid: 161232,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        tagid: '67335'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1000-9999',
                //         '900-999'
                //     ],
                //     params: {
                //         placementId: 1202313
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        siteId: '307665',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        unit: '539063152',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526319',
                        adSlot: 'NewStatesman_Unit7_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 11591112
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000-9999',
                        '900-999'
                    ],
                    params: {
                        placementId: 17414953
                    }
                }
            ],
            breakpoints: {
                '1000-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '900-999': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit8',
            path: '/5269235/New_Statesman/New_Statesman_Unit8',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            320,
                            50
                        ],
                        [
                            300,
                            250
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
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit8_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356422,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356423,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '40589'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202314
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307666',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307668',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        unit: '539856321',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526320',
                        adSlot: 'NewStatesman_Unit8_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526321',
                        adSlot: 'NewStatesman_Unit8_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944770
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944772
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414954
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414955
                    }
                }
            ],
            breakpoints: {
                '0-727': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit9',
            path: '/5269235/New_Statesman/Unit9',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            320,
                            50
                        ],
                        [
                            300,
                            250
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
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit9_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356424,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356425,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '40590'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202315
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307669',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307671',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        unit: '539856322',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526322',
                        adSlot: 'NewStatesman_Unit9_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526323',
                        adSlot: 'NewStatesman_Unit9_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944781
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944785
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414956
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414957
                    }
                }
            ],
            breakpoints: {
                '0-727': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit10',
            path: '/5269235/New_Statesman/Unit10',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            320,
                            50
                        ],
                        [
                            300,
                            250
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
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit10_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356426,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356427,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '40591'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202316
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307672',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307674',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        unit: '539856323',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526324',
                        adSlot: 'NewStatesman_Unit10_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526325',
                        adSlot: 'NewStatesman_Unit10_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944786
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944789
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414958
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414959
                    }
                }
            ],
            breakpoints: {
                '0-727': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit11',
            path: '/5269235/New_Statesman/Unit11',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            320,
                            50
                        ],
                        [
                            300,
                            250
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
                        '0-727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_NewStatesman_Unit11_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356428,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        dmxid: 356429,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        tagid: '40592'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0-727'
                //     ],
                //     params: {
                //         placementId: 1202317
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307675',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        siteId: '307676',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        unit: '539856324',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526326',
                        adSlot: 'NewStatesman_Unit11_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2526327',
                        adSlot: 'NewStatesman_Unit11_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944790
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 12944792
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414960
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-727'
                    ],
                    params: {
                        placementId: 17414961
                    }
                }
            ],
            breakpoints: {
                '0-727': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'NS_Rich Media',
            path: '/5269235/New_Statesman/NS_Rich Media',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            1,
                            1
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1000-9999': [
                    [
                        1,
                        1
                    ]
                ],
                '900-999': [
                    [
                        1,
                        1
                    ]
                ],
                '728-899': [
                    [
                        1,
                        1
                    ]
                ],
                '0-727': [
                    [
                        1,
                        1
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
            'Publisher Name': 'New Statesman',
            'Publisher Logo': 'https://www.newstatesman.com/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png'
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
            label: '1000-9999',
            minWidth: 1000,
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
            label: '900-999',
            minWidth: 900,
            maxWidth: 999,
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
            label: '728-899',
            minWidth: 728,
            maxWidth: 899,
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
                    320,
                    50
                ]
            ]
        },
        {
            label: '0-727',
            minWidth: 0,
            maxWidth: 727,
            sizesSupported: [
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
    ]
};