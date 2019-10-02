var streamampConfig = {
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    refreshBidsTimeout: '30',
    hasCollapsedEmptyDivs: true,
    publisher_id: 'TheAA/TheAA',
    token: 'JZg3CKrEL9GmNHpRn8lsXpTbKx28a3F73qxp4KbFtkwGnR5ygyrx91VHZbh4ahYf',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'MPU',
            path: '/21723740412/TheAA/MPU',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheAA_MPU_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheAA_MPU_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        dmxid: 255307,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        dmxid: 255306,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        tagid: '41378'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        tagid: '41377'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 1206882
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 1206882
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        siteId: '307597',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        siteId: '307596',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        unit: '540546508',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        unit: '540546508',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_mpu_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_mpu_300x250'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079390,
                        sizes: [
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079390,
                        sizes: [
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 14160792
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 14160791
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 16300082
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 16300159
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '970 - 1033': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '728 - 969': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '491 - 727': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '0 - 490': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'leaderboard_header',
            path: '/21723740412/TheAA/leaderboard_header',
            mediaTypes: {
                banner: {
                    sizes: [
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
            isSticky: false,
            safeFrame: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'TheAA_Leaderboard_header_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        dmxid: 255309,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        tagid: '41380'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 1206885
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        siteId: '307603',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        unit: '540546509',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_header_728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079394,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 14160797
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 16300210
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '728 - 969': [
                    [
                        728,
                        90
                    ]
                ],
                '491 - 727': [
                    [
                        468,
                        60
                    ]
                ]
            }
        },
        {
            code: 'leaderboard_footer',
            path: '/21723740412/TheAA/leaderboard_footer',
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
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'TheAA_Leaderboard_footer_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        dmxid: 255311,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        dmxid: 255313,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        tagid: '41382'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        tagid: '41384'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 1206886
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 1206886
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        siteId: '307608',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        siteId: '307610',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        unit: '540546510',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        unit: '540546510',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_footer_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_footer_728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079396,
                        sizes: [
                            57,
                            2
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079396,
                        sizes: [
                            57,
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 14160800
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 14160803
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 16303142
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 16303146
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '970 - 1033': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '728 - 969': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Desktop_print',
            path: '/21723740412/TheAA/Desktop_print',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'TheAA_Desktop_print_728X90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        dmxid: 358635,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        tagid: '64409'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 22019862
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        siteId: '366100',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        unit: '540726797',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_Desktop_print_728X90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1273378,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 15819184
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 17063050
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '970 - 1033': [
                    [
                        728,
                        90
                    ]
                ],
                '728 - 969': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'skyscraper',
            path: '/21723740412/TheAA/skyscraper',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'TheAA_Skyscrapper_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        dmxid: 255315,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        tagid: '41386'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 1206887
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        siteId: '307615',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        unit: '540546511',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_sky_160x600'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079398,
                        sizes: [
                            9
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 14160807
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 16303148
                    }
                }
            ],
            breakpoints: {
                '970 - 1033': [
                    [
                        160,
                        600
                    ]
                ],
                '728 - 969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'skyscraper1',
            path: '/21723740412/TheAA/skyscraper1',
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
                            320,
                            100
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
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'TheAA_Skyscraper1_160x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheAA_Skyscraper1_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheAA_Skyscraper1_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        dmxid: 323457,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        dmxid: 411105,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        dmxid: 411106,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        tagid: '58506'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        tagid: '80034'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        tagid: '80036'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 13300679
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 13300679
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 13300679
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        siteId: '343411',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        siteId: '409352',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        siteId: '409353',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        unit: '540600875',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        unit: '540600875',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        unit: '540600875',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper1_Desktop_160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper1_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper1_300x250'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194868,
                        sizes: [
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194868,
                        sizes: [
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194868,
                        sizes: [
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 14955447
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 16983624
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 16983625
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 17063061
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 17063054
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '0 - 490',
                        '491 - 727',
                        '728 - 969',
                        '970 - 1033'
                    ],
                    params: {
                        placementId: 17063055
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
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
                    ]
                ],
                '0 - 490': [
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
                '491 - 727': [
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
                    ]
                ],
                '728 - 969': [
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
                    ]
                ],
                '970 - 1033': [
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
                    ]
                ]
            }
        },
        {
            code: 'skyscraper2',
            path: '/21723740412/TheAA/skyscraper2',
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
                            320,
                            100
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
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'TheAA_Skyscraper2_160x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheAA_Skyscraper2_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheAA_Skyscraper2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        dmxid: 323458,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        dmxid: 411107,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        dmxid: 411108,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        tagid: '58507'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        tagid: '80038'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        tagid: '80039'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 13300683
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 13300683
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 13300683
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        siteId: '343412',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        siteId: '409354',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        siteId: '409355',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        unit: '540600876',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        unit: '540600876',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        unit: '540600876',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper2_Desktop_160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper2_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper2_300x250'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194872,
                        sizes: [
                            9,
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194872,
                        sizes: [
                            9,
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194872,
                        sizes: [
                            9,
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 14955449
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 16983626
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 16983627
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 17063074
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 17063066
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 17063069
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
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
                    ]
                ],
                '970 - 1033': [
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
                    ]
                ],
                '728 - 969': [
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
                    ]
                ],
                '491 - 727': [
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
                    ]
                ],
                '0 - 490': [
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
            code: 'skyscraper3',
            path: '/21723740412/TheAA/skyscraper3',
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
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'TheAA_Skyscraper3_160x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheAA_Skyscraper3_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheAA_Skyscraper3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        dmxid: 323459,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        dmxid: 411109,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        dmxid: 411110,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        tagid: '58508'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        tagid: '80040'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        tagid: '80041'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 13300684
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 13300684
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 13300684
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        siteId: '343413',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        siteId: '409356',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        siteId: '409357',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        unit: '540600877',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        unit: '540600877',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        unit: '540600877',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper3_Desktop_160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'TheAA_skyscraper3_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        publisherId: '2310110',
                        adSlot: 'TheAA_skyscraper3_300x250'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194874,
                        sizes: [
                            9,
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194874,
                        sizes: [
                            9,
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1194874,
                        sizes: [
                            9,
                            10,
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 14955453
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 16983628
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 16983629
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727'
                    ],
                    params: {
                        placementId: 17063088
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969'
                    ],
                    params: {
                        placementId: 17063078
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1034 - 9999',
                        '970 - 1033',
                        '728 - 969',
                        '491 - 727',
                        '0 - 490'
                    ],
                    params: {
                        placementId: 17063083
                    }
                }
            ],
            breakpoints: {
                '1034 - 9999': [
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
                    ]
                ],
                '970 - 1033': [
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
                    ]
                ],
                '728 - 969': [
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
                    ]
                ],
                '491 - 727': [
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
                    ]
                ],
                '0 - 490': [
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
            code: 'Mobile',
            path: '/21723740412/TheAA/Mobile',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'TheAA_Mobile_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        dmxid: 255316,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        tagid: '41387'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        placementId: 1206888
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        siteId: '307617',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        unit: '540546512',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        publisherId: '1660847',
                        adSlot: 'TheAA_mobile_320x50'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '217768',
                        zoneId: 1079400,
                        sizes: [
                            43
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        placementId: 14160810
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 490'
                    ],
                    params: {
                        placementId: 16303151
                    }
                }
            ],
            breakpoints: {
                '0 - 490': [
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
        isEnabled: false
    },
    breakpoints: [
        {
            label: '1034 - 9999',
            minWidth: 1034,
            maxWidth: 9999,
            sizesSupported: [
                [
                    300,
                    600
                ],
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
                    160,
                    600
                ],
                [
                    120,
                    600
                ]
            ]
        },
        {
            label: '970 - 1033',
            minWidth: 970,
            maxWidth: 1033,
            sizesSupported: [
                [
                    300,
                    600
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
                    728,
                    90
                ],
                [
                    160,
                    600
                ],
                [
                    120,
                    600
                ]
            ]
        },
        {
            label: '728 - 969',
            minWidth: 728,
            maxWidth: 969,
            sizesSupported: [
                [
                    300,
                    600
                ],
                [
                    300,
                    250
                ],
                [
                    728,
                    90
                ],
                [
                    160,
                    600
                ],
                [
                    120,
                    600
                ]
            ]
        },
        {
            label: '491 - 727',
            minWidth: 491,
            maxWidth: 727,
            sizesSupported: [
                [
                    300,
                    600
                ],
                [
                    300,
                    250
                ],
                [
                    468,
                    60
                ],
                [
                    160,
                    600
                ],
                [
                    120,
                    600
                ]
            ]
        },
        {
            label: '0 - 490',
            minWidth: 0,
            maxWidth: 490,
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
                    320,
                    100
                ]
            ]
        }
    ]
}