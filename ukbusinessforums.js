var streamampConfig = {
    levelTargeting: true,
    toggleOffUrls: [
        {
            "level": "3",
            "url": "398385"
        },
        {
            "level": "3",
            "url": "373661"
        }
    ],
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'SiftMedia/UKBusinessForum',
    token: 'JJd43srQfu97oyw7PLf3LSfxvIZj6CgwdzZh0EAbVd3JslCNYLJpxzOI5ohYl5xH',
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
            code: 'ukbf-mpu',
            path: '/4394518/ukbf-mpu',
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
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'ukbf_mpu_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'ukbf_mpu_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '70983'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        tagid: '70984'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999'
                //     ],
                //     params: {
                //         placementId: 22039666
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '728 - 970',
                //         '0 - 727'
                //     ],
                //     params: {
                //         placementId: 22039666
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                    ],
                    params: {
                        siteId: '422929',
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
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        siteId: '422929',
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
                        unit: '540778444',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        unit: '540778444',
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
                        pmzoneid: '2237787',
                        adSlot: 'Sift-ukbf_mpu_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237788',
                        adSlot: 'Sift-ukbf_mpu_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16175433
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        placementId: 16175510
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '728 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 727': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'ukbf-mpu-2',
            path: '/4394518/ukbf-mpu-2',
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
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'ukbf_mpu_2_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'ukbf_mpu_2_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '70985'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        tagid: '70986'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999'
                //     ],
                //     params: {
                //         placementId: 22039670
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '728 - 970',
                //         '0 - 727'
                //     ],
                //     params: {
                //         placementId: 22039670
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '423998',
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
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        siteId: '423998',
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
                        unit: '540778445',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        unit: '540778445',
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
                        pmzoneid: '2237789',
                        adSlot: 'Sift-ukbf_mpu_2_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237790',
                        adSlot: 'Sift-ukbf_mpu_2_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16175511
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        placementId: 16175513
                    }
                }
            ],
            breakpoints: {
                '971 - 9999': [
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '728 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 727': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'ukbf-top',
            path: '/4394518/ukbf-top',
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
                        publisherSubId: 'ukbf_top_970x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'ukbf_top_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'ukbf_top_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        tagid: '70987'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970'
                    ],
                    params: {
                        tagid: '70988'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        tagid: '70989'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999'
                //     ],
                //     params: {
                //         placementId: 22039671
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '728 - 970'
                //     ],
                //     params: {
                //         placementId: 22039671
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0 - 727'
                //     ],
                //     params: {
                //         placementId: 22039671
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        siteId: '424000',
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
                        '728 - 970',
                    ],
                    params: {
                        siteId: '424000',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        siteId: '424000',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        unit: '540778452',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970'
                    ],
                    params: {
                        unit: '540778452',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        unit: '540778452',
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
                        pmzoneid: '2237791',
                        adSlot: 'Sift-ukbf_top_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237792',
                        adSlot: 'Sift-ukbf_top_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237793',
                        adSlot: 'Sift-ukbf_top_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999'
                    ],
                    params: {
                        placementId: 16175518
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970'
                    ],
                    params: {
                        placementId: 16175519
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        placementId: 16175516
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
                '728 - 970': [
                    [
                        728,
                        90
                    ]
                ],
                '0 - 727': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'ukbf-mpu-3',
            path: '/4394518/ukbf-mpu-3',
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
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'ukbf_mpu_3_300x250'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        tagid: '74366'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '971 - 9999',
                //         '728 - 970',
                //         '0 - 727'
                //     ],
                //     params: {
                //         placementId: 22051763
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        siteId: '423999',
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
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        unit: '540796815',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2237794',
                        adSlot: 'Sift-ukbf_mpu_3_300x250@300x250'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '971 - 9999',
                        '728 - 970',
                        '0 - 727'
                    ],
                    params: {
                        placementId: 16411665
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
                '728 - 970': [
                    [
                        300,
                        250
                    ]
                ],
                '0 - 727': [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        {
            code: 'UKBF_Sticky',
            path: '/4394518/UKBF_Sticky',
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
                        '0 - 727'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'ukbf_sticky_320x50'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        tagid: '80042'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '0 - 727'
                //     ],
                //     params: {
                //         placementId: 22128382
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        siteId: '424001,',
                        size: [
                            300,
                            50
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        unit: '540861910',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2348481',
                        adSlot: 'Sift-ukbf_Sticky_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        placementId: 17085238
                    }
                }
            ],
            breakpoints: {
                '0 - 727': [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        {
            code: 'UKBF_RichMedia',
            path: '/4394518/UKBF_RichMedia',
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
                        '728 - 970',
                    ],
                    params: {
                        zone: 82102,
                        allow: [
                            'wp',
                            'wv',
                            'cf',
                            'as',
                            'fi',
                            'hi',
                            'ci',
                            'sa',
                            'pa',
                            'ca',
                            'pu'
                        ]
                    }
                },
                {
                    bidder: 'justpremium',
                    labelAny: [
                        '0 - 727'
                    ],
                    params: {
                        zone: 82102,
                        allow: [
                            'mt',
                            'is',
                            'mo',
                            'ms'
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
                '728 - 970': [
                    [
                        1,
                        1
                    ]
                ],
                '0 - 727': [
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
        pathnamesToExclude: ['/help/privacy-policy/'],
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
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data based on Legitimate Interests, these companies include OptInMonster, AddThisSocial, HotJar and PageFair. You can view our <a target="_blank" rel="noopener noreferrer" href="https://www.ukbusinessforums.co.uk/help/privacy-policy/"><strong>Privacy Policy</strong></a> for more information on these and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'UK Business Forums',
            'Publisher Logo': 'https://static.amp.services/logos/siftlogo.png',
            'Custom Links Displayed on Initial Screen': ['[Privacy Policy](https://www.ukbusinessforums.co.uk/help/privacy-policy/)'],
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
                    600
                ],
                [
                    300,
                    250
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
            label: '728 - 970',
            minWidth: 728,
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
            label: '0 - 727',
            minWidth: 0,
            maxWidth: 727,
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
