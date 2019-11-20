var streamampConfig = {
    preventInit: true,
    predefinedSlotOverride: true,
    predefinedSlotOverrideMethod: 'metoffice',
    levelTargeting: false,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
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
            code: 'mpu',
            path: '/6002/StreamAMP/Unit5',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MetOffice_Unit5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        dmxid: 143731,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
                    ],
                    params: {
                        dmxid: 143732,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        tagid: '40521'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
                    ],
                    params: {
                        tagid: '40526'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        placementId: 1202881
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
                    ],
                    params: {
                        placementId: 1202881
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        unit: '538753514',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
                    ],
                    params: {
                        unit: '538753514',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        placementId: 6532174
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970',
                        '0-728'
                    ],
                    params: {
                        placementId: 6182263
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '1697-1975': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '1617-1696': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '1361-1616': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '1281-1360': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '971-1280': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '729-970': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '0-728': [
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit6_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        dmxid: 143733,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        dmxid: 143735,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        tagid: '40518'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        tagid: '40525'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        placementId: 1202882
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        placementId: 1202882
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        unit: '538753515',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        unit: '538753515',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        placementId: 6182265
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280',
                        '729-970'
                    ],
                    params: {
                        placementId: 6532236
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1697-1975': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1617-1696': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1361-1616': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1281-1360': [
                    [
                        728,
                        90
                    ]
                ],
                '971-1280': [
                    [
                        728,
                        90
                    ]
                ],
                '729-970': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'skyLeft',
            path: '/6002/StreamAMP/Unit7',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'MetOffice_Unit7_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        dmxid: 165327,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        dmxid: 166507,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        tagid: '40528'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        tagid: '67325'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        placementId: 1202883
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        placementId: 1202883
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
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
                        '1976-9999'
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
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        unit: '539134266',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        unit: '539134266',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
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
                        '1976-9999'
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
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        placementId: 11679627
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        placementId: 11728626
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1697-1975': [
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'MetOffice_Unit8_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        dmxid: 165329,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        dmxid: 166508,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        tagid: '67326'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        tagid: '67327'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        placementId: 1202884
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        placementId: 1202884
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
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
                        '1976-9999'
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
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        unit: '539134268',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        unit: '539134268',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975'
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
                        '1976-9999'
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
                        '1976-9999',
                        '1697-1975'
                    ],
                    params: {
                        placementId: 11679625
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1976-9999'
                    ],
                    params: {
                        placementId: 11728624
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        160,
                        600
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1697-1975': [
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit9_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
                    ],
                    params: {
                        dmxid: 167429,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
                    ],
                    params: {
                        tagid: '67328'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
                    ],
                    params: {
                        placementId: 1202885
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
                    ],
                    params: {
                        unit: '539175242',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360',
                        '971-1280'
                    ],
                    params: {
                        placementId: 11777637
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '1697-1975': [
                    [
                        728,
                        90
                    ]
                ],
                '1617-1696': [
                    [
                        728,
                        90
                    ]
                ],
                '1361-1616': [
                    [
                        728,
                        90
                    ]
                ],
                '1281-1360': [
                    [
                        728,
                        90
                    ]
                ],
                '971-1280': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'ad-bottom-warnings',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'MetOffice_Unit10_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        dmxid: 334708,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        dmxid: 334709,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        tagid: '58809'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        tagid: '58810'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        placementId: 13314326
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        placementId: 13314326
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        unit: '540649925',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        unit: '540649925',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616'
                    ],
                    params: {
                        placementId: 15199480
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        placementId: 15199519
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1697-1975': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1617-1696': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1361-1616': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1281-1360': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'mpuOnly',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MetOffice_Unit11_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        dmxid: 334710,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        tagid: '58811'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        placementId: 13314333
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        unit: '540649944',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
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
                        '1976-9999',
                        '1697-1975',
                        '1617-1696',
                        '1361-1616',
                        '1281-1360'
                    ],
                    params: {
                        placementId: 15199493
                    }
                }
            ],
            breakpoints: {
                '1976-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '1697-1975': [
                    [
                        300,
                        250
                    ]
                ],
                '1617-1696': [
                    [
                        300,
                        250
                    ]
                ],
                '1361-1616': [
                    [
                        300,
                        250
                    ]
                ],
                '1281-1360': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'mobileAd',
            path: '/6002/StreamAMP/Unit12',
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
            safeFrame: true,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0-728'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'MetOffice_Unit12_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-728'
                    ],
                    params: {
                        dmxid: 143738,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-728'
                    ],
                    params: {
                        tagid: '67330'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0-728'
                    ],
                    params: {
                        placementId: 1202886
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-728'
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
                        '0-728'
                    ],
                    params: {
                        unit: '538753516',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'rubicon',
                    labelAny: [
                        '0-728'
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
                        '0-728'
                    ],
                    params: {
                        placementId: 6542839
                    }
                }
            ],
            breakpoints: {
                '0-728': [
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
            label: '1976-9999',
            minWidth: 1976,
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
                ]
            ]
        },
        {
            label: '1697-1975',
            minWidth: 1697,
            maxWidth: 1975,
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
                ]
            ]
        },
        {
            label: '1617-1696',
            minWidth: 1617,
            maxWidth: 1696,
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
                ]
            ]
        },
        {
            label: '1361-1616',
            minWidth: 1361,
            maxWidth: 1616,
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
                ]
            ]
        },
        {
            label: '1281-1360',
            minWidth: 1281,
            maxWidth: 1360,
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
                ]
            ]
        },
        {
            label: '971-1280',
            minWidth: 971,
            maxWidth: 1280,
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
                ]
            ]
        },
        {
            label: '729-970',
            minWidth: 729,
            maxWidth: 970,
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
                ]
            ]
        },
        {
            label: '0-728',
            minWidth: 0,
            maxWidth: 728,
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