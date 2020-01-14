var streamampConfig = {
    gptSingleRequestEnabled: true,
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: "aac344f8-dc17-4ab8-b0a7-91cd349ec3b1",
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    maxRefreshTime: 120,
    minRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'GlobalData/verdict',
    token: 'y6oJnZ37YbSINuNTaaa9ssHXy0srBTtQFX6JLyhVUsYMBeAsY6oAGrn3155bwp0U',
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
            path: '/5269235/Verdict/Unit1',
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
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_Verdict_Unit1_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        tagid: '40601'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        tagid: '40605'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        tagid: '40600'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1200 - 9999',
                //         '740 - 1199',
                //         '601 - 739',
                //         '0 - 660'
                //     ],
                //     params: {
                //         placementId: 1202539
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        siteId: '309522',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        siteId: '309519',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        placementId: 11900007
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 11900004
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 17428484
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        placementId: 17428486
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 17428465
                    }
                }
            ],
            breakpoints: {
                '1200 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ]
                ],
                '740 - 1199': [
                    [
                        728,
                        90
                    ]
                ],
                '601 - 739': [
                    [
                        320,
                        50
                    ]
                ],
                '0 - 660': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'Unit2',
            path: '/5269235/Verdict/Unit2',
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
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_Verdict_Unit2_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        tagid: '40604'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1200 - 9999',
                //         '740 - 1199'
                //     ],
                //     params: {
                //         placementId: 1202540
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        siteId: '309524',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 11900009
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 17428487
                    }
                }
            ],
            breakpoints: {
                '1200 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '740 - 1199': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'Unit3',
            path: '/5269235/Verdict/Unit3',
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
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_Verdict_Unit3_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        tagid: '40607'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        tagid: '40606'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1200 - 9999',
                //         '740 - 1199'
                //     ],
                //     params: {
                //         placementId: 1202541
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        siteId: '309525',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        siteId: '309526',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 11900010
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 11900011
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 17428488
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 17428490
                    }
                }
            ],
            breakpoints: {
                '1200 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '740 - 1199': [
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
        {
            code: 'Unit4',
            path: '/5269235/Verdict/Unit4',
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
                            300,
                            250
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
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_Verdict_Unit4_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        tagid: '40609'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        tagid: '40608'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 660'
                    ],
                    params: {
                        tagid: '40611'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1200 - 9999',
                //         '740 - 1199',
                //         '601 - 739',
                //         '0 - 660'
                //     ],
                //     params: {
                //         placementId: 1202542
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        siteId: '309530',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        siteId: '309528',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 660'
                    ],
                    params: {
                        siteId: '309527',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 11900016
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 11900014
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 660'
                    ],
                    params: {
                        placementId: 11900012
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 17428498
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 17428495
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '0 - 660'
                    ],
                    params: {
                        placementId: 17428492
                    }
                }
            ],
            breakpoints: {
                '1200 - 9999': [
                    [
                        728,
                        90
                    ]
                ],
                '740 - 1199': [
                    [
                        728,
                        90
                    ]
                ],
                '601 - 739': [
                    [
                        320,
                        50
                    ]
                ],
                '0 - 660': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
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
            path: '/5269235/Verdict/Unit5',
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
                        '1200 - 9999',
                        '740 - 1199',
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'GD_Verdict_Unit5_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199',
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        tagid: '40613'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        tagid: '40615'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1200 - 9999',
                //         '740 - 1199',
                //         '601 - 739',
                //         '0 - 660'
                //     ],
                //     params: {
                //         placementId: 1202543
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199',
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        siteId: '309532',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        siteId: '309533',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199',
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 11900018
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 11900019
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199',
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 17428504
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 17428506
                    }
                }
            ],
            breakpoints: {
                '1200 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '740 - 1199': [
                    [
                        300,
                        250
                    ]
                ],
                '601 - 739': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
                    ]
                ],
                '0 - 660': [
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
            code: 'Unit6',
            path: '/5269235/Verdict/Unit6',
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
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'GD_Verdict_Unit6_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        tagid: '40616'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        tagid: '40619'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        tagid: '40614'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '1200 - 9999',
                //         '740 - 1199',
                //         '601 - 739',
                //         '0 - 660'
                //     ],
                //     params: {
                //         placementId: 1202544
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        siteId: '309536',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        siteId: '309537',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        siteId: '309534',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 11900022
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        placementId: 11900024
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 11900020
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999',
                        '740 - 1199'
                    ],
                    params: {
                        placementId: 17428510
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1200 - 9999'
                    ],
                    params: {
                        placementId: 17428512
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '601 - 739',
                        '0 - 660'
                    ],
                    params: {
                        placementId: 17428508
                    }
                }
            ],
            breakpoints: {
                '1200 - 9999': [
                    [
                        728,
                        90
                    ],
                    [
                        970,
                        250
                    ]
                ],
                '740 - 1199': [
                    [
                        728,
                        90
                    ]
                ],
                '601 - 739': [
                    [
                        320,
                        50
                    ]
                ],
                '0 - 660': [
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
            Language: 'en',
            'Display Persistent Consent Link': true,
            'No Option': true,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [
                1,
                2,
                3,
                4,
                5
            ],
            'Initial Screen Body Text': 'We and our partners use technology such as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click below to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.',
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Logo': 'https://www.verdict.co.uk/wp-content/uploads/2017/10/Verdict-Logo.png',
            'Publisher Name': 'Verdict'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#ffffff',
                textColor: '#000000'
            },
            link: {
                textColor: '#168dd9'
            },
            primaryButton: {
                backgroundColor: '#168dd9',
                borderColor: '#168dd9',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#06558b',
                borderColor: '#06558b',
                textColor: '#FFFFFF'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: '#ffffff',
                textColor: '#000000'
            },
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {
                backgroundColor: '#168dd9',
                borderColor: '#168dd9'
            },
            toggleOff: {
                backgroundColor: '#000000',
                borderColor: '#000000'
            },
            additionalStyles: '',
            toggleSwitchBorderColor: '#000000',
            toggleStatusTextColor: '#000000'
        }
    },
    breakpoints: [
        {
            label: '1200 - 9999',
            minWidth: 1200,
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
            label: '740 - 1199',
            minWidth: 740,
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
                    300,
                    600
                ]
            ]
        },
        {
            label: '601 - 739',
            minWidth: 601,
            maxWidth: 739,
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
            label: '0 - 660',
            minWidth: 0,
            maxWidth: 660,
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
