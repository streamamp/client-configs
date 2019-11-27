var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: true,
    a9Enabled: false,
    apsPubID: '',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    refreshBidsTimeout: 90,
    hasCollapsedEmptyDivs: false,
    publisher_id: 'StreamAMP/BusinessLeaderMagazine',
    token: '',
    currency: {
        enabled: false,
        value: ''
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'Unit1',
            path: '/15188745/BusinessLeaderMagazine/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
                            90
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
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'BusinessLeaderMagazine_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990 - 9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'BusinessLeaderMagazine_Unit1_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 989'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BusinessLeaderMagazine_Unit1_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BusinessLeaderMagazine_Unit1_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        placementId: 22176577
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        unit: '540919548',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        placementId: 17865883
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999'
                    ],
                    params: {
                        placementId: 17865884
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 989'
                    ],
                    params: {
                        placementId: 17865882
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747'
                    ],
                    params: {
                        placementId: 17865881
                    }
                }
            ],
            breakpoints: {
                '990 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '748 - 989': [
                    [
                        728,
                        90
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '375 - 747': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/15188745/BusinessLeaderMagazine/Unit2',
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
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BusinessLeaderMagazine_Unit2_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 22176578
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540919549',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865885
                    }
                }
            ],
            breakpoints: {
                '375 - 747': [
                    [
                        320,
                        50
                    ]
                ],
                '0 - 374': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit3',
            path: '/15188745/BusinessLeaderMagazine/Unit3',
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
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BusinessLeaderMagazine_Unit3_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'BusinessLeaderMagazine_Unit3_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BusinessLeaderMagazine_Unit3_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 22176579
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540919550',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865890
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        placementId: 17865889
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865886
                    }
                }
            ],
            breakpoints: {
                '990 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 989': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '375 - 747': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 374': [
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
            code: 'Unit4',
            path: '/15188745/BusinessLeaderMagazine/Unit4',
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
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BusinessLeaderMagazine_Unit4_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'BusinessLeaderMagazine_Unit4_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BusinessLeaderMagazine_Unit4_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 22176580
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540919551',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865890
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        placementId: 17865891
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865889
                    }
                }
            ],
            breakpoints: {
                '990 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 989': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '375 - 747': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 374': [
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
        },
        {
            code: 'Unit5 ',
            path: '/15188745/BusinessLeaderMagazine/Unit5',
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
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'BusinessLeaderMagazine_Unit5_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'BusinessLeaderMagazine_Unit5_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'BusinessLeaderMagazine_Unit5_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 22176581
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540919552',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865893
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        placementId: 17865894
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 17865892
                    }
                }
            ],
            breakpoints: {
                '990 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '748 - 989': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '375 - 747': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 374': [
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
            code: 'Interscroller',
            path: '/15188745/BusinessLeaderMagazine/Interscroller',
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
            bids: []
        }
    ],
    cmp: {
        isEnabled: false
    },
    breakpoints: [
        {
            label: '990 - 9999',
            minWidth: 990,
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
                    728,
                    90
                ],
                [
                    970,
                    250
                ]
            ]
        },
        {
            label: '748 - 989',
            minWidth: 748,
            maxWidth: 989,
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
                    728,
                    90
                ]
            ]
        },
        {
            label: '375 - 747',
            minWidth: 375,
            maxWidth: 747,
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
        },
        {
            label: '0 - 374',
            minWidth: 0,
            maxWidth: 374,
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