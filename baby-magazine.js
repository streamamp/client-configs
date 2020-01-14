var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: true,
    apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 60,
    maxRefreshTime: 60,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'ChelseaMagazineCompany/babymagazine',
    token: '9DwASG6TMgvZkgq95V2PD1Fe5zqoEs5NW0BrTvrGE5yIPA6JnQ0i2lTFytfd7QLr',
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
            path: '/2611224/BabyMagazine2019/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            970,
                            250
                        ],
                        [
                            970,
                            90
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
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'BabyMagazine_New_Unit1_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'BabyMagazine_New_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BabyMagazine_New_Unit1_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86127'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86128'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '86129'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '991 - 9999',
                //         '729 - 990',
                //         '469 - 728',
                //         '0 - 468'
                //     ],
                //     params: {
                //         placementId: 22113088
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405217',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405217',
                        size: [
                            728,
                            90
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
                        siteId: '405217',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540845912',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1682596',
                        adSlot: 'TheCMC_BabyMagazine_Unit1_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1683880',
                        adSlot: 'TheCMC_BabyMagazine_Unit1_728x90'
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
                        pmzoneid: '1683882',
                        adSlot: 'TheCMC_BabyMagazine_Unit1_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16827803
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16827814
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16828170
                    }
                }
            ],
            breakpoints: {
                '991 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        970,
                        90
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '729 - 990': [
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
                    ]
                ],
                '469 - 728': [
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
            code: 'Unit2',
            path: '/2611224/BabyMagazine2019/Unit2',
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
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BabyMagazine_New_Unit2_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'BabyMagazine_New_Unit2_300x600'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '86130'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86131'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '991 - 9999',
                //         '729 - 990',
                //         '469 - 728',
                //         '0 - 468'
                //     ],
                //     params: {
                //         placementId: 22113089
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '405218',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405218',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540845913',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1683886',
                        adSlot: 'TheCMC_BabyMagazine_Unit2_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471454',
                        adSlot: 'TheCMC_BabyMagazine_Unit2_300x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16828172
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16828174
                    }
                }
            ],
            breakpoints: {
                '991 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '729 - 990': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
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
            code: 'Unit3',
            path: '/2611224/BabyMagazine2019/Unit3',
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
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BabyMagazine_New_Unit3_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'BabyMagazine_New_Unit3_300x600'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '86132'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86133'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '991 - 9999',
                //         '729 - 990',
                //         '469 - 728',
                //         '0 - 468'
                //     ],
                //     params: {
                //         placementId: 22113090
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '405220',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405220',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540845914',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1683887',
                        adSlot: 'TheCMC_BabyMagazine_Unit3_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471456',
                        adSlot: 'TheCMC_BabyMagazine_Unit3_300x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16828175
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16828176
                    }
                }
            ],
            breakpoints: {
                '991 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '729 - 990': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
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
            code: 'Unit4',
            path: '/2611224/BabyMagazine2019/Unit4',
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
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BabyMagazine_New_Unit4_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'BabyMagazine_New_Unit4_300x600'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '86134'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86135'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '991 - 9999',
                //         '729 - 990',
                //         '469 - 728',
                //         '0 - 468'
                //     ],
                //     params: {
                //         placementId: 22113091
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '405222',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405222',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540845915',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471451',
                        adSlot: 'TheCMC_BabyMagazine_Unit4_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1683888',
                        adSlot: 'TheCMC_BabyMagazine_Unit4_300x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16828179
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16828232
                    }
                }
            ],
            breakpoints: {
                '991 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '729 - 990': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
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
            code: 'Unit5',
            path: '/2611224/BabyMagazine2019/Unit5',
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
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'BabyMagazine_New_Unit5_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'BabyMagazine_New_Unit5_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BabyMagazine_New_Unit5_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86136'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86137'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '86138'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '991 - 9999',
                //         '729 - 990',
                //         '469 - 728',
                //         '0 - 468'
                //     ],
                //     params: {
                //         placementId: 22113092
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405226',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405226',
                        size: [
                            728,
                            90
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
                        siteId: '405226',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540845916',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471457',
                        adSlot: 'TheCMC_BabyMagazine_Unit5_970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2471461',
                        adSlot: 'TheCMC_BabyMagazine_Unit5_728x90'
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
                        pmzoneid: '2471452',
                        adSlot: 'TheCMC_BabyMagazine_Unit5_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16828235
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16828236
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16828237
                    }
                }
            ],
            breakpoints: {
                '991 - 9999': [
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
                '729 - 990': [
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
                    ],
                    [
                        320,
                        100
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/2611224/BabyMagazine2019/Unit6',
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
            isSticky: true,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'BabyMagazine_New_Unit6_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BabyMagazine_New_Unit6_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        tagid: '86139'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        tagid: '86140'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '991 - 9999',
                //         '729 - 990',
                //         '469 - 728',
                //         '0 - 468'
                //     ],
                //     params: {
                //         placementId: 22113088
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        siteId: '405227',
                        size: [
                            728,
                            90
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
                        siteId: '405227',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990',
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        unit: '540845912',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1683891',
                        adSlot: 'TheCMC_BabyMagazine_Unit6_728x90'
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
                        pmzoneid: '1683893',
                        adSlot: 'TheCMC_BabyMagazine_Unit6_320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '991 - 9999',
                        '729 - 990'
                    ],
                    params: {
                        placementId: 16828239
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 728',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16828240
                    }
                }
            ],
            breakpoints: {
                '991 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '469 - 728': [
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
                ],
                '729 - 990': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/2611224/BabyMagazine2019/Unit7',
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
                '991 - 9999': [
                    [
                        1,
                        1
                    ]
                ],
                '469 - 728': [
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
                '729 - 990': [
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
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Logo': 'https://www.baby-magazine.co.uk/wp-content/uploads/2018/07/baby-magazine-logo-retina.png',
            'Publisher Name': 'The Chelsea Magazine Company'
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
            label: '991 - 9999',
            minWidth: 991,
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
                    300,
                    600
                ],
                [
                    1,
                    1
                ]
            ]
        },
        {
            label: '729 - 990',
            minWidth: 729,
            maxWidth: 990,
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
                ],
                [
                    1,
                    1
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
