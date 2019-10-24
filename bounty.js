var streamampConfig = {
    a9Enabled: true,
    bidTimeout: 1.2,
    levelTargeting: true,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'Bounty/Bounty',
    token: 'Qa9aYLKDB0nODgkWfJ7kRFkJQv992EoedYNib1mZ7QelSxPNaArAhhWlPEJmDj0V',
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    toggleOffUrls: [
        {
            "level": "2",
            "url": "Miscarriage-And-Loss"
        },
        {
            "url": "bereavement-c"
        },
        {
            "level": "2",
            "url": "miscarriage-and-baby-loss"
        },
        {
            "level": "2",
            "url": "bereavement-p"
        }
    ],
    adUnits: [
        {
            code: 'Unit1',
            path: '/4465849/HB-Bounty/Unit1',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'Bounty_Unit1_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Bounty_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Bounty_Unit1_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        dmxid: 163086,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 163085,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 163083,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        tagid: '40633'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        tagid: '67189'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40632'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        placementId: 1186788
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 1186788
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186788
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        siteId: '219261',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        siteId: '305689',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305691',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        unit: '539295100',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        unit: '539295100',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295100',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        publisherId: '1378783',
                        adSlot: 'new_bounty_unit1_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        publisherId: '1378785',
                        adSlot: 'new_bounty_unit1_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378787',
                        adSlot: 'new_bounty_unit1_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        placementId: 11564871
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 11564875
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 11564882
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999'
                    ],
                    params: {
                        placementId: 16806119
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 16806140
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806141
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        970,
                        90
                    ]
                ],
                '769 - 999': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '469 - 768': [
                    [
                        320,
                        50
                    ]
                ],
                '0 - 468': [
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
            code: 'Unit2',
            path: '/4465849/HB-Bounty/Unit2',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 229433,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222168,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 229436,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 229434,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40634'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67190'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186791
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186791
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 1186791
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305697',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305696',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295179',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295179',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        unit: '539295179',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378793',
                        adSlot: 'new_bounty_unit2_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'new_bounty_unit2_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        placementId: 11564888
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450465
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 11564883
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 11564886
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806143
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806142
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '769 - 999': [
                    [
                        300,
                        250
                    ]
                ],
                '469 - 768': [
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
            code: 'Unit3',
            path: '/4465849/HB-Bounty/Unit3',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Bounty_Unit3_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Bounty_Unit3_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 163095,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 163093,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        tagid: '67191'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67192'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 1186794
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186794
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        siteId: '305698',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305700',
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
                        '769 - 999'
                    ],
                    params: {
                        unit: '539295188',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295188',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        publisherId: '1378795',
                        adSlot: 'new_bounty_unit3_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378797',
                        adSlot: 'new_bounty_unit3_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 11564896
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 11564904
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 16806157
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806160
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '769 - 999': [
                    [
                        728,
                        90
                    ]
                ],
                '469 - 768': [
                    [
                        320,
                        50
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
            code: 'Unit4',
            path: '/4465849/HB-Bounty/Unit4',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'Bounty_Unit4_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 163098,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        tagid: '40639'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 1186796
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        siteId: '305701',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        unit: '539295194',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        publisherId: '1378799',
                        adSlot: 'new_bounty_unit4_160x600@160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 11564908
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 16806161
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
                        120,
                        600
                    ]
                ],
                '769 - 999': [
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
            code: 'Unit5',
            path: '/4465849/HB-Bounty/Unit5',
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
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            970,
                            250
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 222170,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222171,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 163099,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        dmxid: 371439,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        tagid: '67193'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40644'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40640'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 1186800
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186800
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186800
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        siteId: '305702',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305703',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305705',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        siteId: '407612',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        unit: '539295201',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295201',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295201',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        publisherId: '1378802',
                        adSlot: 'new_bounty_unit5_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378803',
                        adSlot: 'new_bounty_unit5_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378806',
                        adSlot: 'new_bounty_unit5_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 13450470
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450473
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 11564910
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 16837001
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999'
                    ],
                    params: {
                        placementId: 16806162
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806164
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806166
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        970,
                        250
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        970,
                        90
                    ]
                ],
                '769 - 999': [
                    [
                        728,
                        90
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        970,
                        250
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        970,
                        90
                    ]
                ],
                '469 - 768': [
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
                ],
                '0 - 468': [
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
            code: 'Unit2A',
            path: '/4465849/HB-Bounty/Unit2A',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit2A_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222172,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 232385,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67194'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40645'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186801
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '220333',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305706',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295210',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378813',
                        adSlot: 'new_bounty_unit2a_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '2239279',
                        adSlot: 'new_bounty_unit2a_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450476
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13695538
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806144
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806145
                    }
                }
            ],
            breakpoints: {
                '469 - 768': [
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
                ],
                '0 - 468': [
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
            code: 'Unit2B',
            path: '/4465849/HB-Bounty/Unit2B',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit2B_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222173,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 232386,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67195'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40646'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186802
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '220334',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305707',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295560',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378815',
                        adSlot: 'new_bounty_unit2b_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '2239280',
                        adSlot: 'new_bounty_unit2b_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450480
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13695544
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806147
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806148
                    }
                }
            ],
            breakpoints: {
                '469 - 768': [
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
                ],
                '0 - 468': [
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
            code: 'Unit2C',
            path: '/4465849/HB-Bounty/Unit2C',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit2C_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222174,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 232387,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67196'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40647'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186803
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '220335',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305708',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295569',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378817',
                        adSlot: 'new_bounty_unit2c_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '2239281',
                        adSlot: 'new_bounty_unit2c_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450482
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13695549
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806149
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806151
                    }
                }
            ],
            breakpoints: {
                '469 - 768': [
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
                ],
                '0 - 468': [
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
            code: 'Unit2D',
            path: '/4465849/HB-Bounty/Unit2D',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit2D_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222175,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 232388,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67197'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40648'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186804
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '220336',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305709',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295581',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378819',
                        adSlot: 'new_bounty_unit2d_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '2239282',
                        adSlot: 'new_bounty_unit2d_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450483
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13695554
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806152
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806153
                    }
                }
            ],
            breakpoints: {
                '469 - 768': [
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
                ],
                '0 - 468': [
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
            code: 'Unit2E',
            path: '/4465849/HB-Bounty/Unit2E',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Bounty_Unit2E_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 222176,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        dmxid: 232389,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '67198'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '40649'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 1186805
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '220337',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305710',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        unit: '539295582',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '1378820',
                        adSlot: 'new_bounty_unit2e_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '2239283',
                        adSlot: 'new_bounty_unit2e_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13450485
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 13695558
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806154
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 768',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16806155
                    }
                }
            ],
            breakpoints: {
                '469 - 768': [
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
                ],
                '0 - 468': [
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
            code: 'div-gpt-ad-1551251628819-0',
            path: '/4465849/HB-Bounty/Unit7',
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
            bids: [
                {
                    bidder: 'justpremium',
                    labelAny: [
                        '1000 - 9999',
                        '769 - 999',
                        '0 - 468',
                        '469 - 768'
                    ],
                    params: {
                        zone: '70919',
                        allow: []
                    }
                }
            ],
            breakpoints: {
                '1000 - 9999': [
                    [
                        1,
                        1
                    ]
                ],
                '769 - 999': [
                    [
                        1,
                        1
                    ]
                ],
                '0 - 468': [
                    [
                        1,
                        1
                    ]
                ],
                '469 - 768': [
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
            'UI Layout': 'banner',
            Language: 'en',
            'Display Persistent Consent Link': true,
            'No Option': false,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.<div><h4 class="qc-cmp-bold-messaging">What are cookies?</h4><p class="qc-cmp-bounty-p">Cookies are small pieces of information that are downloaded to your computer or mobile device when you visit a website. Your browser sends these cookies back to the website every time you visit again. Bounty.com uses cookies and other analytics tools to give our Mums the best and most relevant online experience.</p><p class="qc-cmp-bounty-p">Cookies are stored within your browser and each one contains:</p><ul class="qc-cmp-bounty-ul"><li class="qc-cmp-bounty-li">The name of the server the cookie was sent from</li><li class="qc-cmp-bounty-li">The lifetime of the cookie</li><li class="qc-cmp-bounty-li">A value – usually a randomly generated unique number.</li></ul><h4 class="qc-cmp-bold-messaging">How does Bounty use cookies?</h4><p class="qc-cmp-bounty-p">We use cookies to enhance and personalise your experience on Bounty (Bounty.com and Bountyweb.co.uk) including:</p><ul class="qc-cmp-bounty-ul"><li class="qc-cmp-bounty-li">authenticating you on the website;</li><li class="qc-cmp-bounty-li">remembering any preferences which you may set along with registration / account information;</li><li class="qc-cmp-bounty-li">to see and analyse which pages or content are most visited or vice versa, helping us to keep Bounty relevant and up to date;</li><li class="qc-cmp-bounty-li">to personalise the content and advertisements provided to you through Bounty.com;</li><li class="qc-cmp-bounty-li">and to present and help measure and research the effectiveness of advertisements and email communications.</li></ul><h4 class="qc-cmp-bold-messaging">How long do cookies stay on my computer or mobile device?</h4><p class="qc-cmp-bounty-p">Session cookies – these only last until you close your browser. They are usually used to track the pages that you visit so that information can be customised for you for that particular visit. Session cookies generally make it possible to navigate through the website smoothly.</p><p class="qc-cmp-bounty-p">Persistent cookies – these are stored on your computer or mobile device until you delete them or they reach their expiry date. These may, for example, be used to remember your preferences when you use the site.</p><h4 class="qc-cmp-bold-messaging">How do I disable cookies?</h4><p class="qc-cmp-bounty-p">If you would prefer not to accept our cookies you can disable them at any time – click <a href="http://www.bounty.com/info/manage-cookies">here</a> to find out how. If you disable cookies many elements of this site will no longer work as they are intended to.</p><p class="qc-cmp-bounty-p">We also use the Google DoubleClick cookie to target our advertising more accurately. If you would like to opt out of use of the DoubleClick cookie you can do so at any time by visiting the <a href="http://www.google.com/settings/ads/onweb">Google opt-out page</a> or the <a href="http://www.networkadvertising.org/choices">Network Advertising Initiative opt-out page</a>.</p><p class="qc-cmp-bounty-p">For more information please visit our:</p><p class="qc-cmp-bounty-p"><a href="http://www.bounty.com/info/cookie-policy">Cookie policy</a></p><p class="qc-cmp-bounty-p"><a href="http://www.bounty.com/info/privacy-policy">Privacy policy</a></p></div><hr />',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'Bounty'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#ffffff',
                textColor: '#000000'
            },
            link: {
                textColor: '#02327c',
                isUnderlined: true
            },
            primaryButton: {
                backgroundColor: '#02327c',
                borderColor: '#02327c',
                textColor: '#ffffff'
            },
            primaryButtonHover: {
                backgroundColor: '#4693fc',
                borderColor: '#4693fc',
                textColor: '#ffffff'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: '#ffffff',
                textColor: '#02327c'
            },
            secondaryButtonHover: {},
            tableHeader: {
                backgroundColor: '#fafafa'
            },
            tableRow: {
                backgroundColor: '#ffffff'
            },
            toggleOn: {
                backgroundColor: '#02327c',
                borderColor: '#02327c'
            },
            toggleOff: {
                backgroundColor: '#000000',
                borderColor: '#000000'
            },
            toggleSwitchBorderColor: '#000000',
            toggleStatusTextColor: '#000000',
            customCSS: '.qc-cmp-bounty-p {font-size: 14px!important;}.qc-cmp-bounty-ul {padding-left: 20px!important;}.qc-cmp-bounty-li {font-size: 14px!important;list-style-type: disc!important;}.qc-cmp-purposes-header .qc-cmp-button {display: none!important;}'
        }
    },
    breakpoints: [
        {
            label: '1000 - 9999',
            minWidth: 1000,
            maxWidth: 9999,
            sizesSupported: [
                [
                    970,
                    250
                ],
                [
                    728,
                    90
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
                    1,
                    1
                ]
            ]
        },
        {
            label: '769 - 999',
            minWidth: 769,
            maxWidth: 999,
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
                    970,
                    250
                ],
                [
                    160,
                    600
                ],
                [
                    1,
                    1
                ]
            ]
        },
        {
            label: '469 - 768',
            minWidth: 469,
            maxWidth: 768,
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
                    1,
                    1
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
                ],
                [
                    1,
                    1
                ]
            ]
        }
    ]
}
