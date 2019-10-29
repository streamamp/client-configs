var streamampConfig ={
    preventInit: true,
    predefinedSlotOverride: true,
    predefinedSlotOverrideMethod: 'metoffice',
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: false,
    publisher_id: 'MetOffice/metoffice-responsive',
    token: 'EIpqnpJzIOt7wMrmDVoOTqQb9KU95mTO5reousiZ554JuXFYxu9mjun73uleLnmH',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    afterLoad: function () {
        googletag.cmd.push(function () {
            "undefined" != typeof unitFn && (unitFn(),
                window.streamamp.initialize(!0))
        })
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'ad-leader-lg',
            path: '/6002/StreamAMP/Unit1',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit1_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 356402,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67323'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202877
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306116',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753508',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit1@728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 373260,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6532170
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 2000': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'ad-super-leader',
            path: '/6002/StreamAMP/Unit2',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit2_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143726,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67323'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202878
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306118',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753511',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit2@728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 382782,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6532171
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 2000': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'div-gpt-ad-super-leader',
            path: '/6002/StreamAMP/Unit3',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit3_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143728,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40523'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202879
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306120',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753512',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit3@728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 382784,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6532172
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 2000': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'div-gpt-ad-mpu',
            path: '/6002/StreamAMP/Unit4',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MetOffice_Unit4_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143729,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143730,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40520'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40524'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202880
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306121',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306122',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753513',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit4@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit4@300x250'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 386622,
                        sizes: [
                            10
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 386622,
                        sizes: [
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6532173
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6182260
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '0 - 2000': [
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
            code: 'mpu',
            path: ' /6002/StreamAMP/Unit5',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MetOffice_Unit5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143731,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143732,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40521'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40526'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202881
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306123',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306125',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753514',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit5@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit5@300x250'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 386626,
                        sizes: [
                            10
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 386626,
                        sizes: [
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6532174
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6182263
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '0 - 2000': [
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
            code: 'ad-bottom',
            path: '/6002/StreamAMP/Unit6',
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
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit6_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143733,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143735,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40518'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40525'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202882
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306126',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306142',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753515',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit6@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit6@728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 386628,
                        sizes: [
                            57
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 386628,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6182265
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6532236
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ]
                ],
                '0 - 2000': [
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
        {
            code: 'skyLeft',
            path: ' /6002/StreamAMP/Unit7',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'MetOffice_Unit7_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 165327,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 166507,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '40528'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67325'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202883
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202883
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306134',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306135',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '539134266',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        unit: '539134266',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit7@160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit7@300x600'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 691026,
                        sizes: [
                            9
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 691026,
                        sizes: [
                            10
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 11679627
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 11728626
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        160,
                        600
                    ]
                ],
                '0 - 2000': [
                    [
                        300,
                        600
                    ],
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'skyRight',
            path: '/6002/StreamAMP/Unit8',
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
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'MetOffice_Unit8_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        dmxid: 165329,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 166508,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        tagid: '67326'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67327'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        placementId: 1202884
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202884
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        siteId: '306131',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306132',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        unit: '539134268',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        unit: '539134268',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit8@160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit8@300x600'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 691030,
                        sizes: [
                            9
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 691030,
                        sizes: [
                            10
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 2000',
                        '2001 - 9999'
                    ],
                    params: {
                        placementId: 11679625
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 11728624
                    }
                }
            ],
            breakpoints: {
                '0 - 2000': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '2001 - 9999': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'forecastLeader',
            path: '/6002/StreamAMP/Unit9',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit9_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 167429,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67328'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202885
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306138',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '539175242',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        publisherId: '109825',
                        adSlot: 'Unit9@728x90'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 702250,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 11777637
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 2000': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Unit10',
            path: '/6002/StreamAMP/Unit10',
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
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit10_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 334708,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 334709,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '58809'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '58810'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 13314326
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '351596',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '351597',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        unit: '540649925',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 1221682,
                        sizes: [
                            57
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 1221682,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 15199480
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 15199519
                    }
                }
            ],
            breakpoints: {
                '0 - 2000': [
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
        {
            code: 'Unit11',
            path: '/6002/StreamAMP/Unit11',
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
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MetOffice_Unit11_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 334710,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '58811'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 13314333
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '351598',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        unit: '540649944',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 1221628,
                        sizes: [
                            15
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 15199493
                    }
                }
            ],
            breakpoints: {
                '0 - 2000': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'mobileAd',
            path: '/6002/StreamAMP/Unit1_Mobile',
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
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'MetOffice_Unit12_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143737,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        dmxid: 143738,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67329'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        tagid: '67330'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 1202886
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306140',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        siteId: '306141',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        unit: '538753516',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 414482,
                        sizes: [
                            2
                        ]
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        accountId: 14418,
                        siteId: '79450',
                        zoneId: 414482,
                        sizes: [
                            43
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6542841
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '2001 - 9999',
                        '0 - 2000'
                    ],
                    params: {
                        placementId: 6542839
                    }
                }
            ],
            breakpoints: {
                '2001 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 2000': [
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
        }
    ],
    cmp: {
        isEnabled: false
    },
    breakpoints: [
        {
            label: '2001 - 9999',
            minWidth: 2001,
            maxWidth: 9999,
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
                    320,
                    50
                ]
            ]
        },
        {
            label: '0 - 2000',
            minWidth: 0,
            maxWidth: 2000,
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
                    320,
                    50
                ]
            ]
        }
    ]
}