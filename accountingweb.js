var streamampConfig = {
    gptSingleRequestEnabled:true,
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'SiftMedia/AccountingWeb',
    token: 'pPgosGY8xoeFtm5kN4rS2dVXGhHiwiUOiqwoZwvmH8CWKgik9kVOGez8AfAV3gOR',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    afterInit: function() {
        if (!window.__cmp) {
            streamampUtils.log('Overriding CMP displayConsentUI')
            window.__cmp = function(x) {
                if (x === 'displayConsentUi') {
                    streamampInitializeCmp()
                    window.__cmp('displayConsentUi')
                    streamampUtils.log('Displaying CMP consent UI')
                }
            }
            window.__cmp.streamampOverridden = true
        }
    },
    adUnits: [
        {
            code: 'AWUK_MPU1',
            path: '/4394518/AWUK_MPU1',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'AWUK_MPU1_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'AWUK_MPU1_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71114'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        tagid: '71113'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999'
                //     ],
                //     params: {
                //         placementId: 22039615
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '729 - 970',
                //         '0 - 728'
                //     ],
                //     params: {
                //         placementId: 22039615
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '374160',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        siteId: '374160',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540778373',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        unit: '540778373',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237800',
                        adSlot: 'Sift-AWUK_MPU1_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237799',
                        adSlot: 'Sift-AWUK_MPU1_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16176654
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        placementId: 16176650
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ],
                    [
                        336,
                        280
                    ]
                ],
                '729 - 970': [
                    [
                        300,
                        250
                    ],
                    [
                        336,
                        280
                    ]
                ],
                '0 - 728': [
                    [
                        300,
                        250
                    ],
                    [
                      336,
                      280
                    ]
                ]
            }
        },
        {
            code: 'AWUK_MPU2',
            path: '/4394518/AWUK_MPU2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
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
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'AWUK_MPU2_300x600'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71115'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999'
                //     ],
                //     params: {
                //         placementId: 22039613
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '378940',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540778374',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237801',
                        adSlot: 'Sift-AWUK_MPU2_300x600@300x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16176655
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        600
                    ]
                ]
            }
        },
        {
            code: 'AWUK_MPU3',
            path: '/4394518/AWUK_MPU3',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'AWUK_MPU3_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        tagid: '71116'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '729 - 970',
                //         '0 - 728'
                //     ],
                //     params: {
                //         placementId: 22039611
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        siteId: '378941',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        unit: '540778377',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237803',
                        adSlot: 'Sift-AWUK_MPU3_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        placementId: 16176656
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 728': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'AWUK_Top',
            path: '/4394518/AWUK_Top',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'AWUK_Top_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'AWUK_Top_728x90'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71117'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        tagid: '71118'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999'
                //     ],
                //     params: {
                //         placementId: 22039610
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '729 - 970'
                //     ],
                //     params: {
                //         placementId: 22039610
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '378942',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        siteId: '378942',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540778378',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        unit: '540778378',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237804',
                        adSlot: 'Sift-AWUK_Top_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237805',
                        adSlot: 'Sift-AWUK_Top_728x90@728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16176657
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        placementId: 16176659
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
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
                '729 - 970': [
                    [
                        728,
                        90
                    ]
                ],
            }
        },
        {
            code: 'AWUK_MPU4',
            path: '/4394518/AWUK_MPU4',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'AWUK_MPU4_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        tagid: '74370'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '729 - 970',
                //         '0 - 728'
                //     ],
                //     params: {
                //         placementId: 22050842
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        siteId: '388011',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        unit: '540795943',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237809',
                        adSlot: 'Sift-AWUK_MPU4_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        placementId: 16402992
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '729 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 728': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'AWUK_Mid',
            path: '/4394518/AWUK_inline',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'AWUK_Mid_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'AWUK_Mid_970x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        tagid: '92789'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '92787'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        siteId: '454726',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        siteId: '454726',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        unit: '540957292',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2575261',
                        adSlot: 'Sift-AWUK_Mid_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2575262',
                        adSlot: 'Sift-AWUK_Mid_970x250@970x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        placementId: 18364679
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 18364678
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                "971 - 9999": [
                  [
                    970,
                    90
                  ]
                ],
                "729 - 970": [
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
            code: 'AWUK_inline',
            path: '/4394518/AWUK_inline',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            bids: [],
            breakpoints: {
                "971 - 9999": [],
                "729 - 970": [],
                "0 - 728": []
            }
        },
        {
            code: 'AWUK_Brand_Sponsorship',
            path: '/4394518/AWUK_Brand_Sponsorship',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            bids: [],
            breakpoints: {
                "971 - 9999": [],
                "729 - 970": [],
                "0 - 728": []
            }
        },
        {
            code: 'AWUK_aa_sposorship',
            path: '/4394518/AWUK_aa_sposorship',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: true,
            bids: [],
            breakpoints: {
                "971 - 9999": [],
                "729 - 970": [],
                "0 - 728": []
            }
        },
        {
            code: 'AWUK_Sticky',
            path: '/4394518/AWUK_Sticky',
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
                    bidder: 'criteo',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'AWUK_Sticky_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        tagid: '80046'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0 - 728'
                //     ],
                //     params: {
                //         placementId: 22128326
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        siteId: '413485',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        unit: '540861879',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2348473',
                        adSlot: 'Sift-AWUK_Sticky_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 17085214
                    }
                },
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        site_id: '200953'
                    }
                }
            ],
            breakpoints: {
                '0 - 728': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'AWUK_RichMedia',
            path: '/4394518/AWUK_RichMedia',
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
            bids: [
                {
                    bidder: 'justpremium',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                    ],
                    params: {
                        zone: '82105',
                        allow: [
                            'as',
                            'sa',
                            'pa'
                        ]
                    }
                },
                {
                    bidder: 'justpremium',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        zone: '82105',
                        allow: [
                            'mt',
                            'is',
                            'mo'
                        ]
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        1,
                        1
                    ]
                ],
                '729 - 970': [
                    [
                        1,
                        1
                    ]
                ],
                '0 - 728': [
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
        pathnamesToExclude: ['/privacy-policy'],
        config: {
            'UI Layout': 'popup',
            'Language': 'en',
            'No Option': false,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data based on Legitimate Interests, these companies include OptInMonster, AddThisSocial, HotJar and PageFair. You can view our <a target="_blank" rel="noopener noreferrer" href="https://www.accountingweb.co.uk/privacy-policy"><strong>Privacy Policy</strong></a> for more information on these and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'Accounting Web UK',
            'Publisher Logo': 'https://static.amp.services/logos/siftlogo.png',
            'Custom Links Displayed on Initial Screen': ['[Privacy Policy](https://www.accountingweb.co.uk/privacy-policy)'],
            'Display Persistent Consent Link': false
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
            toggleOff: {}
        }
    },
    breakpoints: [
        {
            label: '971 - 9999',
            minWidth: 971,
            maxWidth: 9999,
            sizesSupported: [
                [
                    300,
                    250
                ],
                [
                    300,
                    600
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
                    1,
                    1
                ]
            ]
        },
        {
            label: '729 - 970',
            minWidth: 729,
            maxWidth: 970,
            sizesSupported: [
                [
                    300,
                    250
                ],
                [
                    728,
                    90
                ],
                [
                    1,
                    1
                ]
            ]
        },
        {
            label: '0 - 728',
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
                ],
                [
                    1,
                    1
                ]
            ]
        }
    ]
}
