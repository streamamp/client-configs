var streamampConfig = {
    levelTargeting: true,
    toggleOffUrls: [],
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 40,
    maxRefreshTime: 60,
    adUnitsToRefresh: [
      'MYC_Sticky'
    ],
    hasCollapsedEmptyDivs: true,
    publisher_id: 'SiftMedia/MyCustomer',
    token: 'YPu5gu4IWoIofQCSL7lQPOrxrBdYpI7yExh7WLG250iqMsddGDCNKhDBUHoFiiyt',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'MYC_MPU1',
            path: '/4394518/MYC_MPU1',
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
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'MYC_MPU1_300x600'
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
                        publisherSubId: 'MYC_MPU1_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71098'
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
                        tagid: '71097'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22039728
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
                        placementId: 22039728
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '374161',
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
                        siteId: '374161',
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
                        unit: '540778478',
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
                        unit: '540778478',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16176738
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
                        placementId: 16176732
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
            code: 'MYC_MPU2',
            path: '/4394518/MYC_MPU2',
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
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'MYC_MPU2_300x600'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71099'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22039729
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '378936',
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
                        unit: '540778479',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16176740
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
            code: 'MYC_MPU3',
            path: '/4394518/MYC_MPU3',
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
                        '971 - 9999',
                        '729 - 970',
                        '0 - 728'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MYC_MPU3_300x250'
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
                        tagid: '71100'
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
                        placementId: 22039730
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
                        siteId: '378977',
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
                        unit: '540778480',
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
                        placementId: 16176741
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
            code: 'MYC_Top',
            path: '/4394518/MYC_Top',
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
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'MYC_Top_970x250'
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
                        publisherSubId: 'MYC_Top_728x90'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '71101'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        tagid: '71102'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22039731
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        placementId: 22039731
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '378978',
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
                        siteId: '378978',
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
                        unit: '540778481',
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
                        unit: '540778481',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16176743
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '729 - 970'
                    ],
                    params: {
                        placementId: 16176744
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
            }
        },
        {
            code: 'MYC_inline',
            path: '/4394518/MYC_inline',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: []
        },
        {
            code: 'MYC_Brand_Sponsorship',
            path: '/4394518/MYC_Brand_Sponsorship',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: []
        },
        {
            code: 'MYC_aa_sponsorship',
            path: '/4394518/MYC_aa_sponsorship',
            mediaTypes: {
                banner: {
                    sizes: []
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: []
        },
        {
            code: 'MYC_MPU4',
            path: '/4394518/MYC_MPU4',
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
                        '0 - 728',
                        '729 - 970',
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'MYC_MPU4_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 728',
                        '729 - 970',
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '74368'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 728',
                        '729 - 970',
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 22051760
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 728',
                        '729 - 970',
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '388665',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 728',
                        '729 - 970',
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540796813',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 728',
                        '729 - 970',
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16411657
                    }
                }
            ],
            breakpoints: {
                '0 - 728': [
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
                '971 - 9999': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'MYC_Sticky',
            path: '/4394518/MYC_Sticky',
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
                        publisherSubId: 'MYC_Sticky_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        tagid: '80044'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 22128380
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        siteId: '413487',
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
                        unit: '540861908',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 728'
                    ],
                    params: {
                        placementId: 17085235
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
            'Publisher Name': 'My Customer UK',
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
            toggleOff: {},
            additionalStyles: ''
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
