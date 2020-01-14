var streamampConfig = {
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: false,
    publisher_id: 'Wareable/Wareable',
    token: 'PfJFkS50okfovzL7ttDWDLXW0pLxPP2dcy0CDsAAfoJfKiSdf4FuYAStEJmAAG09',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'TopBanner',
            path: '/135921087/Articles_TopBanner',
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
                    bidder: 'conversant',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Wareable_TopBanner_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        dmxid: 149739,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        tagid: '67206'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1280-9999',
                //         '900-1279',
                //
                //         '750-899',
                //         '0-749'
                //     ],
                //     params: {
                //         placementId: 1204460
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        siteId: '307401',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        unit: '538806762',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1091097',
                        adSlot: 'wareable_topbanner_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 11221284
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 17069648
                    }
                }
            ],
            breakpoints: {
                '1280-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '900-1279': [
                    [
                        728,
                        90
                    ]
                ],
                '750-899': [
                    [
                        728,
                        90
                    ]
                ],
                '0-749': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'RightSidebarTop',
            path: '/135921087/Articles_RightSidebarTop',
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
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_RightSidebarTop_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Wareable_RightSidebarTop_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        dmxid: 149740,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        dmxid: 158548,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        tagid: '40818'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        tagid: '40822'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1280-9999',
                //         '750-899',
                //         '0-749'
                //     ],
                //     params: {
                //         placementId: 1204461
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        siteId: '307403',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        siteId: '307405',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        unit: '538806764',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1091098',
                        adSlot: 'wareable_SidebarTop_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1108372',
                        adSlot: 'wareable_SidebarTop_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 11221287
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 11501137
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 17069651
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 17069653
                    }
                }
            ],
            breakpoints: {
                '1280-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '750-899': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0-749': [
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
            code: 'Article_InlineContent',
            path: '/135921087/Articles_InlineContent',
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
                    bidder: 'conversant',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_InlineContent_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        dmxid: 172342,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        tagid: '40824'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1280-9999',
                //         '900-1279',
                //
                //         '750-899',
                //         '0-749'
                //     ],
                //     params: {
                //         placementId: 1204463
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        siteId: '307416',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        unit: '539248563',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1151288',
                        adSlot: 'wareable_InlineContent_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 15198297
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 17069663
                    }
                }
            ],
            breakpoints: {
                '1280-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '900-1279': [
                    [
                        300,
                        250
                    ]
                ],
                '750-899': [
                    [
                        300,
                        250
                    ]
                ],
                '0-749': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Homepage_RightSidebarTop',
            path: '/135921087/Homepage_RightSidebarTop',
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
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_RightSidebarTop_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Wareable_RightSidebarTop_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        dmxid: 149740,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        dmxid: 158548,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        tagid: '40818'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        tagid: '40822'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1280-9999',
                //         '0-749'
                //     ],
                //     params: {
                //         placementId: 1204461
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        siteId: '307403',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        siteId: '307405',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        unit: '538806764',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1237578',
                        adSlot: 'wareable_homepage_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        placementId: 11221287
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 11501137
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999',
                        '0-749'
                    ],
                    params: {
                        placementId: 17069651
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17069653
                    }
                }
            ],
            breakpoints: {
                '1280-9999': [
                    [
                        300,
                        250
                    ]
                ],
                '0-749': [
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
            code: 'LeaderboardSticky',
            path: ' /135921087/LeaderboardSticky',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            320,
                            50
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
                    bidder: 'conversant',
                    labelAny: [
                        '900-1279',

                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'Wareable_LeaderboardSticky_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        dmxid: 15198302,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '900-1279'

                    ],
                    params: {
                        dmxid: 222793,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        tagid: '58319'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        tagid: '58318'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '900-1279',
                //
                //         '0-749'
                //     ],
                //     params: {
                //         placementId: 1204466
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        siteId: '307415',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        siteId: '307413',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '900-1279',
                        '0-749'
                    ],
                    params: {
                        unit: '540123083',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1460010',
                        adSlot: 'Wareable_LeaderboardSticky_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1460012',
                        adSlot: 'Wareable_LeaderboardSticky_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 15198302
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        placementId: 15198301
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17069845
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        placementId: 17069713
                    }
                }
            ],
            breakpoints: {
                '0-749': [
                    [
                        320,
                        50
                    ]
                ],
                '900-1279': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Showcase_Billboard',
            path: '/135921087/Showcase_Billboard',
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
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [

                        '750-899',
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_Showcase_Billboard_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382498,
                        publisherSubId: 'Wareable_Showcase_Billboard_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        dmxid: 270805,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        dmxid: 334694,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        dmxid: 334695,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        tagid: '58317'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        tagid: '58320'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        tagid: '58321'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //
                //         '750-899',
                //         '0-749'
                //     ],
                //     params: {
                //         placementId: 12046695
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        siteId: '327461',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        siteId: '351268',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        siteId: '351269',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [

                        '750-899',
                        '0-749'
                    ],
                    params: {
                        unit: '540490145',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '900-1279'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1759896',
                        adSlot: 'wareable_Showcase-Billboard_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1947701',
                        adSlot: 'wareable_Showcase-Billboard_728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1947700',
                        adSlot: 'wareable_Showcase-Billboard_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                       '900-1279'
                    ],
                    params: {
                        placementId: 14459888
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 15198303
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 15198304
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                       '900-1279'
                    ],
                    params: {
                        placementId: 17069851
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '750-899'
                    ],
                    params: {
                        placementId: 17069853
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        placementId: 17069855
                    }
                }
            ],
            breakpoints: {
                '900-1279': [
                    [
                        970,
                        250
                    ]
                ],
                '750-899': [
                    [
                        300,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '0-749': [
                    [
                        300,
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
            code: '970x250_Test',
            path: '/135921087/970x250_Test',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            250
                        ],
                        [
                            970,
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
                    bidder: 'conversant',
                    labelAny: [
                        '1280-9999',
                        '900-1279',
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'Wareable_970x250_Test_970x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '0-749',
                        '750-899'
                    ],
                    params: {
                        dmxid: 270804,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        dmxid: 270803,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-749',
                        '750-899'
                    ],
                    params: {
                        tagid: '58316'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        tagid: '58315'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1280-9999',
                //         '900-1279',
                //
                //         '0-749',
                //         '750-899'
                //     ],
                //     params: {
                //         placementId: 12046694
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-749',
                        '750-899'
                    ],
                    params: {
                        siteId: '327459',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        siteId: '327460',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280-9999',
                        '900-1279',

                        '0-749',
                        '750-899'
                    ],
                    params: {
                        unit: '540490144',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1759893',
                        adSlot: 'wareable_970x250_Test_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '750-899',
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1759895',
                        adSlot: 'wareable_970x250_Test_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-749',
                        '750-899'
                    ],
                    params: {
                        placementId: 14459864
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        placementId: 14459863
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-749',
                        '750-899'
                    ],
                    params: {
                        placementId: 17069850
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999',
                        '900-1279'
                    ],
                    params: {
                        placementId: 17069847
                    }
                }
            ],
            breakpoints: {
                '0-749': [
                    [
                        300,
                        250
                    ]
                ],
                '750-899': [
                    [
                        300,
                        250
                    ]
                ],
                '1280-9999': [
                    [
                        970,
                        250
                    ]
                ],
                '900-1279': [
                    [
                        970,
                        250
                    ]
                ]
            }
        },
        {
            code: 'RightSidebarBottom',
            path: '/135921087/Articles_RightSidebarBottom',
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
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_RightSidebarBottom_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        dmxid: 149742,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        dmxid: 158545,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        dmxid: 158546,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        tagid: '40821'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        tagid: '40823'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        tagid: '40825'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1280-9999'
                //     ],
                //     params: {
                //         placementId: 1204462
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        siteId: '307406',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        siteId: '307407',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        siteId: '307408',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        unit: '538806767',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1091105',
                        adSlot: 'wareable_SidebarBottom_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1108373',
                        adSlot: 'wareable_SidebarBottom_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        publisherId: '1108374',
                        adSlot: 'wareable_SidebarBottom_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        placementId: 11221311
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        placementId: 11501138
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        placementId: 11501139
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        placementId: 17069655
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        placementId: 17069658
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1280-9999'
                    ],
                    params: {
                        placementId: 17069659
                    }
                }
            ],
            breakpoints: {
                '1280-9999': [
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
                    ]
                ]
            }
        },
        {
            code: 'Article-Middle',
            path: '/135921087/Articles-Middle',
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
                    bidder: 'conversant',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_Article-Middle_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        tagid: '86579'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        siteId: '427732',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        unit: '540907061',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2475448',
                        adSlot: 'wareable_Article-Middle_300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17645308
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17866694
                    }
                },
            ],
            breakpoints: {
                '0-749': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Articles-Top',
            path: '/135921087/Articles-Top',
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
                    bidder: 'conversant',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        site_id: '200210',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'Wareable_Articles-Top_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'Wareable_Articles-Top_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        tagid: '86577'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        tagid: '86578'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        siteId: '427731',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        siteId: '427731',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        unit: '540907061',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2475442',
                        adSlot: 'wareable_Articles-Top_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2475444',
                        adSlot: 'wareable_Articles-Top_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17645305
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17645306
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17866688
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0-749'
                    ],
                    params: {
                        placementId: 17866692
                    }
                }
            ],
            breakpoints: {
                '0-749': [
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
            'Publisher Name': 'Wareable',
            'Publisher Logo': 'https://static.amp.services/logos/wearable.png'
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
            label: '1280-9999',
            minWidth: 1200,
            maxWidth: 9999,
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
                    300,
                    600
                ],
                [
                    160,
                    600
                ]
            ]
        },
        {
            label: '900-1279',
            minWidth: 990,
            maxWidth: 1199,
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
                ]
            ]
        },
        {
            label: '750-899',
            minWidth: 750,
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
            label: '0-749',
            minWidth: 0,
            maxWidth: 749,
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
        }
    ]
};
