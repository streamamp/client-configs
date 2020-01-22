var streamampConfig = {
    gptSingleRequestEnabled: false,
    levelTargeting: false,
    preventInit: false,
    a9Enabled: true,
    apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    adUnitsToRefresh: ['Sticky'],
    minRefreshTime: 30,
    maxRefreshTime: 30,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'StreamAMP/spiked-online',
    token: 'lOmXAVCkqCFN0rhQVou8RkjW9NjO8dMQ0WBRVB3VvGlI96mutN4ogEawMCFLHYRY',
    currency: {
        enabled: false,
        value: '',
    },
    adDelivered: [],
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'Unit1',
            path: '/15188745/Spiked-Online/Unit1',
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
                            1,
                            1
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Spiked_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'Spiked_Unit1_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit1_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371396,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371397,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41305'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '41307'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970',
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 1204124
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307722',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999'
                    ],
                    params: {
                        siteId: '431297',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '307731',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540279392',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686400',
                        adSlot: 'Spiked-Online_Unit1_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2530337',
                        adSlot: 'Spiked-Online_Unit1_970x250_New@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686406',
                        adSlot: 'Spiked-Online_Unit1_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 13867350
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999'
                    ],
                    params: {
                        placementId: 17851680
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 13867354
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        970,
                        250
                    ],
                    [
                        1,
                        1
                    ]
                ],
                '721-970': [
                    [
                        728,
                        90
                    ],
                    [
                        1,
                        1
                    ]
                ],
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        1,
                        1
                    ]
                ],
                '0-468': [
                    [
                        320,
                        50
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
            path: '/15188745/Spiked-Online/Unit2',
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
                            468,
                            60
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
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Spiked_Unit2_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit2_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371398,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371399,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41310'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '41313'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 1204125
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 1204125
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307739',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '307741',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540279393',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540279393',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686407',
                        adSlot: 'Spiked-Online_Unit2_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686410',
                        adSlot: 'Spiked-Online_Unit2_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 13867363
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 13867367
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '721-970': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0-468': [
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
            path: '/15188745/Spiked-Online/Unit3',
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
                            468,
                            60
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Spiked_Unit3_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit3_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371400,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371401,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41316'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '41320'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 1204126
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 1204126
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307742',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '307744',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540279394',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540279394',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686491',
                        adSlot: 'Spiked-Online_Unit3_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686495',
                        adSlot: 'Spiked-Online_Unit3_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 13867370
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 13867373
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '721-970': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0-468': [
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
            path: '/15188745/Spiked-Online/Unit4',
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
                            468,
                            60
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Spiked_Unit4_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit4_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371402,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371404,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41322'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '41326'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 1204127
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 1204127
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307745',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '307747',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540279395',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540279395',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686521',
                        adSlot: 'Spiked-Online_Unit4_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686523',
                        adSlot: 'Spiked-Online_Unit4_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 13867374
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 13867377
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '721-970': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0-468': [
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
            path: '/15188745/Spiked-Online/Unit5',
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'Spiked_Unit5_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371405,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41328'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 1204128
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307748',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540279396',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686526',
                        adSlot: 'Spiked-Online_Unit5_160x600_New@160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '721-970'
                    ],
                    params: {
                        placementId: 13867378
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ]
                ],
                '721-970': [
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
            code: 'Unit6',
            path: '/15188745/Spiked-Online/Unit6',
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'Spiked_Unit6_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371406,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41330'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 1204129
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307750',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540279397',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686528',
                        adSlot: 'Spiked-Online_Unit6_160x600_New@160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 13867381
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        160,
                        600
                    ],
                    [
                        120,
                        600
                    ]
                ],
                '721-970': [
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
            code: 'Unit7',
            path: '/15188745/Spiked-Online/Unit7',
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
                            468,
                            60
                        ],
                        [
                            970,
                            90
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Spiked_Unit7_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit7_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999'
                    ],
                    params: {
                        dmxid: 371407,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371408,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371409,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999'
                    ],
                    params: {
                        tagid: '58500'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '41333'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '41336'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 1204130
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 1204130
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '355884',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '307753',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '307755',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540279398',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540279398',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2467823',
                        adSlot: 'Spiked-Online_Unit7_970x250_New@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686532',
                        adSlot: 'Spiked-Online_Unit7_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686548',
                        adSlot: 'Spiked-Online_Unit7_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 15536660
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 13867388
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 13867393
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
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
                '721-970': [
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
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        468,
                        60
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0-468': [
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
            code: 'Unit8',
            path: '/15188745/Spiked-Online/Unit8',
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
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Spiked_Unit8_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit8_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371410,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '41338'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970',
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 1204131
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '307756',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '431300',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540279400',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1686550',
                        adSlot: 'Spiked-Online_Unit8_300x250_New@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2530333',
                        adSlot: 'Spiked-Online_Unit8_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970',
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 13867395
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 17851687
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '721-970': [
                    [
                        300,
                        250
                    ]
                ],
                '469-720': [
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
                '0-468': [
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
            code: 'Unit9',
            path: '/15188745/Spiked-Online/Unit9',
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
                            468,
                            60
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
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Spiked_Unit9_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Unit9_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371411,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371412,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '64544'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '64545'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 22021126
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 22021126
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '367132',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '367133',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540729928',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469-720'
                    ],
                    params: {
                        unit: '540729928',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2467824',
                        adSlot: 'Spiked-Online_Unit9_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2467821',
                        adSlot: 'Spiked-Online_Unit9_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 15838043
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 15838044
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '721-970': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
                    ]
                ],
                '0-468': [
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
            code: 'Sticky',
            path: '/15188745/Spiked-Online/Sticky',
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
                            468,
                            60
                        ]
                    ]
                }
            },
            isSticky: true,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971-9999'
                    ],
                    params: {
                        zoneId: 'Spiked_Sticky_728x90',
                        publisherSubId: 'Spiked_Sticky_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469-720'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Spiked_Sticky_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        dmxid: 371414,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        dmxid: 371413,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        tagid: '58502'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        tagid: '58501'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971-9999',
                //         '721-970'
                //     ],
                //     params: {
                //         placementId: 15273087
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '469-720',
                //         '0-468'
                //     ],
                //     params: {
                //         placementId: 15273087
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        siteId: '355886',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        siteId: '355885',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        unit: '540679266',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        unit: '540679266',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2467825',
                        adSlot: 'Spiked-Online_Sticky_728x90_New@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2467822',
                        adSlot: 'Spiked-Online_Sticky_320x50_New@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971-9999',
                        '721-970'
                    ],
                    params: {
                        placementId: 15536714
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469-720',
                        '0-468'
                    ],
                    params: {
                        placementId: 15536695
                    }
                }
            ],
            breakpoints: {
                '971-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '721-970': [
                    [
                        728,
                        90
                    ],
                    [
                        468,
                        60
                    ]
                ],
                '469-720': [
                    [
                        320,
                        50
                    ],
                    [
                        468,
                        60
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
            code: 'Rich_Media',
            path: '/15188745/Spiked-Online/rich_Media',
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
                '971-9999': [
                    [
                        1,
                        1
                    ]
                ],
                '721-970': [
                    [
                        1,
                        1
                    ]
                ],
                '469-720': [
                    [
                        1,
                        1
                    ]
                ],
                '0-468': [
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
            'Display Persistent Consent Link': false,
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
            'Publisher Name': 'SpikedOnline',
            'Initial Screen Title Text': 'We value your privacy',
            'Publisher Logo': 'https://static.amp.services/logos/spiekd.png'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#ffffff',
                textColor: '#000000'
            },
            link: {
                textColor: '#C71900',
                isUnderlined: true
            },
            primaryButton: {
                borderColor: '#C71900',
                textColor: '#C71900'
            },
            primaryButtonHover: {
                backgroundColor: '#C71900',
                borderColor: '#C71900',
                textColor: '#ffffff'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                borderColor: '#ffffff',
                textColor: '#C71900',
                backgroundColor: '#ffffff'
            },
            secondaryButtonHover: {
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                textColor: '#C71900'
            },
            tableHeader: {
                textColor: '#000000'
            },
            tableRow: {
                textColor: '#000000'
            },
            toggleOn: {
                backgroundColor: '#C71900',
                borderColor: '#C71900'
            },
            toggleOff: {
                backgroundColor: '#000000',
                borderColor: '#000000'
            },
            additionalStyles: '',
            toggleStatusTextColor: '#C71900',
            toggleSwitchBorderColor: '#C71900',
            dropdownArrowColor: '#C71900'
        }
    },
    breakpoints: [
        {
            label: '971-9999',
            minWidth: 971,
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
                    970,
                    250
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
            label: '721-970',
            minWidth: 721,
            maxWidth: 970,
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
                    970,
                    250
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
            label: '469-720',
            minWidth: 469,
            maxWidth: 720,
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
                    1,
                    1
                ]
            ]
        }
    ]
}
