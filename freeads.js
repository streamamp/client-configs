var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    adUnitsToRefresh: [
        'Unit1',
        'Unit5',
        'StickyAd',
        'Unit19',
        'Unit20'
    ],
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'Freeads/freeads',
    token: 'wV3zzoH23nzNGPEmUj2SFDy9WS45lmIjazYhl8LJTqAXLNdEwL8bo7qcsyRlSVPg',
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
            path: '/306025875/Freeads/Unit1',
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
                        ],
                        [
                            970,
                            90
                        ],
                        [
                            320,
                            100
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                         '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276079,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                         '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: '14568897'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '58625'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        tagid: '58626'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58624'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '331334',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        siteId: '331335',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '327408',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540514728',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790393',
                        adSlot: 'Freeads_Unit1_HeroBanner_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790392',
                        adSlot: 'Freeads_Unit1_HeroBanner_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790384',
                        adSlot: 'Freeads_Unit1_HeroBanner_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 14554026
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 14554053
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14553953
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16836379
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 16836400
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16836286
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
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
                '729 - 1338': [
                    [
                        728,
                        90
                    ]
                ],
                '469 - 728': [
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '0 - 468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit5',
            path: '/306025875/Freeads/Unit5',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
                            600
                        ],
                        [
                            300,
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
                            300,
                            1050
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'pubmatic',
                    labelAny: [
                       '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538478',
                        adSlot: 'Freeads_Unit5_sky1_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538529',
                        adSlot: 'Freeads_Unit5_sky1_300x600@300x600'
                    }
                },
                 {
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790408',
                        adSlot: 'Freeads_Unit5_sky1_160x600@160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        dmxid: 276080,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: '14568898'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '58632'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '90238'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        tagid: '71529'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '331341',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '438333',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        siteId: '379896',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        unit: '540514732',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 14554212
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                       '729 - 1338'
                    ],
                    params: {
                        placementId: 18038177
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                         '0 - 468'
                    ],
                    params: {
                        placementId: 16207619
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16836504
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ],
                    [
                        300,
                        1050
                    ]
                ],
                '729 - 1338': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ]
                ],
                '0 - 468': [
                    [
                        300,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/306025875/Freeads/Unit6',
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
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            300,
                            1050
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'pubmatic',
                    labelAny: [
                       '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538490',
                        adSlot: 'Freeads_Unit6_sky2_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538530',
                        adSlot: 'Freeads_Unit6_sky2_300x600@300x600'
                    }
                },
                 {
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790410',
                        adSlot: 'Freeads_Unit6_sky2_160x600@160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        dmxid: 276081,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: '14568903'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '58633'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '90239'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        tagid: '71530'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '331342',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '438334',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        siteId: '379897',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        unit: '540514734',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 14554213
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                         '729 - 1338'
                    ],
                    params: {
                        placementId: 18038179
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                         '0 - 468'
                    ],
                    params: {
                        placementId: 16207624
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16836524
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ],
                    [
                        300,
                        1050
                    ]
                ],
                '729 - 1338': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ]
                ],
                '0 - 468': [
                    [
                        300,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/306025875/Freeads/Unit7',
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
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790411',
                        adSlot: 'Freeads_Unit7_MPU_300x250@300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276082,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: '14568904'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58634'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '331343',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540514735',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14554214
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16836526
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729 - 1338': [
                    [
                        300,
                        250
                    ]
                ],
                '469 - 728': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit9',
            path: '/306025875/Freeads/Unit9',
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
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790413',
                        adSlot: 'Freeads_Unit9_DMPU_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                       '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790414',
                        adSlot: 'Freeads_Unit9_DMPU_300x250@300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276095,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                       placementId: '14568920'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '58636'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58637'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '331346',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '331345',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        unit: '540514737',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540514737',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 14554219
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14554221
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16836530
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16836531
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '729 - 1338': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '469 - 728': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0 - 468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit12',
            path: '/306025875/Freeads/Unit12',
            mediaTypes: {
                banner: {
                    sizes: [
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1799966',
                        adSlot: 'Freeads_Unit13_MidListing1_320x50@320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276083,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: '14568905'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58642'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '331584',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540556169',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14682164
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16836924
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [

                ],
                '729 - 1338': [
                    [
                        320,
                        50
                    ]
                ],
                '469 - 728': [
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0 - 468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'StickyAd',
            path: '/306025875/Freeads/StickyAd',
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
            isSticky: true,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1790416',
                        adSlot: 'Freeads_Unit11_Sticky_320x50@320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276088,
                        memberid: 100615
                    }
                },
                 {
                    bidder: 'districtm',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        placementId: '14568910'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58639'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        siteId: '331349',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        unit: '540514739',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14554223
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16836881
                    }
                }
            ],
            breakpoints: {
                '0 - 468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit15',
            path: '/306025875/Freeads/Unit15',
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
                        ],
                        [
                            320,
                            100
                        ],
                        [
                            468,
                            60
                        ],
                        [
                            970,
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1799970',
                        adSlot: 'Freeads_Unit16_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1799971',
                        adSlot: 'Freeads_Unit16_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1809120',
                        adSlot: 'Freeads_Unit16_970x250@970x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276084,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: '14568906'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '58647'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        tagid: '58653'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58646'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '331588',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        siteId: '335328',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '331589',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        unit: '540556172',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        unit: '540556172',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540556172',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 14682226
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 14736970
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14682225
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16836935
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 16836936
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16836934
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
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
                '729 - 1338': [
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
                    ]
                ],
                '469 - 728': [
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '0 - 468': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit19',
            path: '/306025875/Freeads/Unit19',
            mediaTypes: {
                banner: {
                    sizes: [
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1860158',
                        adSlot: 'Freeads_Unit20_300x250@300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 276085,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: '14568907'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '58658'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '343688',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540617534',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 15005015
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '729 - 1338',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16837046
                    }
                }
            ],
            breakpoints: {
                '729 - 1338': [
                    [
                        300,
                        250
                    ]
                ],
                '469 - 728': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0 - 468': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit20',
            path: '/306025875/Freeads/Unit20',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
                            600
                        ],
                        [
                            300,
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
                            300,
                            1050
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1860160',
                        adSlot: 'Freeads_Unit21_Sky3_160x600@160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538491',
                        adSlot: 'Freeads_Unit21_Sky3_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538494',
                        adSlot: 'Freeads_Unit21_Sky3_300x600@300x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        dmxid: 276086,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                       placementId: '14568908'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '58660'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        tagid: '72195'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '343690',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        siteId: '383329',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        unit: '540617535',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        unit: '540617535',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 15005018
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 16279417
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16837062
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 16837081
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        600
                    ],
                    [
                        120,
                        600
                    ],
                    [
                        300,
                        1050
                    ]
                ],
                '729 - 1338': [
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
        {
            code: 'Unit21',
            path: '/306025875/Freeads/Unit21',
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
                            160,
                            600
                        ],
                        [
                            120,
                            600
                        ],
                        [
                            300,
                            1050
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1860160',
                        adSlot: 'Freeads_Unit22_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538492',
                        adSlot: 'Freeads_Unit22_160x600@160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '729 - 1338'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2538493',
                        adSlot: 'Freeads_Unit22_300x250@300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        dmxid: 276087,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: '14568909'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        tagid: '58661'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        tagid: '72196'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        siteId: '343691',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        siteId: '383330',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        unit: '540617537',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        unit: '540617537',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 15005022
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16279418
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999'
                    ],
                    params: {
                        placementId: 16837092
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1339 - 9999',
                        '729 - 1338'
                    ],
                    params: {
                        placementId: 16837093
                    }
                }
            ],
            breakpoints: {
                '1339 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ],
                    [
                        300,
                        1050
                    ]
                ],
                '729 - 1338': [
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
        {
            code: 'div-gpt-ad-1523459538056-0',
            path: '/306025875/Pixel1',
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
            bids: []
        },
        {
            code: '1x1_pixel_7',
            path: '/306025875/1x1_pixel_7',
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
            bids: []
        }
    ],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'banner',
            'Language': 'en',
            'Custom Links Displayed on Initial Screen': ["[Privacy Policy](https://help.freeads.co.uk/support/solutions/articles/47000874377-privacy-cookie-data-policy )"],
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
            'Publisher Name': 'FreeAds',
            'Publisher Logo': 'https://static.amp.services/logos/freeads-medium-onblue.png',
            'Initial Screen Title Text': 'Cookies & Advertising',
            'Consent Scope': 'service'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000'
            },
            link: {
                textColor: '#000000',
                isUnderlined: true
            },
            primaryButton: {
                backgroundColor: '#66B152',
                borderColor: 'transparent',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#5ba149',
                borderColor: '#FFFFFF',
                textColor: '#FFFFFF'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                textColor: '#000000'
            },
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {
                backgroundColor: '#0B63AE',
                borderColor: '#0B63AE'
            },
            toggleOff: {
                backgroundColor: '#FFFFFF',
                borderColor: '#0B63AE'
            },
            additionalStyles: '@media screen and (max-width: 820px) { .qc-cmp-buttons.qc-cmp-primary-buttons, .qc-cmp-nav-bar.qc-cmp-bottom { height: 10rem !important }; }',
            toggleSwitchBorderColor: '#0B63AE',
            toggleStatusTextColor: '#FFFFFF'
        }
    },
    breakpoints: [
        {
            label: '1339 - 9999',
            minWidth: 1339,
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
        },
        {
            label: '729 - 1338',
            minWidth: 729,
            maxWidth: 1338,
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
                ],
                [
                    320,
                    50
                ],
                [
                    970,
                    250
                ]
            ]
        },
        {
            label: '469 - 728',
            minWidth: 469,
            maxWidth: 728,
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
        },
        {
            label: '0 - 468',
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
                ]
            ]
        }
    ]
};
