var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'BritishComedyGuide/BritishComedyGuide',
    token: 'L7KBVbLylqvMApDHR1ughDHnU0qw8jnzpdHvkigEYZ7cTSwnuVISAVrobChsX8z4',
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
            path: '/11915656/BritishComedyguide/Unit1',
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
                        ],
                        [
                            468,
                            60
                        ],
                        [
                            970,
                            90
                        ],
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
            bids: [
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '311860',
                        zoneId: '1583904',
                        // sizes: [
                        //     57,
                        //     2,
                        //     15,
                        //     43
                        // ]
                    }
                },
                {
                    bidder: 'justpremium',
                    labelAny: [
                        '992-9999',
                        '768-991',
                    ],
                    params: {
                        zone: '86983',
                        allow: [
                            'wp',
                            'wv',
                            'hv',
                            'fc',
                            'as',
                            'ci',
                            'sa',
                            'pa',
                            'ca'
                        ]
                    }
                },
                {
                    bidder: 'justpremium',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        zone: '86983',
                        allow: [
                            'mt',
                            'is',
                            'mo',
                            'ms'
                        ]
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'BritishComedyGuide_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BritishComedyGuide_Unit1_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        dmxid: 363259,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: '15887967'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '992-9999'
                    ],
                    params: {
                        tagid: '69874'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        tagid: '69875'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        tagid: '69877'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        tagid: '69876'
                    }
                },
                // {
                // 	bidder: 'improvedigital',
                // 	labelAny: [
                // 		'992-9999',
                // 		'768-991',
                // 		'576–767',
                // 		'0–575'
                //
                // 	],
                // 	params: {
                // 		placementId: 22025967
                // 	}
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '992-9999'
                    ],
                    params: {
                        siteId: '367688',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        siteId: '368178',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        siteId: '368180',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        siteId: '368179',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'

                    ],
                    params: {
                        unit: '540736029',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471217',
                        adSlot: 'BritishComedyGuide_Unit1_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471218',
                        adSlot: 'BritishComedyGuide_Unit1_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471220',
                        adSlot: 'BritishComedyGuide_Unit1_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471219',
                        adSlot: 'BritishComedyGuide_Unit1_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '992-9999'
                    ],
                    params: {
                        placementId: 15887493
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        placementId: 15887494
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: 15887496
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        placementId: 15887495
                    }
                }
            ],
            breakpoints: {
                '992-9999': [
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
                    ],
                    [
                        1,
                        1
                    ]
                ],
                '768-991': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        1,
                        1
                    ]
                ],
                '576–767': [
                    [
                        728,
                        90
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
                        1,
                        1
                    ]
                ],
                '0–575': [
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
                    ],
                    [
                        1,
                        1
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/11915656/BritishComedyguide/Unit2',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '311860',
                        zoneId: '1583906',
                        // sizes: [
                        //     15
                        // ]
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BritishComedyGuide_Unit2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        dmxid: 363260,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: '15888024'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        tagid: '69878'
                    }
                },
                // {
                // 	bidder: 'improvedigital',
                // 	labelAny: [
                // 		'992-9999',
                // 		'768-991',
                // 		'576–767'
                // 	],
                // 	params: {
                // 		placementId: 22025968
                // 	}
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        siteId: '368181',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        unit: '540736031',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471221',
                        adSlot: 'BritishComedyGuide_Unit2_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: 15887497
                    }
                }
            ],
            breakpoints: {
                '992-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '768-991': [
                    [
                        300,
                        250
                    ]
                ],
                '576–767': [
                    [
                        300,
                        250
                    ]
                ],
                '0–575': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit3',
            path: '/11915656/BritishComedyguide/Unit3',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '311860',
                        zoneId: '1583908',
                        // sizes: [
                        //     15
                        // ]
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BritishComedyGuide_Unit3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        dmxid: 363261,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: '15888027'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        tagid: '69879'
                    }
                },
                // {
                // 	bidder: 'improvedigital',
                // 	labelAny: [
                // 		'992-9999',
                // 		'768-991',
                // 		'576–767',
                // 		'0–575'
                // 	],
                // 	params: {
                // 		placementId: 22025969
                // 	}
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        siteId: '368182',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        unit: '540736032',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471222',
                        adSlot: 'BritishComedyGuide_Unit3_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: 15887498
                    }
                }
            ],
            breakpoints: {
                '992-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '768-991': [
                    [
                        300,
                        250
                    ]
                ],
                '576–767': [
                    [
                        300,
                        250
                    ]
                ],
                '0–575': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit4',
            path: '/11915656/BritishComedyguide/Unit4',
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
                            468,
                            60
                        ],
                        [
                            970,
                            90
                        ],
                    ]
                }
            },
            isSticky: false,
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '311860',
                        zoneId: '1583910',
                        // sizes: [
                        //     15,
                        //     2,
                        //     43
                        // ]
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'BritishComedyGuide_Unit4_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BritishComedyGuide_Unit4_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        dmxid: 363262,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: '15888029'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        tagid: '69880'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        tagid: '69882'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        tagid: '69881'
                    }
                },
                // {
                // 	bidder: 'improvedigital',
                // 	labelAny: [
                // 		'992-9999',
                // 		'768-991',
                // 		'576–767',
                // 		'0–575'
                // 	],
                // 	params: {
                // 		placementId: 22025970
                // 	}
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        siteId: '368183',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        siteId: '368185',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        siteId: '368184',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        unit: '540736033',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471223',
                        adSlot: 'BritishComedyGuide_Unit4_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471225',
                        adSlot: 'BritishComedyGuide_Unit4_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471224',
                        adSlot: 'BritishComedyGuide_Unit4_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767'
                    ],
                    params: {
                        placementId: 15887499
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: 15887502
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        placementId: 15887500
                    }
                }
            ],
            breakpoints: {
                '992-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        90
                    ]
                ],
                '768-991': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '576–767': [
                    [
                        728,
                        90
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '0–575': [
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
            code: 'Unit5',
            path: '/11915656/BritishComedyguide/Unit5',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '311860',
                        zoneId: '1583912',
                        // sizes: [
                        //     15,
                        // ]
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BritishComedyGuide_Unit5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        dmxid: 363264,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: '15888032'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        tagid: '70294'
                    }
                },
                // {
                // 	bidder: 'improvedigital',
                // 	labelAny: [
                // 		'992-9999',
                // 		'768-991',
                // 		'576–767'
                // 	],
                // 	params: {
                // 		placementId: 22028056
                // 	}
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        siteId: '370808',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        unit: '540745341',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471226',
                        adSlot: 'BritishComedyGuide_Unit5_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '992-9999',
                        '768-991',
                        '576–767',
                        '0–575'
                    ],
                    params: {
                        placementId: 15973400
                    }
                }
            ],
            breakpoints: {
                '992-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '768-991': [
                    [
                        300,
                        250
                    ]
                ],
                '576–767': [
                    [
                        300,
                        250
                    ]
                ],
                '0–575': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Sticky',
            path: '/11915656/BritishComedyguide/Sticky',
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
                    bidder: 'rubicon',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        accountId: '14418',
                        siteId: '311860',
                        zoneId: '1583914',
                        // sizes: [
                        //     43,
                        // ]
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '992-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2580035',
                        adSlot: 'BritishComedyGuide_Sticky_320x50@320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BritishComedyGuide_Sticky_320x50'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        siteId: '457723',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        unit: '540959267',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        tagid: '92945'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        dmxid: 363265,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        placementId: '15888033'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0–575'
                    ],
                    params: {
                        placementId: 18379252
                    }
                }
            ],
            breakpoints: {
                '0–575': [
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
            'UI Layout': 'banner',
            Language: 'en',
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
            'Initial Screen Accept Button Text': 'I accept',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'British Comedy Guide',
            'Publisher Logo': 'https://www.comedy.co.uk/images/design/british_comedy_guide_long.png',
            'Initial Screen Title Text': 'Help us show you better content'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#368bd6',
                textColor: '#ffffff'
            },
            link: {
                textColor: '#ffffff'
            },
            primaryButton: {
                backgroundColor: '#efcc38',
                borderColor: '#efcc38',
                textColor: '#2e1313'
            },
            primaryButtonHover: {
                backgroundColor: '#f5de80',
                borderColor: '#f5de80',
                textColor: '#fffff'
            },
            isSecondaryButtonHidden: true,
            secondaryButton: {},
            secondaryButtonHover: {},
            tableHeader: {
                textColor: '#ffffff'
            },
            tableRow: {
                textColor: '#ffffff'
            },
            toggleOn: {},
            toggleOff: {},
            additionalStyles: '@media screen and (min-width: 550px) { .qc-cmp-ui-content { padding: 30px 60px!important; } }',
            toggleStatusTextColor: '#ffffff'
        }
    },
    breakpoints: [
        {
            label: '992-9999',
            minWidth: 992,
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
                ]
            ]
        },
        {
            label: '768-991',
            minWidth: 768,
            maxWidth: 991,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    300,
                    250
                ]
            ]
        },
        {
            label: '576–767',
            minWidth: 576,
            maxWidth: 767,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    300,
                    250
                ]
            ]
        },
        {
            label: '0–575',
            minWidth: 0,
            maxWidth: 575,
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
}
