var streamampConfig = {
    a9Enabled: false,
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    refreshBidsTimeout: 90,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'f1i',
    token: '',
    adUnits: [
        {
            code: 'Unit1',
            path: '/15188745/F1i/Unit1',
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
                        ],
                        [
                            970,
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'F1i_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'F1i_Unit1_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'F1i_Unit1_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 22118908
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        placementId: 22118908
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974450
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974453
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        placementId: 16974447
                    }
                }
            ]
        },
        {
            code: 'Unit2',
            path: '/15188745/F1i/Unit2',
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'F1i_Unit2_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'F1i_Unit2_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'F1i_Unit2_160x600'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 22118909
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974457
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974459
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974460
                    }
                }
            ]
        },
        {
            code: 'Unit3',
            path: '/15188745/F1i/Unit3',
            mediaTypes: {
                banner: {
                    sizes: [
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
            },
            isSticky: false,
            safeFrame: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'F1i_Unit3_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+',
                        '0 - 768'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'F1i_Unit3_300x250'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 22118910
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+',
                        '0 - 768'
                    ],
                    params: {
                        placementId: 22118910
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        placementId: 22118910
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974462
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+',
                        '0 - 768'
                    ],
                    params: {
                        placementId: 16974465
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        placementId: 16974467
                    }
                }
            ]
        },
        {
            code: 'Unit4',
            path: '/15188745/F1i/Unit4',
            mediaTypes: {
                banner: {
                    sizes: [
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
            },
            isSticky: false,
            safeFrame: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'F1i_Unit4_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+',
                        '0 - 768'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'F1i_Unit4_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'F1i_Unit4_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 22118911
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+',
                        '0 - 768'
                    ],
                    params: {
                        placementId: 22118911
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '0 - 768'
                    ],
                    params: {
                        placementId: 22118911
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974470
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+',
                        '0 - 768'
                    ],
                    params: {
                        placementId: 16974474
                    }
                }
            ]
        },
        {
            code: 'Unit5',
            path: '/15188745/F1i/Unit5',
            mediaTypes: {
                banner: {
                    sizes: [
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
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'F1i_Unit5_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'F1i_Unit5_160x600'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 22118912
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974480
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974483
                    }
                }
            ]
        },
        {
            code: 'Unit6',
            path: '/15188745/F1i/Unit6',
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
            safeFrame: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'F1i_Unit6_320x50'
                    }
                },
                {
                    bidder: 'improvedigital',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 22118913
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '769+'
                    ],
                    params: {
                        placementId: 16974487
                    }
                }
            ]
        },
        {
            code: 'Unit7',
            path: '/15188745/F1i/Unit7',
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
            bids: []
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
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. Each purpose has a description so that you know how we and partners use your data. If you choose to opt-out, you will see ads that are less relevant to you. These ads will use cookies, but not for personalization.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'F1i',
            'Publisher Logo': 'https://f1i.com/wp-content/themes/f1i-en-2017/site/assets/img/logo_f1i_180x140.png'
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
            label: '769+',
            minWidth: 769,
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
                    600
                ],
                [
                    300,
                    250
                ],
                [
                    160,
                    600
                ],
                [
                    320,
                    50
                ]
            ]
        },
        {
            label: '0 - 768',
            minWidth: 0,
            maxWidth: 768,
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





