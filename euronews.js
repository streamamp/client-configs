var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: false,
    apsPubID: '9321d0fd-4a6b-4406-ab30-4ad2a20beeaa',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'Euronews/Euronews',
    token: '',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    preventFirstAuctionInit: true,
    preventInitAdServer: true,
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    predefinedSlotOverride: true,
    predefinedSlotOverrideMethod: 'euronews',
    beforeInit: function () {
        window.streamampBroker.subscribe("streamampConfigReady", function () {
            window.dispatchEvent(new Event("streamampConfigReady"))
        });
        window.streamampBroker.subscribe("streamampReady", function () {
            window.dispatchEvent(new Event("streamampReady"))
        })
    },
    adUnits: [
        {
            code: "adzone-leaderboard_1",
            path: "/6458/SA_Euronews/Unit1",
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
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        site_id: '125534'
                    },
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '284806',
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
                        '730 - 970'
                    ],
                    params: {
                        siteId: '305770',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305772',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251062,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251064,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41234"
                    },
                    labelAny: [
                        '971 - 9999'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41236"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41237"
                    },
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 14006189
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        placementId: 14006191
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14006193
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16837095
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        placementId: 16837101
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16837103
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit1_970x250@970x250',
                        uid: '1624291'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit1_728x90@728x90',
                        uid: '1624295'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit1_320x50@320x50',
                        uid: '1624296'
                    }
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540337036",
                        delDomain: "streamamp-d.openx.net"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382489,
                        publisherSubId: "EuroNews_Unit1_728x90"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382490,
                        publisherSubId: "EuroNews_Unit1_320x50"
                    },
                    labelAny: [
                       '469 - 729',
                        '0 - 468'
                    ]
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
                    ]
                ],
                '730 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '469 - 729': [
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
            code: "adzone-leaderboard_2",
            path: "/6458/SA_Euronews/Unit2",
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
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        site_id: '125534'
                    },
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '305774',
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
                        '730 - 970'
                    ],
                    params: {
                        siteId: '305778',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305780',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251062,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251064,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41238"
                    },
                    labelAny: [
                        '971 - 9999'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41240"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41241"
                    },
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 14006194
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        placementId: 14006196
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14006197
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16837105
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        placementId: 16837106
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16837108
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit2_970x250@970x250',
                        uid: '1624300'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit2_728x90@728x90',
                        uid: '1624600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit2_320x50@320x50',
                        uid: '1624602'
                    }
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540337037",
                        delDomain: "streamamp-d.openx.net"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382489,
                        publisherSubId: "EuroNews_Unit2_728x90"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382490,
                        publisherSubId: "EuroNews_Unit2_320x50"
                    },
                    labelAny: [
                       '469 - 729',
                        '0 - 468'
                    ]
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
                    ]
                ],
                '730 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '469 - 729': [
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
            code: "adzone-mpu_1",
            path: "/6458/SA_Euronews/Unit3",
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
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        site_id: '125534'
                    },
                },
                 {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305782',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251070,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41242"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                 {
                    bidder: 'streamamp',
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14006198
                    }
                },
               {
                    bidder: 'totaljobs',
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16837109
                    }
                },
                 {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit3_300x250@300x250',
                        uid: '1624611'
                    }
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540337039",
                        delDomain: "streamamp-d.openx.net"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382491,
                        publisherSubId: "EuroNews_Unit3_300x250"
                    },
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '730 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '469 - 729': [
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
            code: "adzone-halfpage_1",
            path: "/6458/SA_Euronews/Unit4",
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
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        site_id: '125534'
                    },
                },
                 {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305784',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729'
                    ],
                    params: {
                        siteId: '305785',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251070,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41243"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41244"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729'
                    ]
                },
                 {
                    bidder: 'streamamp',
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14006199
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729'
                    ],
                    params: {
                        placementId: 14006200
                    }
                },
               {
                    bidder: 'totaljobs',
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16837109
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729'
                    ],
                    params: {
                        placementId: 16837111
                    }
                },
                 {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit4_300x250@300x250',
                        uid: '1624612'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit_300x600@300x600',
                        uid: '1624613'
                    }
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540337040",
                        delDomain: "streamamp-d.openx.net"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382491,
                        publisherSubId: "EuroNews_Unit4_300x250"
                    },
                    labelAny: [
                         '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
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
                    ]
                ],
                '730 - 970': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '469 - 729': [
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
            code: "adzone-leaderboard-wallpaper",
            path: "/6458/SA_Euronews/Unit5",
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
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        site_id: '125534'
                    },
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '284806',
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
                        '730 - 970'
                    ],
                    params: {
                        siteId: '305770',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        siteId: '305772',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251062,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                // {
                //     bidder: "districtmDMX",
                //     params: {
                //         dmxid: 251064,
                //         memberid: 100615
                //     },
                //     labelAny: [
                //         '971 - 9999'
                //     ]
                // },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41234"
                    },
                    labelAny: [
                        '971 - 9999'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41236"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ]
                },
                {
                    bidder: "emx_digital",
                    params: {
                        tagid: "41237"
                    },
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 14006189
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        placementId: 14006191
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 14006193
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16837095
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        placementId: 16837101
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        placementId: 16837103
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit1_970x250@970x250',
                        uid: '1624291'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '730 - 970'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit1_728x90@728x90',
                        uid: '1624295'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '469 - 729',
                        '0 - 468'
                    ],
                    params: {
                        publisherId: '127864',
                        adSlot: 'euronews_unit1_320x50@320x50',
                        uid: '1624296'
                    }
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540337036",
                        delDomain: "streamamp-d.openx.net"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                        '469 - 729',
                        '0 - 468'
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382489,
                        publisherSubId: "EuroNews_Unit1_728x90"
                    },
                    labelAny: [
                        '971 - 9999',
                        '730 - 970',
                    ]
                },
                {
                    bidder: "criteo",
                    params: {
                        zoneId: 1382490,
                        publisherSubId: "EuroNews_Unit1_320x50"
                    },
                    labelAny: [
                       '469 - 729',
                        '0 - 468'
                    ]
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
                    ]
                ],
                '730 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '469 - 729': [
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
            code: "adzone-mpu_2",
            path: "/6458/SA_Euronews/Unit9",
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        site_id: '125534'
                    },
                }
            ],
            breakpoints: {
                '971 - 9999': []
            }
        },
        {
            code: "adzone-halfpage_2",
            path: "/6458/SA_Euronews/Unit10",
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        site_id: '125534'
                    },
                }
            ],
            breakpoints: {
                '971 - 9999': []
            }
        }
    ],
    cmp: {
        isEnabled: false
    },
    breakpoints: [
        {
            label: '971 - 9999',
            minWidth: 971,
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
                    1,
                    1
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
        }
    ]
};

// StreamAMP Header Bidder v1
var streamampUtils = {
    isStreamampDebugMode: function () {
        var url = window.location.href;
        var name = 'streamamp_debug';
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) {
            return false;
        }
        if (!results[2]) {
            return false;
        }
        return (decodeURIComponent(results[2].replace(/\+/g, ' ')).toUpperCase() === 'TRUE');
    },
    getBrowserWidth: function () {
        var width;

        var topWindow = window.top || window;

        // if outer width is undefined or 0. 10000 is out of the breakpoint interval
        var outerWidth = topWindow.outerWidth || 10000;

        if (topWindow.innerWidth !== undefined) {
            width = topWindow.innerWidth;
        } else if (topWindow.document.documentElement !== undefined && topWindow.document.documentElement.clientWidth !== undefined && topWindow.document.documentElement.clientWidth != 0) {
            width = topWindow.document.documentElement.clientWidth;
        } else {
            width = topWindow.document.body.clientWidth;
        }

        var minWidth = Math.min(width, outerWidth)
        streamampUtils.log('Getting browser width', minWidth);
        return minWidth;
    },
    loadScript: function (url) {
        var scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.src = url;

        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(scriptEl, node);
    },
    normalizeKeyValue: function (keyValue) {
        if (keyValue && keyValue.keyValueType === 'variable') {
            keyValue.value = window[keyValue.value];
            if (keyValue.value === '') {
                keyValue.value = undefined;
            }
        }

        return keyValue;
    },
    styleDebugLog: function (type, arguments) {
        arguments = Array.from(arguments)

        // Choose a text color based of the type of log
        var typeTextColor
        switch (type) {
            case 'pbjs':
                typeTextColor = '#3B88C3;';
                break;
            case 'gpt':
                typeTextColor = '#1E8E3E;';
                break;
            case 'aps':
                typeTextColor = '#FF9900;';
                break;
            default:
                typeTextColor = '';
        }

        // Set the styling for the type
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: ' + typeTextColor + '; padding: 1px 0;')
        // Set the styling for 'AMP'
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: #FFF; background: #2F0D00; padding: 1px 3px; margin: 2px 0; border-radius: 3px;')
        // Set the styling for 'Stream'
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: #2F0D00; padding: 1px 0; margin: 2px')
        // Add 'StreamAMP' and the log type to the beginning of the log message
        arguments.unshift('%cSTREAM%cAMP' + '%c  ' + type.toUpperCase() + ': ')
        return arguments
    },
    log: function () {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('debug', arguments));
        }
    },
    logPbjs: function () {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('pbjs', arguments));
        }
    },
    logGpt: function () {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('gpt', arguments));
        }
    },
    logAps: function () {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('aps', arguments));
        }
    },
    logError: function () {
        if (streamampDebugMode) {
            console.error.apply(this, streamampUtils.styleDebugLog('error', arguments));
        } else {
            console.error.apply(this, arguments);
        }
    },
    stickyAd: function (adUnits) {
        var stickyAdUnits = adUnits.filter(function (adUnit) {
            return adUnit.isSticky === true;
        });

        if (stickyAdUnits.length === 0) {
            return;
        }

        googletag.cmd.push(function () {
            googletag.pubads().addEventListener('slotRenderEnded', function (e) {
                if (!e.isEmpty) {
                    stickyAdUnits.filter(function (adUnit) {
                        return adUnit.code === e.slot.getSlotElementId();
                    }).map(function (adUnit) {
                        streamampUtils.applyStyle(adUnit);
                    });
                }
            });
        });
    },
    applyStyle: function (adUnit) {
        var adUnitCode = adUnit.code;
        var stickyAdPosition = adUnit.stickyAdPosition;

        var adContainer = document.getElementById(adUnitCode);

        if (adContainer) {
            adContainer.style.backgroundColor = 'rgba(237, 237, 237, 0.82)';
            adContainer.style.position = 'fixed';
            adContainer.style.bottom = '0px';
            adContainer.style.padding = '4px 0 0 0';
            adContainer.style.zIndex = '9999';
            adContainer.style.width = '100%';
            adContainer.style.textAlign = 'center';

            if (stickyAdPosition === 'bl') {
                // bottom left
                streamampUtils.log('Applying styles for sticky ad unit', {code: adUnitCode, position: 'bottom left'});
                adContainer.style.left = '0px';
            } else if (stickyAdPosition === 'br') {
                // bottom right
                streamampUtils.log('Applying styles for sticky ad unit', {code: adUnitCode, position: 'bottom right'});
                adContainer.style.right = '0px';
            } else {
                // default to be bottom center
                streamampUtils.log('Applying styles for sticky ad unit', {code: adUnitCode, position: 'bottom center'});
                adContainer.style.transform = 'translate(-50%, 0%)';
                adContainer.style.left = '50%';
            }

            adContainer.style.display = '';

            var closeAdButton = document.createElement('img');
            closeAdButton.id = "close-button";
            closeAdButton.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjQyNC4wMzIsNDQzLjcgNDQzLjcsNDI0LjAzMiAzMjUuNjY3LDMwNiA0NDMuNywxODcuOTY3IDQyNC4wMzIsMTY4LjMgMzA2LDI4Ni4zMzMgMTg3Ljk2NywxNjguMyAxNjguMywxODcuOTY3ICAgICAyODYuMzMzLDMwNiAxNjguMyw0MjQuMDMyIDE4Ny45NjcsNDQzLjcgMzA2LDMyNS42NjcgICAiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNjEyLDMwNkM2MTIsMTM3LjAwNCw0NzQuOTk1LDAsMzA2LDBDMTM3LjAwNCwwLDAsMTM3LjAwNCwwLDMwNmMwLDE2OC45OTUsMTM3LjAwNCwzMDYsMzA2LDMwNiAgICBDNDc0Ljk5NSw2MTIsNjEyLDQ3NC45OTUsNjEyLDMwNnogTTI3LjgxOCwzMDZDMjcuODE4LDE1Mi4zNiwxNTIuMzYsMjcuODE4LDMwNiwyNy44MThTNTg0LjE4MiwxNTIuMzYsNTg0LjE4MiwzMDYgICAgUzQ1OS42NCw1ODQuMTgyLDMwNiw1ODQuMTgyUzI3LjgxOCw0NTkuNjQsMjcuODE4LDMwNnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
            closeAdButton.style.position = "absolute";
            closeAdButton.style.top = "-12px";
            closeAdButton.style.right = "3px";
            closeAdButton.style.maxWidth = "24px";
            closeAdButton.style.maxHeight = "24px";

            // add button event
            closeAdButton.onclick = function () {
                adContainer.style.display = 'none';
            }
            ;
            adContainer.appendChild(closeAdButton);

            var frame = document.getElementById("google_ads_iframe_/5548363/StreamAMP_1x1_0");

            if (frame && frame.contentWindow.length) {
                document.getElementById("StreamAMP_1x1").style.backgroundColor = "";
                document.getElementById("close-button").style.display = "none";
            }
        }
    },
    polyfills: function () {
        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function (search, this_len) {
                if (this_len === undefined || this_len > this.length) {
                    this_len = this.length;
                }
                return this.substring(this_len - search.length, this_len) === search;
            }
            ;
        }

        // .find polyfill
        if (!Array.prototype.find) {
            Object.defineProperty(Array.prototype, 'find', {
                value: function (predicate) {
                    // 1. Let O be ? ToObject(this value).
                    if (this == null) {
                        throw new TypeError('"this" is null or not defined');
                    }

                    var o = Object(this);

                    // 2. Let len be ? ToLength(? Get(O, "length")).
                    var len = o.length >>> 0;

                    // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                    if (typeof predicate !== 'function') {
                        throw new TypeError('predicate must be a function');
                    }

                    // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                    var thisArg = arguments[1];

                    // 5. Let k be 0.
                    var k = 0;

                    // 6. Repeat, while k < len
                    while (k < len) {
                        // a. Let Pk be ! ToString(k).
                        // b. Let kValue be ? Get(O, Pk).
                        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                        // d. If testResult is true, return kValue.
                        var kValue = o[k];
                        if (predicate.call(thisArg, kValue, k, o)) {
                            return kValue;
                        }
                        // e. Increase k by 1.
                        k++;
                    }

                    // 7. Return undefined.
                    return undefined;
                },
                configurable: true,
                writable: true
            });
        }

        // .includes polyfill
        if (!Array.prototype.includes) {
            Object.defineProperty(Array.prototype, 'includes', {
                value: function (searchElement, fromIndex) {

                    if (this == null) {
                        throw new TypeError('"this" is null or not defined');
                    }

                    // 1. Let O be ? ToObject(this value).
                    var o = Object(this);

                    // 2. Let len be ? ToLength(? Get(O, "length")).
                    var len = o.length >>> 0;

                    // 3. If len is 0, return false.
                    if (len === 0) {
                        return false;
                    }

                    // 4. Let n be ? ToInteger(fromIndex).
                    //    (If fromIndex is undefined, this step produces the value 0.)
                    var n = fromIndex | 0;

                    // 5. If n ≥ 0, then
                    //  a. Let k be n.
                    // 6. Else n < 0,
                    //  a. Let k be len + n.
                    //  b. If k < 0, let k be 0.
                    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                    function sameValueZero(x, y) {
                        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                    }

                    // 7. Repeat, while k < len
                    while (k < len) {
                        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                        // b. If SameValueZero(searchElement, elementK) is true, return true.
                        if (sameValueZero(o[k], searchElement)) {
                            return true;
                        }
                        // c. Increase k by 1.
                        k++;
                    }

                    // 8. Return false
                    return false;
                }
            });
        }

        // Object.values polyfill
        Object.values = Object.values ? Object.values : function (obj) {
            var allowedTypes = ["[object String]", "[object Object]", "[object Array]", "[object Function]"];
            var objType = Object.prototype.toString.call(obj);

            if (obj === null || typeof obj === "undefined") {
                throw new TypeError("Cannot convert undefined or null to object");
            } else if (!~allowedTypes.indexOf(objType)) {
                return [];
            } else {
                // if ES6 is supported
                if (Object.keys) {
                    return Object.keys(obj).map(function (key) {
                        return obj[key];
                    });
                }

                var result = [];
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        result.push(obj[prop]);
                    }
                }

                return result;
            }
        };
    },
    MessageBroker: function () {
        this.observers = {};

        this.subscribe = function (event, callback) {
            var observers = this.observers[event] || [];
            observers.push(callback);
            this.observers[event] = observers;
        };
        this.unSubscribe = function (event, callback) {
            var observers = this.observers[event] || [];
            this.observers[event] = observers.filter(function (availableObs) {
                return availableObs !== callback;
            });
        };
        this.notify = function (event, data) {
            var observers = this.observers[event] || [];
            for (var i = 0; i < observers.length; i++) {
                observers[i](data);
            }
        };
    },
    processQueue: function () {
        window[streamampConfig.namespace].que.forEach(function (cmd) {
            if (typeof cmd.called === 'undefined' && typeof cmd === 'function') {
                try {
                    streamampUtils.log('processing command forEach:' + cmd);
                    cmd.call();
                    cmd.called = true;
                } catch (e) {
                    streamampUtils.logError('Error processing command :' + e.message);
                }
            }
        });

        window[streamampConfig.namespace].que.push = function (cmd) {
            if (typeof cmd === 'function') {
                try {
                    streamampUtils.log('processing command push :' + cmd);
                    cmd.call();
                } catch (e) {
                    streamampUtils.logError('Error processing command :' + e.message);
                }
            } else {
                streamampUtils.logError('Commands written into ', streamampConfig.namespace + '.cmd.push must be wrapped in a function');
            }
        };
    },
    prebidEvents: {
        auctionEndCallbacks: [],
        auctionEndQueue: {
            push: function (cb) {
                if (typeof cb === 'function') {
                    pbjs.que.push(function () {
                        if (pbjs.isAuctionEnded) {
                            cb.call();
                        } else {
                            streamampUtils.prebidEvents.auctionEndCallbacks.push(cb);
                            streamampUtils.log('streamampUtils.prebidEvents.auctionEndCallbacks', streamampUtils.prebidEvents.auctionEndCallbacks)
                        }
                    });
                } else {
                    streamampUtils.logError('Commands written into auctionEndQueue must be wrapped in a function');
                }
            }
        },
        processAuctionEndQueue: function () {
            streamampUtils.prebidEvents.auctionEndCallbacks.forEach(function (cb) {
                if (typeof cb === 'function') {
                    cb.call();
                } else {
                    streamampUtils.logError('Commands written into auctionEndQueue must be wrapped in a function');
                }
            });
            streamampUtils.prebidEvents.auctionEndCallbacks = [];
        }
    }
};

streamampUtils.polyfills()
streamampUtils.processQueue()
window.streamampBroker = new streamampUtils.MessageBroker();

var streamampDebugMode = streamampUtils.isStreamampDebugMode();

/* ------set up global variable ------ */
var dnsUrls = {
    a9: 'https://c.amazon-adsystem.com/aax2/apstag.js',
    prebid: 'https://static.amp.services/prebid3.4.0.js',
    gpt: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
    cmp: 'https://quantcast.mgr.consensu.org/'
};

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
// disables initial load
googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});

window.AD_UNITS_TOGGLE_OFF = window.AD_UNITS_TOGGLE_OFF || [];
streamampUtils.log('AD_UNITS_TOGGLE_OFF is', window.AD_UNITS_TOGGLE_OFF)
window.AD_UNITS_TOGGLE_ON = window.AD_UNITS_TOGGLE_ON || [];
streamampUtils.log('AD_UNITS_TOGGLE_ON is ', window.AD_UNITS_TOGGLE_ON)

window.adRefreshTimer = null;

window[streamampConfig.namespace] = window[streamampConfig.namespace] || {};
window[streamampConfig.namespace].que = window[streamampConfig.namespace].que || [];

window.gptAdSlots = {}

var _streamampVariables = {
    levels: window.location.pathname.split('/').filter(function (level) {
        return level !== '';
    }),
    bidTimeout: streamampConfig.bidTimeout * 1e3 || 2000,
    currentBreakpoint: streamampGetBreakpoint()
}

streamampUtils.log('URL Levels', _streamampVariables.levels)
streamampUtils.log('Setting the bid timeout', _streamampVariables.bidTimeout)
/* ----------------------------------- */

// Prefetch libs
streamampAddDNSPrefetch(Object.values(dnsUrls));

streamampSetup()

// streamampSetup
function streamampSetup() {
    streamampUtils.log('Running setup()')

    pbjs.que.push(function () {
        if (streamampConfig.afterLoad && typeof streamampConfig.afterLoad === 'function') {
            streamampUtils.log('Running afterLoad event', streamampConfig.afterLoad);
            streamampConfig.afterLoad();
        }
    });

    // initialize GPT
    streamampUtils.loadScript(dnsUrls.gpt);
    streamampUtils.logGpt('Initializing Ad Server, loading GoogleTag library gpt.js');

    // initialize Prebid
    streamampUtils.loadScript(dnsUrls.prebid);
    var prebidVersion = dnsUrls.prebid.split('/').filter(function (item) {
        return item.indexOf('prebid') != -1
    }).join('')
    streamampUtils.logPbjs('Loading', prebidVersion);

    // Load apstag library
    if (streamampConfig.a9Enabled) {
        streamampUtils.logAps('APS/A9 enabled, loading apstag library apstag.js')
        !function (a9, a, p, s, t, A, g) {
            if (a[a9])
                return;

            function q(c, r) {
                a[a9]._Q.push([c, r])
            }

            a[a9] = {
                init: function () {
                    q("i", arguments)
                },
                fetchBids: function () {
                    q("f", arguments)
                },
                setDisplayBids: function () {
                },
                targetingKeys: function () {
                    return []
                },
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsByTagName(s)[0];
            g.parentNode.insertBefore(A, g)
        }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

        apstag.init({
            pubID: streamampConfig.apsPubID,
            adServer: 'googletag'
        });
    }

    // Level Targeting
    if (streamampConfig.levelTargeting) {
        for (var levelIndex = 1; levelIndex < 6; levelIndex++) {
            window.streamampConfig.globalKeyValues.push({
                name: 'Level' + levelIndex,
                value: _streamampVariables.levels[levelIndex - 1] || 'none',
                keyValueType: 'static'
            });
        }
    }
    ;

    // Toggle off URLS
    if (streamampConfig.toggleOffUrls) {
        streamampConfig.toggleOffUrls.forEach(function (url) {

            var level = url.level;
            var path = url.url;
            var levelsKeys = [];

            levelsKeys.push(level);

            var toggleOff = false;
            levelsKeys.forEach(function (levelKey) {
                if (_streamampVariables.levels && _streamampVariables.levels[levelKey - 1] && _streamampVariables.levels[levelKey - 1].toLowerCase() === path.toLowerCase()) {
                    toggleOff = true;
                }
            })

            if (toggleOff) {
                window.streamampConfig.adUnits.forEach(function (adUnit) {
                    adUnit.bids = []
                })
            }
        })
    }
    ;

    // Enable Analytics Module
    pbjs.que.push(function () {
        streamampUtils.logPbjs('Queuing enableAnalytics()')
        pbjs.enableAnalytics({
            provider: 'streamamp',
            options: {
                publisher_id: streamampConfig.publisher_id,
                token: streamampConfig.token
            }
        });
    });

    pbjs.que.push(function () {
        // Set Aliased bidders
        pbjs.aliasBidder('appnexus', 'streamamp')
        pbjs.aliasBidder('appnexus', 'totaljobs')
    });

    // PBJS Config Settings
    pbjs.que.push(function () {
        var currencyValue = streamampConfig.currency.value;
        var currencyFlag = streamampConfig.currency.enabled;
        var currencyFileURL = 'https://static.amp.services/currency/conversion-rates.json';
        streamampUtils.logPbjs('Queuing setConfig() for consent management')
        pbjs.setConfig({
            consentManagement: {
                cmpApi: 'iab',
                timeout: 10000,
                allowAuctionWithoutConsent: true
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for filter settings')
        pbjs.setConfig({
            userSync: {
                filterSettings: {
                    iframe: {
                        bidders: '*',
                        filter: 'include'
                    }
                }
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for user ids')
        pbjs.setConfig({
            userSync: {
                userIds: [{
                    name: "pubCommonId",
                    storage: {
                        type: "cookie",
                        name: "_pubCommonId",
                        expires: 365
                    }
                }]
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for price granularity')
        pbjs.setConfig({
            priceGranularity: generatePriceGranularity(streamampConfig.pbjsPriceGranularity)
        });
        streamampUtils.logPbjs('Queuing setConfig() for bidder timeout', _streamampVariables.bidTimeout)
        pbjs.setConfig({
            bidderTimeout: _streamampVariables.bidTimeout
        });
        streamampUtils.logPbjs('Queuing setConfig() for size config (breakpoints)', streamampConfig.breakpoints.map(function (breakpoint) {
            return breakpoint.label
        }))
        pbjs.setConfig({
            sizeConfig: streamampConfig.breakpoints.map(function (breakpoint) {
                return {
                    'mediaQuery': '(min-width: ' + breakpoint.minWidth + 'px) and (max-width: ' + breakpoint.maxWidth + 'px)',
                    'sizesSupported': breakpoint.sizesSupported,
                    'labels': [breakpoint.label],
                }
            })
        });

        if (currencyFlag && currencyValue.length !== 0) {
            streamampUtils.logPbjs('Queuing setConfig() for currency. Ad server currency is', currencyValue)
            if (currencyValue === 'JPY') {
                pbjs.setConfig({
                    currency: {
                        adServerCurrency: currencyValue,
                        conversionRateFile: currencyFileURL,
                        granularityMultiplier: 100
                    }
                });
            } else {
                pbjs.setConfig({
                    currency: {
                        adServerCurrency: currencyValue,
                        conversionRateFile: currencyFileURL,
                        granularityMultiplier: 1
                    }
                });
            }
        } else {
            streamampUtils.logPbjs('Queuing setConfig() for currency. Ad server currency is USD')
            pbjs.setConfig({
                currency: {
                    adServerCurrency: 'USD',
                    conversionRateFile: currencyFileURL,
                    granularityMultiplier: 1
                }
            });
        }
    });

    if (!streamampConfig.preventInit) {
        streamampInit()
    }
}

// Init Auction
function streamampInit() {
    pbjs.isAuctionEnded = false;
    streamampUtils.log('Running init()')

    // Initialize CMP if enabled
    if (streamampConfig.cmp.isEnabled) {
        if (streamampConfig.cmp.pathnamesToExclude && streamampConfig.cmp.pathnamesToExclude.length > 0 && streamampConfig.cmp.pathnamesToExclude.indexOf(window.location.pathname) != -1) {
            streamampUtils.log('CMP pathnames to exclude are', streamampConfig.cmp.pathnamesToExclude)
            streamampUtils.log('Preventing CMP initialization as', window.location.pathname, 'is in streamampConfig.cmp.pathnamesToExclude')
        } else {
            streamampInitializeCmp()
        }
    }
    ;

    if (streamampConfig.beforeInit && typeof streamampConfig.beforeInit === 'function') {
        streamampUtils.log('Running beforeInit event', streamampConfig.beforeInit);
        streamampConfig.beforeInit();
    }
    // filters ad units for current break points - removing unnecessary bidders
    var adUnitsGPT = streamampGetAdUnitsPerBreakpoint();

    var adUnitsAPS
    if (streamampConfig.a9Enabled) {
        // takes the filtered ad units and generates aps ad units
        adUnitsAPS = streamampCreateAPSAdUnits(adUnitsGPT);
    }

    // removes the old/pre-existing ad units
    if (pbjs.adUnits && pbjs.adUnits.length) {
        var oldAdUnitCodes = pbjs.adUnits.map(function (adUnit) {
            return adUnit.code;
        });
        streamampDestroySlots(oldAdUnitCodes);
    }

    pbjs.que.push(function () {
        streamampUtils.logPbjs('Queuing addAdUnits() for', adUnitsGPT)
        pbjs.addAdUnits(adUnitsGPT);
    });

    googletag.cmd.push(function () {

        var predefinedSlotIds = googletag.pubads().getSlots().map(function (slot) {
            return slot.getSlotElementId();
        });

        // defines slots
        adUnitsGPT.forEach(function (adUnit) {
            streamampDefineAdUnitSlot(adUnit, predefinedSlotIds)
        });

        if (streamampConfig.gptSingleRequestEnabled) {
            streamampUtils.logGpt('Enabling single request (SRA)');
            googletag.pubads().enableSingleRequest();
        }

        if (streamampConfig.hasCollapedEmptyDivs) {
            streamampUtils.logGpt('Enabling collapse of empty ad divs');
            googletag.pubads().collapseEmptyDivs(true, true);
        }

        streamampUtils.logGpt('Enabling googletag service');
        googletag.enableServices();
    })

    if (streamampConfig.afterInit && typeof streamampConfig.afterInit === 'function') {
        streamampUtils.log('Running afterInit event', streamampConfig.afterInit);
        streamampConfig.afterInit();
    }

    if (streamampConfig.hasRefreshBids) {
        streamampRefresh(streamampConfig.adUnitsToRefresh)
    }

    streamampUtils.stickyAd(adUnitsGPT);

    if (!streamampConfig.preventFirstAuctionInit) {
        streamampUtils.log('starts auction')
        auction(adUnitsGPT, adUnitsAPS)
    } else {
        pbjs.isAuctionEnded = true;
        streamampUtils.prebidEvents.processAuctionEndQueue();
        window.streamampBroker.notify('streamampConfigReady');
    }
}

function streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS) {

    // Declare header bidders
    var bidders = ['prebid'];

    if (streamampConfig.a9Enabled) {
        bidders = ['a9', 'prebid'];
    }

    streamampUtils.log('Fetching header bids for bidders', bidders)

    // Keep track of bidders state to determine when to send ad server request
    var requestManager = {
        adserverRequestSent: false,
    };

    // Loop through bidder array and add the bidders to the request manager
    bidders.forEach(function (bidder) {
        requestManager[bidder] = false;
    });

    // Return true if all bidders have returned
    function allBiddersBack() {
        var allBiddersBack = bidders // Get the booleans from the object
            .map(function (bidder) {
                return requestManager[bidder];
            })// Remove false values - indicates that the bidder has responded
            .filter(Boolean)// If length is equal to bidders, all bidders are back
            .length === bidders.length;
        streamampUtils.log('Checking if all bidders are back', allBiddersBack)
        return allBiddersBack;
    }

    // Handler for header bidder responses
    function headerBidderBack(bidder) {
        // Return early if request to adserver is already sent
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        // Flip bidders back
        if (bidder === 'a9') {
            streamampUtils.logAps('Handling header bidder back for A9/APS')
            requestManager.a9 = true;
        } else if (bidder === 'prebid') {
            streamampUtils.logPbjs('Handling header bidder back for Prebid')
            requestManager.prebid = true;
        }

        // If all bidders are back, send the request to the ad server
        if (allBiddersBack()) {
            sendAdServerRequest();
        }
    }

    // Get ads from GAM
    function sendAdServerRequest() {
        // Return early if request already sent
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        // Flip boolean that keeps track of whether the ad server request was sent
        requestManager.adserverRequestSent = true;
        // Flip pbjs boolean to tell pbjs the ad server has already been called
        pbjs.adserverRequestSent = true;
        // Flip boolean for ad Sserver request to avoid duplicate requests
        requestManager.sendAdServerRequest = true;
        // Set bid targeting and make ad request to GAM
        googletag.cmd.push(function () {

            if (streamampConfig.a9Enabled) {
                apstag.setDisplayBids();
                streamampUtils.logAps('Setting display bids')
            }

            pbjs.que.push(function () {
                streamampUtils.logPbjs('Queuing setTargetingForGPTAsync()')
                pbjs.setTargetingForGPTAsync();
                streamampAddClientTargeting();

                pbjs.isAuctionEnded = true;
                window.streamampBroker.notify('streamampReady');
                streamampUtils.prebidEvents.processAuctionEndQueue();
            });

            streamampUtils.logGpt('Sending ad server request')
        });
    }

    // Request all bids
    function requestBids(adUnitsGPT, adUnitsAPS, bidTimeout) {
        // Request bids from apstag
        if (streamampConfig.a9Enabled) {
            streamampUtils.logAps('Fetching bids for', adUnitsAPS)
            apstag.fetchBids({
                slots: adUnitsAPS,
                timeout: bidTimeout
            }, function (bids) {
                streamampUtils.logAps('Bids received (all)', bids, '(filtered out)', bids.filter(function (bid) {
                    return bid.amzniid
                }))
                headerBidderBack('a9');
            });
        }

        // Request bids from prebid
        pbjs.que.push(function () {
            streamampUtils.logPbjs('Queuing requestBids()')
            pbjs.requestBids({
                timeout: bidTimeout,
                bidsBackHandler: function (bidResponses) {
                    headerBidderBack('prebid');
                }
            });
        });
    }

    requestBids(adUnitsGPT, adUnitsAPS, _streamampVariables.bidTimeout);

    // Set timeout to send request to call sendAdServerRequest() after timeout if all bidders haven't returned before then
    window.setTimeout(function () {
        sendAdServerRequest();
    }, _streamampVariables.bidTimeout);
}

function auction(adUnitsGPT, adUnitsAPS) {

    // Fetch header bids
    if (window.__cmp && !window.__cmp.streamampOverridden) {
        window.__cmp('getConsentData', null, function (data, success) {
            streamampUtils.log('Getting CMP Consent Data', {data: data, success: success})
            streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS);
        });
    } else {
        streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS);
    }
}

// Function to initialize CMP
function streamampInitializeCmp() {
    streamampUtils.log('Initializing CMP')
    var elem = document.createElement('script');
    elem.src = 'https://quantcast.mgr.consensu.org/cmp.js';
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
    (function () {
        var gdprAppliesGlobally = false;

        function addFrame() {
            if (!window.frames['__cmpLocator']) {
                if (document.body) {
                    var body = document.body,
                        iframe = document.createElement('iframe');
                    iframe.style = 'display:none';
                    iframe.name = '__cmpLocator';
                    body.appendChild(iframe);
                } else {
                    // In the case where this stub is located in the head,
                    // this allows us to inject the iframe more quickly than
                    // relying on DOMContentLoaded or other events.
                    setTimeout(addFrame, 5);
                }
            }
        }

        addFrame();

        function cmpMsgHandler(event) {
            var msgIsString = typeof event.data === "string";
            var json;
            if (msgIsString) {
                json = event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
            } else {
                json = event.data;
            }
            if (json.__cmpCall) {
                var i = json.__cmpCall;
                window.__cmp(i.command, i.parameter, function (retValue, success) {
                    var returnMsg = {
                        "__cmpReturn": {
                            "returnValue": retValue,
                            "success": success,
                            "callId": i.callId
                        }
                    };
                    event.source.postMessage(msgIsString ?
                        JSON.stringify(returnMsg) : returnMsg, '*');
                });
            }
        }

        window.__cmp = function (c) {
            var b = arguments;
            if (!b.length) {
                return __cmp.a;
            } else if (b[0] === 'ping') {
                b[2]({
                    "gdprAppliesGlobally": gdprAppliesGlobally,
                    "cmpLoaded": false
                }, true);
            } else if (c == '__cmp')
                return false;
            else {
                if (typeof __cmp.a === 'undefined') {
                    __cmp.a = [];
                }
                __cmp.a.push([].slice.apply(b));
            }
        };
        window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
        window.__cmp.msgHandler = cmpMsgHandler;
        if (window.addEventListener) {
            window.addEventListener('message', cmpMsgHandler, false);
        } else {
            window.attachEvent('onmessage', cmpMsgHandler);
        }
    })();

    // Initialize CMP with custom configuration
    window.__cmp('init', streamampConfig.cmp.config);

    // Apply custom CMP styles if true
    if (streamampConfig.cmp.hasCustomStyles && isNotEmptyCmp(streamampConfig.cmp.styles)) {
        var style = document.createElement('style');
        var ref = document.querySelector('script');

        var quantcastTheme = streamampConfig.cmp.styles;
        streamampUtils.log('Applying custom CMP styles', quantcastTheme)

        style.innerHTML =
            // Background
            (isNotEmptyCmp(quantcastTheme.ui) && quantcastTheme.ui.backgroundColor
                ? '.qc-cmp-ui' + '{' +
                'background-color:' + quantcastTheme.ui.backgroundColor + '!important;' +
                '}'
                : '') +
            // Main Text Color
            (isNotEmptyCmp(quantcastTheme.ui) && quantcastTheme.ui.textColor
                ? '.qc-cmp-ui,' +
                '.qc-cmp-ui .qc-cmp-main-messaging,' +
                '.qc-cmp-ui .qc-cmp-messaging,' +
                '.qc-cmp-ui .qc-cmp-beta-messaging,' +
                '.qc-cmp-ui .qc-cmp-title,' +
                '.qc-cmp-ui .qc-cmp-sub-title,' +
                '.qc-cmp-ui .qc-cmp-purpose-info,' +
                '.qc-cmp-ui .qc-cmp-table,' +
                '.qc-cmp-ui .qc-cmp-vendor-list,' +
                '.qc-cmp-ui .qc-cmp-vendor-list-title' + '{' +
                'color:' + quantcastTheme.ui.textColor + '!important;' +
                '}'
                : '') +
            // Links
            (isNotEmptyCmp(quantcastTheme.link)
                ? '.qc-cmp-ui a,' +
                '.qc-cmp-ui .qc-cmp-alt-action,' +
                '.qc-cmp-ui .qc-cmp-link' + '{' +
                (quantcastTheme.link.textColor ? 'color:' + quantcastTheme.link.textColor + '!important;' : '') +
                (quantcastTheme.link.isUnderlined ? 'text-decoration: underline' : 'text-decoration: none' + '!important;') +
                '}'
                : '') +
            // Buttons
            (isNotEmptyCmp(quantcastTheme.primaryButton)
                ? '.qc-cmp-ui .qc-cmp-button' + '{' +
                (quantcastTheme.primaryButton.backgroundColor ? 'background-color:' + quantcastTheme.primaryButton.backgroundColor + '!important;' : '') +
                (quantcastTheme.primaryButton.borderColor ? 'border-color:' + quantcastTheme.primaryButton.borderColor + '!important;' : '') +
                (quantcastTheme.primaryButton.textColor ? 'color:' + quantcastTheme.primaryButton.textColor + '!important;' : '') +
                'background-image: none!important;' +
                '}'
                : '') +
            (isNotEmptyCmp(quantcastTheme.primaryButtonHover)
                ? '.qc-cmp-ui .qc-cmp-button:hover' + '{' +
                (quantcastTheme.primaryButtonHover.backgroundColor ? 'background-color:' + quantcastTheme.primaryButtonHover.backgroundColor + '!important;' : '') +
                (quantcastTheme.primaryButtonHover.borderColor ? 'border-color:' + quantcastTheme.primaryButtonHover.borderColor + '!important;' : '') +
                (quantcastTheme.primaryButtonHover.textColor ? 'color:' + quantcastTheme.primaryButtonHover.textColor + '!important;' : '') +
                'background-image: none!important;' +
                '}'
                : '') +
            (isNotEmptyCmp(quantcastTheme.secondaryButton)
                ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button' + '{' +
                (quantcastTheme.secondaryButton.backgroundColor ? 'background-color:' + quantcastTheme.secondaryButton.backgroundColor + '!important;' : '') +
                (quantcastTheme.secondaryButton.borderColor ? 'border-color:' + quantcastTheme.secondaryButton.borderColor + '!important;' : '') +
                (quantcastTheme.secondaryButton.textColor ? 'color:' + quantcastTheme.secondaryButton.textColor + '!important;' : '') +
                'background-image: none!important;' +
                '}'
                : '') +
            (isNotEmptyCmp(quantcastTheme.secondaryButtonHover)
                ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button:hover' + '{' +
                (quantcastTheme.secondaryButtonHover.backgroundColor ? 'background-color:' + quantcastTheme.secondaryButtonHover.backgroundColor + '!important;' : '') +
                (quantcastTheme.secondaryButtonHover.borderColor ? 'border-color:' + quantcastTheme.secondaryButtonHover.borderColor + '!important;' : '') +
                (quantcastTheme.secondaryButtonHover.textColor ? 'color:' + quantcastTheme.secondaryButtonHover.textColor + '!important;' : '') +
                'background-image: none!important;' +
                '}'
                : '') +
            (quantcastTheme.isSecondaryButtonHidden
                ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button' + '{' +
                'display: none!important;' +
                '}' +
                // Without the below the 'Reject all' button will not show on purpose/vendor pages
                '.qc-cmp-ui .qc-cmp-horizontal-buttons .qc-cmp-button.qc-cmp-secondary-button,' +
                '.qc-cmp-ui .qc-cmp-nav-bar-buttons-container .qc-cmp-button.qc-cmp-secondary-button' + '{' +
                'display: block!important;' +
                '}' +
                // Without the below the 'Accept' button will be too big on the main page - mobile view
                '@media screen and (max-width: 550px)' + '{' +
                '.qc-cmp-buttons.qc-cmp-primary-buttons' + '{' +
                'height: 3.8rem!important;' +
                '}' +
                '}'
                : '') +
            // Tables
            (isNotEmptyCmp(quantcastTheme.tableHeader)
                ? '.qc-cmp-ui .qc-cmp-table-header,' +
                '.qc-cmp-ui .qc-cmp-vendor-list .qc-cmp-vendor-row-header' + '{' +
                (quantcastTheme.tableHeader.backgroundColor ? 'background-color:' + quantcastTheme.tableHeader.backgroundColor + '!important;' : '') +
                (quantcastTheme.tableHeader.textColor ? 'color:' + quantcastTheme.tableHeader.textColor + '!important;' : '') +
                '}'
                : '') +
            (isNotEmptyCmp(quantcastTheme.tableRow)
                ? '.qc-cmp-ui .qc-cmp-publisher-purposes-table .qc-cmp-table-row,' +
                '.qc-cmp-ui .qc-cmp-table-row.qc-cmp-vendor-row' + '{' +
                (quantcastTheme.tableRow.backgroundColor ? 'background-color:' + quantcastTheme.tableRow.backgroundColor + '!important;' : '') +
                (quantcastTheme.tableRow.textColor ? 'color:' + quantcastTheme.tableRow.textColor + '!important;' : '') +
                '}'
                : '') +
            // Table content inherit color
            '.qc-cmp-ui .qc-cmp-purpose-description,' +
            '.qc-cmp-ui .qc-cmp-company-cell,' +
            '.qc-cmp-ui .qc-cmp-vendor-info-content,' +
            '.qc-cmp-ui .qc-cmp-vendor-policy,' +
            '.qc-cmp-ui .qc-cmp-vendor-info-list' + '{' +
            'color: inherit!important;' +
            '}' +
            // Toggles
            (isNotEmptyCmp(quantcastTheme.toggleOn)
                ? '.qc-cmp-ui .qc-cmp-toggle.qc-cmp-toggle-on,' +
                '.qc-cmp-ui .qc-cmp-small-toggle.qc-cmp-toggle-on' + '{' +
                (quantcastTheme.toggleOn.backgroundColor ? 'background-color:' + quantcastTheme.toggleOn.backgroundColor + '!important;' : '') +
                (quantcastTheme.toggleOn.borderColor ? 'border-color:' + quantcastTheme.toggleOn.borderColor + '!important;' : '') +
                '}'
                : '') +
            (isNotEmptyCmp(quantcastTheme.toggleOff)
                ? '.qc-cmp-ui .qc-cmp-toggle.qc-cmp-toggle-off,' +
                '.qc-cmp-ui .qc-cmp-small-toggle.qc-cmp-toggle-off' + '{' +
                (quantcastTheme.toggleOff.backgroundColor ? 'background-color:' + quantcastTheme.toggleOff.backgroundColor + '!important;' : '') +
                (quantcastTheme.toggleOff.borderColor ? 'border-color:' + quantcastTheme.toggleOff.borderColor + '!important;' : '') +
                '}'
                : '') +
            (quantcastTheme.toggleSwitchBorderColor
                ? '.qc-cmp-ui .qc-cmp-toggle-switch' + '{' +
                'border: 1px solid ' + quantcastTheme.toggleSwitchBorderColor + '!important;' +
                '}'
                : '') +
            (quantcastTheme.toggleStatusTextColor
                ? '.qc-cmp-ui .qc-cmp-toggle-status' + '{' +
                'color:' + quantcastTheme.toggleStatusTextColor + '!important;' +
                '}'
                : '') +
            (quantcastTheme.dropdownArrowColor
                ? '.qc-cmp-ui .qc-cmp-arrow-down' + '{' +
                'background:' +
                'url("data:image/svg+xml;charset=utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%23' +
                quantcastTheme.dropdownArrowColor.replace('#', '') +
                '\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M2 5l6 6 6-6\'/></svg>") 50% no-repeat' +
                '!important;' +
                '}'
                : '') +
            (quantcastTheme.additionalStyles ? quantcastTheme.additionalStyles : '') +
            '}';

        ref.parentNode.insertBefore(style, ref);
    }
}

// Checks if an object is NOT empty - for CMP styles
function isNotEmptyCmp(obj) {
    return obj ? Object.getOwnPropertyNames(obj).length > 0 : false;
};

function generatePriceGranularity(priceGranularity) {
    streamampUtils.log('Setting price granularity to', priceGranularity)
    if (priceGranularity != 'custom') {
        return priceGranularity;
    }

    return {
        'buckets': [{
            'precision': 2,
            'min': 0,
            'max': 20,
            'increment': 0.01
        }, {
            'precision': 2,
            'min': 20,
            'max': 30,
            'increment': 0.1
        }, {
            'precision': 2,
            'min': 30,
            'max': 40,
            'increment': 0.25
        }, {
            'precision': 2,
            'min': 40,
            'max': 50,
            'increment': 0.5
        }]
    };
}

function streamampConfigAdUnitSlotKeyValue(adUnitCode, googleSlot) {
    if (streamampConfig.keyValues && streamampConfig.keyValues[adUnitCode]) {
        streamampConfig.keyValues[adUnitCode].forEach(function (keyValue) {
            keyValue = streamampUtils.normalizeKeyValue(keyValue);

            if (keyValue.value !== undefined) {
                googleSlot = googleSlot.setTargeting(keyValue.name, [keyValue.value]);
            } else {
                googleSlot = googleSlot.setTargeting(keyValue.name, []);
            }
            streamampUtils.logGpt('Setting custom targeting', keyValue, 'for ad unit', adUnitCode);
        });
    }
    return googleSlot;
}

function streamampConfigSlotSafeFrame(googleSlot, adUnit) {
    streamampUtils.logGpt('Setting force safe frame for ad unit', adUnit)
    return googleSlot.setForceSafeFrame(true)
}

function streamampDefineAdUnitSlot(adUnit, predefinedSlotIds) {

    var googleSlot
    var predefinedSlotId
    if (streamampConfig.predefinedSlotOverride === true) {
        if (streamampConfig.predefinedSlotOverrideMethod === 'metoffice') {
            if (typeof unitFn !== "undefined") {
                var adUnitsToFilter = [];
                for (var key in window['metoffice']['advertising']['requiredSlots']) {
                    if (window['metoffice']['advertising']['requiredSlots'].hasOwnProperty(key)) {
                        adUnitsToFilter.push(key);
                    }
                }

                predefinedSlotId = predefinedSlotIds.find(function (slotId) {
                    return adUnitsToFilter.indexOf(adUnit.code) !== -1 && adUnit.code === slotId;
                });

            }
        } else if (streamampConfig.predefinedSlotOverrideMethod === 'euronews') {
            //1. Get the mapped slot Id. Initialize to empty to prevent errors when adding new ad units
            var mappedSlotIds = window['euronews']['advertising']['requiredSlots'] || [];

            //2. Find the predefined slot Id
            predefinedSlotId = predefinedSlotIds.find(function (slotId) {
                return mappedSlotIds.indexOf(adUnit.code) !== -1 && adUnit.code === slotId;
            });
        }

        if (predefinedSlotId) {
            googleSlot = googletag.pubads().getSlots().find(function (slot) {
                return slot.getSlotElementId() === predefinedSlotId;
            });

            adUnit.code = googleSlot.getSlotElementId();
            adUnit.path = googleSlot.getAdUnitPath();

        } else {
            pbjs.que.push(function () {
                pbjs.removeAdUnit(adUnit.code);
            });
            return;
        }
    } else {
        if (!adUnit.outOfPage) {
            googleSlot = googletag.defineSlot(adUnit.path, adUnit.breakpoints[_streamampVariables.currentBreakpoint.label], adUnit.code)
        } else {
            googleSlot = googletag.defineOutOfPageSlot(adUnit.path, adUnit.code);
        }
    }

    googleSlot = streamampConfigAdUnitSlotKeyValue(adUnit.code, googleSlot);

    if (googleSlot && adUnit.safeFrame) {
        googleSlot = streamampConfigSlotSafeFrame(googleSlot, adUnit);
    }

    if (!predefinedSlotId && googleSlot) {
        googleSlot = googleSlot.addService(googletag.pubads());
    }

    window.gptAdSlots[adUnit.code] = googleSlot;

    streamampUtils.log(streamampConfig.namespace, 'DEBUG:', 'Define Ad unit slot, code:', adUnit.code, ', path:', adUnit.path, ', sizes:', JSON.stringify(adUnit.mediaTypes.banner.sizes));

    streamampUtils.logGpt('Defining ad unit slot', {
        code: adUnit.code,
        path: adUnit.path,
        sizes: JSON.stringify(adUnit.mediaTypes.banner.sizes)
    });
    return googleSlot;
}

function streamampAddDNSPrefetch(urls) {
    if (urls && urls.length) {
        streamampUtils.log('Pre-fetching links', urls)
        var dnsPrefetchElement;
        var i;
        var node;

        for (i = 0; i < urls.length; i++) {
            dnsPrefetchElement = window.document.createElement('link');
            dnsPrefetchElement.rel = 'preconnect';
            dnsPrefetchElement.href = urls[i];
            node = window.document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(dnsPrefetchElement);
        }
    }
}

function streamampShouldShowAddUnit(adUnitCode) {
    if (window.AD_UNITS_TOGGLE_ON.length) {
        var toggleOn = window.AD_UNITS_TOGGLE_ON.indexOf(adUnitCode) !== -1;
        toggleOn ? streamampUtils.log('Ad unit', adUnitCode, 'is in AD_UNITS_TOGGLE_ON and should be shown') : null;
        return toggleOn;
    } else {
        var toggleOff = window.AD_UNITS_TOGGLE_OFF.indexOf(adUnitCode) === -1;
        toggleOff ? streamampUtils.log('Ad unit', adUnitCode, 'is not in AD_UNITS_TOGGLE_OFF and should be shown') : null;
        return toggleOff;
    }
}

function streamampAddClientTargeting() {
    var key;
    var keyValue;
    var i;
    var clientConfig = window[streamampConfig.namespace + 'ClientConfig'] || {};

    if (clientConfig && clientConfig.targets) {
        for (key in clientConfig.targets) {
            if (clientConfig.targets.hasOwnProperty(key)) {
                keyValue = {
                    name: key,
                    value: clientConfig.targets[key],
                    keyValueType: 'static'
                };

                keyValue = streamampUtils.normalizeKeyValue(keyValue);

                streamampUtils.logGpt('Setting custom targeting.', keyValue);
                googletag.pubads().setTargeting(keyValue.name, [keyValue.value]);

            }
        }
    }

    if (streamampConfig.globalKeyValues && streamampConfig.globalKeyValues.length) {
        for (i = 0; i < streamampConfig.globalKeyValues.length; i++) {
            keyValue = streamampConfig.globalKeyValues[i];
            keyValue = streamampUtils.normalizeKeyValue(keyValue);

            if (keyValue.value !== undefined) {
                googletag.pubads().setTargeting(keyValue.name, [keyValue.value]);
            } else {
                googletag.pubads().setTargeting(keyValue.name, []);
            }
        }
    }
}

function streamampGetBreakpoint() {
    var browserWidth = streamampUtils.getBrowserWidth();
    var i;
    var selectedBreakpoint;
    var breakpoint;

    for (i = 0; i < streamampConfig.breakpoints.length; i++) {
        breakpoint = streamampConfig.breakpoints[i];

        if (browserWidth >= breakpoint.minWidth && browserWidth <= breakpoint.maxWidth) {
            selectedBreakpoint = breakpoint;
            break;
        }
    }

    streamampUtils.log('Getting current breakpoint', selectedBreakpoint);
    return selectedBreakpoint;
}

function streamampGetAdUnitsPerBreakpoint() {
    var selectedBreakpoint = _streamampVariables.currentBreakpoint;
    var i;
    var adUnit;

    //Filter AdUnits
    var filteredAdUnits = [];
    if (selectedBreakpoint) {
        for (i = 0; i < streamampConfig.adUnits.length; i++) {
            adUnit = streamampConfig.adUnits[i];
            var key
            if (streamampConfig.adUnits[i].breakpoints) {
                key = Object.keys(streamampConfig.adUnits[i].breakpoints)
            } else {
                key = []
            }

            if (adUnit && streamampShouldShowAddUnit(adUnit.code) && key.indexOf(selectedBreakpoint.label) !== -1) {
                adUnit.bids = adUnit.bids.filter(function (bid) {
                    return bid.labelAny.includes(selectedBreakpoint.label)
                })
                filteredAdUnits.push(adUnit);
            }
        }
    }
    streamampUtils.log('Filtering ad units for current breakpoint', filteredAdUnits)
    return filteredAdUnits;
}

function streamampRefreshBids(selectedAdUnits) {
    pbjs.isAuctionEnded = false;
    streamampUtils.log(selectedAdUnits ? ('Refreshing', selectedAdUnits) : 'Refreshing all ad units')

    var bidTimeout = _streamampVariables.bidTimeout
    var gptSlots = streamampGetAdUnitsPerBreakpoint();

    var apstagSlots;
    if (streamampConfig.a9Enabled) {
        apstagSlots = streamampCreateAPSAdUnits(gptSlots);

        // refreshes amazon ads
        if (selectedAdUnits) {
            if (Array.isArray(selectedAdUnits)) {
                apstagSlots = apstagSlots.filter(function (apstagSlot) {
                    return selectedAdUnits.indexOf(apstagSlot.slotID) > -1;
                });
            } else if (typeof selectedAdUnits === 'string') {
                apstagSlots = apstagSlots.filter(function (apstagSlot) {
                    return apstagSlot.slotID === selectedAdUnits
                })
            }
        }

        streamampUtils.logAps('Fetching bids for', apstagSlots)
        apstag.fetchBids({
            slots: apstagSlots,
            timeout: bidTimeout
        }, function (bids) {
            streamampUtils.logAps('Bids received (all)', bids, '(filtered out)', bids.filter(function (bid) {
                return bid.amzniid
            }))
        });
    }

    googletag.cmd.push(function () {
        var gptSlots = googletag.pubads().getSlots();
        var adUnitsToRefresh = [];
        var slotIds = [];

        if (selectedAdUnits) {
            var slots = {};

            for (i = 0; i < gptSlots.length; i++) {
                slot = gptSlots[i];
                slots[slot.getSlotElementId()] = slot;
            }

            if (Array.isArray(selectedAdUnits)) {
                for (var i = 0; i < selectedAdUnits.length; i++) {
                    adUnitsToRefresh.push(slots[selectedAdUnits[i]]);
                }
                slotIds = selectedAdUnits
            } else if (typeof selectedAdUnits === 'string') {
                adUnitsToRefresh = [slots[selectedAdUnits]];
                slotIds = [selectedAdUnits];
            }

        } else {
            adUnitsToRefresh = gptSlots
            slotIds = gptSlots.map(function (gptSlot) {
                return gptSlot.getSlotElementId()
            })
        }

        if (streamampConfig.preventFirstAuctionInit) {
            defineLazyAdUnits(gptSlots);
        }

        pbjs.que.push(function () {
            streamampUtils.logPbjs('Queuing requestBids()')
            pbjs.requestBids({
                timeout: bidTimeout,
                adUnitCodes: slotIds,
                bidsBackHandler: function () {
                    streamampUtils.logPbjs('Queuing setTargetingForGPTAsync() for', slotIds)
                    pbjs.setTargetingForGPTAsync(slotIds);
                    streamampAddClientTargeting();

                    streamampUtils.logGpt('Sending ad server request for', adUnitsToRefresh)
                    if (selectedAdUnits && selectedAdUnits[0] !== 'adzone-leaderboard_1') {
                        googletag.pubads().refresh(adUnitsToRefresh);
                    }
                    pbjs.isAuctionEnded = true;
                    window.streamampBroker.notify('streamampReady');
                    streamampUtils.prebidEvents.processAuctionEndQueue();
                },
            })
            if (streamampConfig.a9Enabled) {
                streamampUtils.logAps('Setting display bids')
                apstag.setDisplayBids();
            }
        });
    })


}

// Refresh bids handler
function streamampRefresh(selectedAdUnits) {

    // function generateRefreshTimeout() {
    //     var min = +streamampConfig.minRefreshTime || 60;
    //     var max = +streamampConfig.maxRefreshTime || 90;
    //     // Generate a random number of seconds between the max and min and convert it to milliseconds
    //     return (Math.floor(Math.random() * (max - min)) + min) * 1e3;
    // }
    //
    // var refreshAds = function () {
    //     var refreshTimeout = generateRefreshTimeout()
    //     streamampUtils.log('Setting refresh', {
    //         selectedAdUnits: (selectedAdUnits ? selectedAdUnits : 'all'),
    //         refreshTimeout: refreshTimeout / 1e3 + ' seconds'
    //     });
    //
    //     if (window.adRefreshTimer) {
    //         window.clearInterval(window.adRefreshTimer);
    //     }
    //     window.adRefreshTimer = setInterval(function () {
    //         if (!streamampConfig.hasRefreshBids) {
    //             streamampRefreshBids(selectedAdUnits);
    //         }
    //     }, refreshTimeout);
    // };
    // refreshAds();
    //
    // window.onfocus = function () {
    //     refreshAds();
    // };
    // window.onblur = function () {
    //     streamampUtils.log('Refresh paused (interval cleared) due to window.onblur');
    //     window.clearInterval(window.adRefreshTimer);
    //     window.adRefreshTimer = null;
    // };
};

function streamampDestroySlots(adUnitCodes) {
    streamampUtils.log('Destroying ad unit slots', adUnitCodes);

    var adUnitSlots = adUnitCodes.reduce(function (slots, adUnitCode) {
        slots.push(window.gptAdSlots[adUnitCode]);
        return slots;
    }, []);

    pbjs.que.push(function () {
        streamampUtils.logPbjs('Queuing removal of', adUnitCodes, 'from pbjs.adUnits')
        pbjs.adUnits = pbjs.adUnits.filter(function (adUnit) {
            return adUnitCodes.indexOf(adUnit.code) === -1;
        });
    });

    googletag.cmd.push(function () {
        streamampUtils.logGpt('Queuing destroySlots() for', adUnitSlots)
        googletag.destroySlots(adUnitSlots);
        adUnitSlots.forEach(function (adUnitCode) {
            delete window.gptAdSlots[adUnitCode];
        });
    });
}

function streamampCreateAPSAdUnits(adUnitsGPT) {
    var label = _streamampVariables.currentBreakpoint.label
    var googleSizes = [[320, 100], [970, 90], [468, 60], [120, 600], [300, 1050]]

    function filterGoogleSize(adUnits) {
        var googleSizejson = googleSizes.map(function (googleSize) {
            return JSON.stringify(googleSize)
        })
        var filterGoogleSizes = adUnits.filter(function (adUnit) {
            return !googleSizejson.includes(JSON.stringify(adUnit))
        })

        streamampUtils.logAps('Filtering out Google sizes')
        return filterGoogleSizes
    }

    var apstagSlots = adUnitsGPT.map(function (adUnit) {
        return {
            slotID: adUnit.code,
            slotName: adUnit.path,
            sizes: filterGoogleSize(adUnit.breakpoints[label])
        }
    });

    streamampUtils.logAps('Generating apstag slots', apstagSlots)
    return apstagSlots
}

function defineLazyAdUnits(gptSlots) {

    streamampUtils.log(streamampConfig.namespace, 'DEBUG:', 'Defining lazy load google slots');

    var predefinedSlotIds = gptSlots.map(function (slot) {
        return slot.getSlotElementId();
    });

    pbjs.que.push(function () {
        var adUnits = pbjs.adUnits || [];

        console.log('adUnits', adUnits)

        var definedAdUnits = adUnits.map(function (adUnit) {
            console.log('adUnit', adUnit)
            return adUnit.code;
        });

        // Filter adunits already added to the prebid
        var adUnitsGPT = streamampGetAdUnitsPerBreakpoint().filter(function (adUnit) {
            return definedAdUnits.indexOf(adUnit.code) === -1;
        });

        streamampUtils.log(streamampConfig.namespace, 'DEBUG:', 'Add new Ad Units', adUnitsGPT.map(function (adUnit) {
            return adUnit.code;
        }));
        pbjs.addAdUnits(adUnitsGPT);

        adUnitsGPT.forEach(function (adUnit) {
            streamampDefineAdUnitSlot(adUnit, predefinedSlotIds);
        });
    });
}


window.streamamp = {
    refreshAllBids: function () {
        streamampUtils.log('window.streamamp.refreshAllBids() was called')
        streamampRefreshBids()
    },
    refreshBids: function (selectedAdUnits) {
        if (selectedAdUnits.length > 0) {
            streamampUtils.log('window.streamamp.refreshBids() was called with', selectedAdUnits, 'ad unit(s)')
            streamampRefreshBids(selectedAdUnits)
        } else {
            streamampUtils.logError('refreshBids() must be passed an array of strings or a string of a single ad unit code')
        }
    },
    destroySlots: function (selectedAdUnits) {
        streamampDestroySlots(selectedAdUnits)
    },
    initialize: function (boolean) {
        if (boolean) {
            streamampUtils.log('window.streamamp.initialize() was called')
            streamampInit()
        }
    },
    que: window[streamampConfig.namespace].que
}
