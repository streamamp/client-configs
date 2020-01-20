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
    token: 'JYnZQ534kTZo4c4s3zpYK4Fe3HoUGGRga8dEbAYaccxDOrjZrPnJf002YZF95j8f',
    currency: {
        enabled: false,
        value: ''
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        // Mobile Sticky Leaderboard
        {
            code: 'Unit1',
            path: '/15188745/TheLiberal/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
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
                        publisherSubId: 'TheLiberal_Unit1_320x50'
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564816',
                        adSlot: 'TheLiberal_Unit1_320x50@320x50'
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
                '375-747': [
                    [
                        320,
                        50
                    ],
                    [
                        320,
                        100
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
        // Mobile Sticky Footer
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564820',
                        adSlot: 'TheLiberal_Unit2_320x50@320x50'
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
        // In Copy 1 - All breakpoints
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564822',
                        adSlot: 'TheLiberal_Unit3_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564823',
                        adSlot: 'TheLiberal_Unit3_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564821',
                        adSlot: 'TheLiberal_Unit3_320x50@320x50'
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
                    ],
                    [
                        320,
                        100
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
        // In Copy 2 - All breakpoints
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564825',
                        adSlot: 'TheLiberal_Unit4_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564826',
                        adSlot: 'TheLiberal_Unit4_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564824',
                        adSlot: 'TheLiberal_Unit4_320x50@320x50'
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
                        placementId: 17787472
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
                    ],
                    [
                        320,
                        100
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
        // In Copy 3 - All breakpoints
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
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989',
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564828',
                        adSlot: 'TheLiberal_Unit5_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564829',
                        adSlot: 'TheLiberal_Unit5_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375-747',
                        '0-374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564827',
                        adSlot: 'TheLiberal_Unit5_320x50@320x50'
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
                    ],
                    [
                        320,
                        100
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
        // Tablet, Desktop Leaderboard
        {
            code: 'Unit6',
            path: '/15188745/TheLiberal/Unit6',
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
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990-9999'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'TheLiberal_Unit6_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'TheLiberal_Unit6_728x90'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        unit: '540948831',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564837',
                        adSlot: 'TheLiberal_Unit6_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2564836',
                        adSlot: 'TheLiberal_Unit6_728x90@728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999'
                    ],
                    params: {
                        placementId: 18240716
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '990-9999',
                        '748-989'
                    ],
                    params: {
                        placementId: 18240714
                    }
                }
            ],
            breakpoints: {
                '990-9999': [
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
                '748-989': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        // 1x1 Interscroller
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
        isEnabled: true,
        config: {
            'UI Layout': 'banner',
            'Language': 'en',
            'Display Persistent Consent Link': false,
            'Non-Consent Display Frequency': 2,
            'Publisher Name': 'The Liberal',
            'Publisher Logo': 'https://theliberal.ie/wp-content/uploads/2015/08/cropped-newliberal111.jpg',
            'Initial Screen Body Text': 'We and our partners use technology such as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click below to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.',
            'Initial Screen Body Text Option': 1,
            'Initial Screen Reject Button Text': 'I do not accept',
            'Initial Screen Accept Button Text': 'I accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Publisher Purpose IDs': [1,2,3,4,5],
            'Publisher Purpose Legitimate Interest IDs': [2,4,5],
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all'
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#FFFFFF',
                textColor: '#294451'
            },
            link: {
                textColor: '#294451',
                isUnderlined: true
            },
            primaryButton: {
                borderColor: '#1C72BD',
                backgroundColor: '#1C72BD',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#FFFFFF',
                borderColor: '#1C72BD',
                textColor: '#1C72BD'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: '#FFFFFF',
                borderColor: '#294451',
                textColor: '#294451',
            },
            secondaryButtonHover: {
                backgroundColor: '#FFFFFF',
                borderColor: '#1C72BD',
                textColor: '#1C72BD'
            },
            tableHeader: {
                backgroundColor: '#FAFAFA',
                textColor: '#294451'
            },
            tableRow: {
                textColor: '#294451'
            },
            toggleOn: {
                backgroundColor: '#1C72BD',
                borderColor: '#1C72BD'
            },
            toggleOff: {
                backgroundColor: '#9A9A9A',
                borderColor: '#9A9A9A'
            },
            toggleStatusTextColor: '#000000',
            toggleSwitchBorderColor: '#294451',
            dropdownArrowColor: '#294451',
            additionalStyles: ''
        }
    },
    breakpoints: [
        {
            label: '990-9999',
            minWidth: 990,
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
            label: '0-374',
            minWidth: 0,
            maxWidth: 374,
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