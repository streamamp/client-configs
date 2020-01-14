var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: false,
    apsPubID: '',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    refreshBidsTimeout: 90,
    hasCollapsedEmptyDivs: false,
    publisher_id: 'StreamAMP/TheLiberal',
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
            path: '/15188745/TheLiberal/Unit1',
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
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'TheLiberal_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990-9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'TheLiberal_Unit1_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748-989'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheLiberal_Unit1_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'TheLiberal_Unit1_320x50'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        unit: '540916440',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999'
                    ],
                    params: {
                        unit: '540916440',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '748-989'
                    ],
                    params: {
                        unit: '540916440',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916440',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        placementId: 17787457
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999'
                    ],
                    params: {
                        placementId: 17787459
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748-989'
                    ],
                    params: {
                        placementId: 17787458
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787456
                    }
                }
            ],
            breakpoints: {
                '990-9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ]
                ],
                '748-989': [
                    [
                        728,
                        90
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '375-747': [
                    [
                        320,
                        50
                    ]
                ],
                '0-374': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/15188745/TheLiberal/Unit2',
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
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'TheLiberal_Unit2_320x50'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916442',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787463
                    }
                }
            ],
            breakpoints: {
                '375-747': [
                    [
                        320,
                        50
                    ]
                ],
                '0-374': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit3',
            path: '/15188745/TheLiberal/Unit3',
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
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheLiberal_Unit3_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheLiberal_Unit3_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'TheLiberal_Unit3_320x50'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916443',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        unit: '540916443',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916443',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787466
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        placementId: 17787470
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787464
                    }
                }
            ],
            breakpoints: {
                '990-9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748-989': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '375-747': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0-374': [
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
            path: '/15188745/TheLiberal/Unit4',
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
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheLiberal_Unit4_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheLiberal_Unit4_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'TheLiberal_Unit3_320x50'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916445',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        unit: '540916445',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916443',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787473
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        placementId: 17787474
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787464
                    }
                }
            ],
            breakpoints: {
                '990-9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748-989': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '375-747': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0-374': [
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
            path: '/15188745/TheLiberal/Unit5',
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
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'TheLiberal_Unit5_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'TheLiberal_Unit5_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'TheLiberal_Unit5_320x50'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916446',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        unit: '540916446',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        unit: '540916446',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787476
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        placementId: 17787477
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        placementId: 17787475
                    }
                }
            ],
            breakpoints: {
                '990-9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748-989': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '375-747': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0-374': [
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
            code: '1x1',
            path: '/15188745/TheLiberal/1x1',
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
            label: '990-9999',
            minWidth: 990,
            maxWidth: 9999,
            sizesSupported: [
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
                    300,
                    600
                ]
            ]
        },
        {
            label: '748-989',
            minWidth: 748,
            maxWidth: 989,
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
            label: '375-747',
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
            label: '0-374',
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