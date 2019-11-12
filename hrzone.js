var streamampConfig = {
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 40,
    maxRefreshTime: 60,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'SiftMedia/HRZone',
    token: 'C1xLXw9iDZ4wiKuxhLthjbb6tuVEoiKgvN0yiltMJHGoGHzweZ1PMnShNJrJcqQ5',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'HRZ_MPU1',
            path: '/4394518/HRZ_MPU1',
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
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'HRZ_MPU1_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'HRZ_MPU1_300x600'
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
                        tagid: '71105'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71106'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        placementId: 22039683
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22039683
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
                        siteId: '374162',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '374162',
                        size: [
                            300,
                            600
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
                        unit: '540778465',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540778465',
                        delDomain: 'streamamp-d.openx.net'
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
                        placementId: 16175523
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16175524
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
            code: 'HRZ_MPU2',
            path: '/4394518/HRZ_MPU2',
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
                        publisherSubId: 'HRZ_MPU2_300x600'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71107'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22039684
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '378937',
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
                        unit: '540778466',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16175561
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
            code: 'HRZ_MPU3',
            path: '/4394518/HRZ_MPU3',
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
                        publisherSubId: 'HRZ_MPU3_300x250'
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
                        tagid: '71108'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        placementId: 22039685
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
                        siteId: '378938',
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
                        unit: '540778467',
                        delDomain: 'streamamp-d.openx.net'
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
                        placementId: 16175589
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
            code: 'HRZ_Top',
            path: '/4394518/HRZ_Top',
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
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'HRZ_Top_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'HRZ_Top_970x250'
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
                        publisherSubId: 'HRZ_Top_728x90'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        tagid: '71111'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71109'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        tagid: '71110'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 22039686
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22039686
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        placementId: 22039686
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        siteId: '378939',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '378939',
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
                        siteId: '378939',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        unit: '540778468',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540778468',
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
                        unit: '540778468',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 16175622
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16175610
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        placementId: 16175621
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
                    ]
                ],
                '729 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 728': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'HRZ_inline',
            path: '/4394518/HRZ_inline',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            bids: []
        },
        {
            code: 'HRZ_Brand_Sponsorship',
            path: '/4394518/HRZ_Brand_Sponsorship',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            bids: []
        },
        {
            code: 'HRZ_aa_sponsorship',
            path: '/4394518/HRZ_aa_sponsorship',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            bids: []
        },
        {
            code: 'HRZ_MPU4',
            path: '/4394518/HRZone_MPU4',
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
                        publisherSubId: 'HRZ_MPU4_300x250'
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
                        tagid: '74369'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        placementId: 22051178
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
                        siteId: '388277',
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
                        unit: '540796314',
                        delDomain: 'streamamp-d.openx.net'
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
                        placementId: 16405862
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
            code: 'HRZ_Sticky',
            path: '/4394518/HRZ_Sticky',
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
                        publisherSubId: 'HRZ_Sticky_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        tagid: '80045'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 22128379
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        siteId: '413486',
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
                        unit: '540861883',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 17085232
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
        }
    ],
    cmp: {
        isEnabled: true,
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
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'HR Zone',
            'Publisher Logo': 'https://static.amp.services/logos/siftlogo.png',
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
                ]
            ]
        }
    ]
}