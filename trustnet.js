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
    publisher_id: 'FinancialExpress/trustnet-test',
    token: 'iUhcZT26QjJAFv0wQcCYKuyEz2rlD8EJCeootB7S5PQ0jhhfjmGxiJ0ZQaWyEvq2',
    currency: {
        enabled: true,
        value: 'AUD'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    preventInit: true,
    beforeInit: function () {
        if (window.streamampClientConfig && window.streamampClientConfig.targets) {
            var investorType = window.streamampClientConfig.targets.InvestorType || '';
            if (investorType.toLowerCase() != 'investor') {
                window.streamampConfig.adUnits.forEach(function (adUnit) {
                    adUnit.bids = [];
                });
            }
        }
    },
    adUnits: [
        {
            code: 'Bottom1',
            path: '/21769104128/Trustnet/Bottom1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            970,
                            250
                        ],
                        [
                            600,
                            200
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        dmxid: 443670,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443670,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443670,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        tagid: '67093'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '67082'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '40493'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67083'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201883
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        siteId: '306992',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '306991',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '306990',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '306989',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        unit: '539863752',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        publisherId: '1249592',
                        adSlot: 'tn_bottom1_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1249593',
                        adSlot: 'tn_bottom1_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1517788',
                        adSlot: 'tn_bottom1_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1249594',
                        adSlot: 'tn_bottom1_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 12759820
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 12759825
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13721929
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 12759827
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 17078279
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078287
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078290
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078292
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        600,
                        200
                    ]
                ],
                '980 - 1279': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ],
                    [
                        600,
                        200
                    ]
                ],
                '768 - 979': [
                    [
                        728,
                        90
                    ],
                    [
                        600,
                        200
                    ]
                ],
                '0 - 767': [
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
            code: 'Position1',
            path: '/21769104128/Trustnet/Position1',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443672,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443672,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        tagid: '40484'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67086'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201884
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        siteId: '306993',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '306994',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        unit: '539863753',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1249595',
                        adSlot: 'tn_position1_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '2473251',
                        adSlot: 'tn_position1_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 11321134
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 16237729
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078296
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078302
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '980 - 1279': [
                    [
                        300,
                        250
                    ]
                ],
                '768 - 979': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 767': [
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
            code: 'Position2',
            path: '/21769104128/Trustnet/Position2',
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
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443673,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443673,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67087'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '67088'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201885
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        siteId: '306995',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '306996',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        unit: '539863754',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1249596',
                        adSlot: 'tn_position2_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1249597',
                        adSlot: 'tn_position2_300x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 12759837
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 12759853
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078303
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078308
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '980 - 1279': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '768 - 979': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '0 - 767': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Top',
            path: '/21769104128/Trustnet/Top',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        dmxid: 443679,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443679,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        tagid: '40486'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '40488'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 1201888
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        siteId: '306998',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307000',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        unit: '539863756',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        publisherId: '1249599',
                        adSlot: 'tn_top_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1249601',
                        adSlot: 'tn_top_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 11321130
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 11321133
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 17078312
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078317
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
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
                '980 - 1279': [
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
                '768 - 979': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Right',
            path: '/21769104128/Trustnet/Right',
            mediaTypes: {
                banner: {
                    sizes: [
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
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        120,
                        600
                    ]
                ]
            }
        },
        {
            code: 'TopLeft',
            path: '/21769104128/Trustnet/TopLeft',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        dmxid: 443682,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        tagid: '40490'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        tagid: '40489'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 1201889
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        siteId: '307003',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        siteId: '307002',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        unit: '539863757',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        publisherId: '1249602',
                        adSlot: 'tn_topleft_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        publisherId: '1249604',
                        adSlot: 'tn_topleft_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 11321139
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 11321140
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 17078321
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 17078330
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
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
        {
            code: 'TopRight',
            path: '/21769104128/Trustnet/TopRight',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443680,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '40491'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '40492'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 1201890
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307003',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307004',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        unit: '539863758',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1249605',
                        adSlot: 'tn_topright_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1249603',
                        adSlot: 'tn_topright_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 11321137
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 11321138
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078334
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078341
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
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
                ],
                '980 - 1279': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '768 - 979': [
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
            code: 'Top1',
            path: '/21769104128/Trustnet/Top1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            185,
                            80
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        185,
                        80
                    ]
                ],
                '980 - 1279': [
                    [
                        185,
                        80
                    ]
                ],
                '768 - 979': [
                    [
                        185,
                        80
                    ]
                ]
            }
        },
        {
            code: 'Top2',
            path: '/21769104128/Trustnet/Top1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            150,
                            30
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        150,
                        30
                    ]
                ],
                '980 - 1279': [
                    [
                        150,
                        30
                    ]
                ],
                '768 - 979': [
                    [
                        150,
                        30
                    ]
                ]
            }
        },
        {
            code: 'Top3',
            path: '/21769104128/Trustnet/Top3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            40
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        300,
                        40
                    ]
                ],
                '980 - 1279': [
                    [
                        300,
                        40
                    ]
                ],
                '768 - 979': [
                    [
                        300,
                        40
                    ]
                ]
            }
        },
        {
            code: 'Top_footer',
            path: '/21769104128/Trustnet/Top_footer',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        dmxid: 443681,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        tagid: '67089'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        tagid: '67090'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 1201892
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        siteId: '307005',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        siteId: '307007',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        unit: '539863762',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        publisherId: '1249606',
                        adSlot: 'tn_topfooter_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        publisherId: '1249608',
                        adSlot: 'tn_topfooter_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 12759865
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 12759874
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 17078345
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 17078351
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
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
                '980 - 1279': [
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
                ]
            }
        },
        {
            code: 'Top2_footer',
            path: '/21769104128/Trustnet/Top2_footer',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            150,
                            30
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        150,
                        30
                    ]
                ],
                '980 - 1279': [
                    [
                        150,
                        30
                    ]
                ],
                '768 - 979': [
                    [
                        150,
                        30
                    ]
                ]
            }
        },
        {
            code: 'Top_Middle',
            path: '/21769104128/Trustnet/Top_Middle',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        dmxid: 443683,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443683,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        tagid: '67091'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '67092'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 1201915
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        siteId: '307008',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307010',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        unit: '539863763',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        publisherId: '1249609',
                        adSlot: 'tn_topmiddle_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1249611',
                        adSlot: 'tn_topmiddle_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 12759878
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 12759886
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279'
                    ],
                    params: {
                        placementId: 17078356
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078367
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
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
                '980 - 1279': [
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
                '768 - 979': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'NewsNative',
            path: '/21769104128/Trustnet/NewsNative',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            970,
                            250
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        dmxid: 443677,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443677,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443677,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        tagid: '67101'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67103'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '67102'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201920
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        siteId: '307018',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307020',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307019',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '432070',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        unit: '540784128',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        publisherId: '1361195',
                        adSlot: 'tn_newsnative_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1361198',
                        adSlot: 'tn_newsnative_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1361197',
                        adSlot: 'tn_newsnative_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 13206163
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13206209
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 13206194
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17859793
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 17078446
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078452
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078446
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '980 - 1279': [
                    [
                        300,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '768 - 979': [
                    [
                        300,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '0 - 767': [
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
            code: 'pdfAd',
            path: '/21769104128/Trustnet/pdfAd',
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
                            600
                        ],
                        [
                            500,
                            500
                        ],
                        [
                            400,
                            400
                        ],
                        [
                            760,
                            500
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        dmxid: 443678,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        dmxid: 443678,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443678,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443678,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        tagid: '67104'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '67105'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        tagid: '67106'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        tagid: '40495'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67107'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201921
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        siteId: '307021',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307022',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        siteId: '307023',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307025',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307024',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        unit: '540210007',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        publisherId: '1361199',
                        adSlot: 'tn_pdfAd_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1361200',
                        adSlot: 'tn_pdfAd_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        publisherId: '1361201',
                        adSlot: 'tn_pdfAd_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1361202',
                        adSlot: 'tn_pdfAd_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1517797',
                        adSlot: 'tn_pdfAd_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 13206220
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 13206221
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 13206222
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13206224
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13722161
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999'
                    ],
                    params: {
                        placementId: 17078454
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078475
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979'
                    ],
                    params: {
                        placementId: 17078504
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280 - 9999',
                        '980 - 1279',
                        '768 - 979',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078510
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078507
                    }
                }
            ],
            breakpoints: {
                '1280 - 9999': [
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
                        600
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        500,
                        500
                    ],
                    [
                        400,
                        400
                    ],
                    [
                        760,
                        500
                    ],
                ],
                '980 - 1279': [
                    [
                        500,
                        500
                    ],
                    [
                        400,
                        400
                    ],
                    [
                        760,
                        500
                    ],
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
                ],
                '768 - 979': [
                    [
                        500,
                        500
                    ],
                    [
                        400,
                        400
                    ],
                    [
                        760,
                        500
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
                        300,
                        600
                    ]
                ],
                '0 - 767': [
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
            code: 'Sponsorshipbanner',
            path: '/21769104128/Trustnet/Sponsorshipbanner',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            970,
                            150
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
                            300,
                            250
                        ],
                        [
                            300,
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
                '1280 - 9999': [
                    [
                        970,
                        150
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '980 - 1279': [
                    [
                        728,
                        90
                    ]
                ],
                '768 - 979': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 767': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        50
                    ]
                ]
            }
        },
        {
            code: 'IndexSpon',
            path: '/21769104128/Trustnet/IndexSpon',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            215,
                            40
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        215,
                        40
                    ]
                ],
                '980 - 1279': [
                    [
                        215,
                        40
                    ]
                ],
                '768 - 979': [
                    [
                        215,
                        40
                    ]
                ]
            }
        },
        {
            code: 'SponsoredContent',
            path: '/21769104128/Trustnet/SponsoredContent',
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
                            300,
                            250
                        ],
                        [
                            300,
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
                '1280 - 9999': [
                    [
                        970,
                        250
                    ]
                ],
                '980 - 1279': [
                    [
                        728,
                        90
                    ]
                ],
                '768 - 979': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 767': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        50
                    ]
                ]
            }
        },
        {
            code: 'SectorSponsor',
            path: '/21769104128/Trustnet/SectorSponsor',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            200,
                            80
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1280 - 9999': [
                    [
                        200,
                        80
                    ]
                ],
                '980 - 1279': [
                    [
                        200,
                        80
                    ]
                ],
                '768 - 979': [
                    [
                        200,
                        80
                    ]
                ],
                '0 - 767': [
                    [
                        200,
                        80
                    ]
                ]
            }
        },
        {
            code: 'Position1_Footer',
            path: '/21769104128/Trustnet/Position1_Footer',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443675,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '40496'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201918
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307014',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '427151',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        unit: '539863765',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1517791',
                        adSlot: 'tn_position1_footer_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13722129
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13722135
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078399
                    }
                }
            ],
            breakpoints: {
                '0 - 767': [
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
            code: 'Position2_Footer',
            path: '/21769104128/Trustnet/Position2_Footer',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443674,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '40497'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67370'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201916
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307012',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307013',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        unit: '539863764',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1517790',
                        adSlot: 'tn_position2_footer_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1249617',
                        adSlot: 'tn_position2_footer_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13722126
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 12759897
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078372
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078378
                    }
                }
            ],
            breakpoints: {
                '0 - 767': [
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
            code: 'Mobile_Position',
            path: '/21769104128/Trustnet/Mobile_Position',
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
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 443676,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '40498'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        tagid: '67100'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 1201919
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307016',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        siteId: '307017',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        unit: '539863766',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1517793',
                        adSlot: 'tn_mobile_position_320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '1249615',
                        adSlot: 'tn_mobile_position_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 13722135
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 12759934
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078420
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17078429
                    }
                }
            ],
            breakpoints: {
                '0 - 767': [
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
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Logo': 'https://static.amp.services/logos/trustnet-logo.jpg',
            'Publisher Name': 'Trustnet'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000'
            },
            link: {
                textColor: '#000000'
            },
            primaryButton: {
                backgroundColor: '#00A499',
                borderColor: '#00A499',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#007169',
                borderColor: '#007169',
                textColor: '#FFFFFF'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: '#00A499',
                textColor: '#00A499'
            },
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {
                backgroundColor: '#00A499',
                borderColor: '#00A499'
            },
            toggleOff: {
                backgroundColor: '#FFFFFF',
                borderColor: '#00A499'
            },
            additionalStyles: '',
            toggleSwitchBorderColor: '#00A499',
            toggleStatusTextColor: '#FFFFFF'
        }
    },
    breakpoints: [
        {
            label: '1280 - 9999',
            minWidth: 1280,
            maxWidth: 9999,
            sizesSupported: [
                [
                    970,
                    250
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
                    728,
                    90
                ]
            ]
        },
        {
            label: '980 - 1279',
            minWidth: 980,
            maxWidth: 1279,
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
                    300,
                    600
                ]
            ]
        },
        {
            label: '768 - 979',
            minWidth: 768,
            maxWidth: 979,
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
                    300,
                    600
                ]
            ]
        },
        {
            label: '0 - 767',
            minWidth: 0,
            maxWidth: 767,
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
