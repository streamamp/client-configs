var streamampConfig = {
    levelTargeting: true,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    adUnitsToRefresh: [
        'Top-Billboard',
        'Sticky-Footer',
        'Billboard-2',
        'Billboard-3',
        'Footer-Billboard',
        'SkyScraper-LHS',
        'SkyScraper-RHS',
        'Sidebar-InCopy-MPU-1',
        'Sidebar-InCopy-MPU-2',
        'Sidebar-InCopy-MPU-3',
        'Sidebar-InCopy-MPU-4',
        'Sidebar-InCopy-MPU-5',
    ],
    minRefreshTime: 45,
    maxRefreshTime: 60,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'FarellyAtkinsonLtd/roadcc',
    token: 'UGJhCWtxZCFtArI0YylKqavMvwSStcXgCNod37zVR7aStEBZzQwb67BsZaADQVlp',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    adUnits: [
        {
            code: 'Top-Billboard',
            path: '/269479563/Road.cc-V2/Top-Billboard',
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
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'New_Road_Top-Billboard_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'New_Road_Top-Billboard_970x250'
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
                        publisherSubId: 'New_Road_Top-Billboard_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 375137,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 16185659
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90770'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        tagid: '90771'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90772'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937543',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542135',
                        adSlot: 'New_Top-Billboard_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542134',
                        adSlot: 'New_Top-Billboard_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542135',
                        adSlot: 'New_Top-Billboard_320x50@320x50'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        siteId: '440425',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440425',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440425',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        placementId: 18085900
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085896
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085902
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1025 - 1639': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '748 - 1024': [
                    [
                        728,
                        90
                    ]
                ],
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
            code: 'Sticky-Footer',
            path: '/269479563/Road.cc-V2/Sticky-Footer',
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
                        '748 - 1024'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'New_Road_Sticky-Footer_728x90'
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
                        publisherSubId: 'New_Road_Sticky-Footer_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202653,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011928
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024'
                    ],
                    params: {
                        tagid: '90774'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90773'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937544',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '202653',
                        adSlot: 'New_Sticky-Footer_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542138',
                        adSlot: 'New_Sticky-Footer_320x50@320x50'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024'
                    ],
                    params: {
                        siteId: '440426',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440426',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024'
                    ],
                    params: {
                        placementId: 18085903
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085904
                    }
                }
            ],
            breakpoints: {
                '748 - 1024': [
                    [
                        728,
                        90
                    ]
                ],
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
            code: 'Billboard-2',
            path: '/269479563/Road.cc-V2/Billboard-2',
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
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'New_Road_Billboard-2_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'New_Road_Billboard-2_970x250'
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
                        publisherSubId: 'New_Road_Billboard-2_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Billboard-2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202654,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011929
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        tagid: '90776'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                    ],
                    params: {
                        tagid: '90775'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90777'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90778'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937545',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542140',
                        adSlot: 'New_Billboard-2_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542139',
                        adSlot: 'New_Billboard-2_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542141',
                        adSlot: 'New_Billboard-2_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542142',
                        adSlot: 'New_Billboard-2_320x50@320x50'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        siteId: '440427',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440427',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440427',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440427',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        placementId: 18085906
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085905
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085907
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085908
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1025 - 1639': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '748 - 1024': [
                    [
                        728,
                        90
                    ]
                ],
                '375 - 747': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
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
            code: 'Billboard-3',
            path: '/269479563/Road.cc-V2/Billboard-3',
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
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'New_Road_Billboard-3_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'New_Road_Billboard-3_970x250'
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
                        publisherSubId: 'New_Road_Billboard-3_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Billboard-3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202655,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011930
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        tagid: '90780'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                    ],
                    params: {
                        tagid: '90779'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90781'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90782'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937546',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542144',
                        adSlot: 'New_Billboard-3_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542143',
                        adSlot: 'New_Billboard-3_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542145',
                        adSlot: 'New_Billboard-3_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542146',
                        adSlot: 'New_Billboard-3_320x50@320x50'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        siteId: '440428',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440428',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440428',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440428',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        placementId: 18085910
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085909
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085924
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085925
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1025 - 1639': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '748 - 1024': [
                    [
                        728,
                        90
                    ]
                ],
                '375 - 747': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
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
            code: 'Footer-Billboard',
            path: '/269479563/Road.cc-V2/Footer-Billboard',
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
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'New_Road_Footer-Billboard_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'New_Road_Footer-Billboard_970x250'
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
                        publisherSubId: 'New_Road_Footer-Billboard_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Footer-Billboard_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202656,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011931
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        tagid: '90784'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                    ],
                    params: {
                        tagid: '90783'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90785'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90786'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937547',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542148',
                        adSlot: 'New_Footer-Billboard_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542147',
                        adSlot: 'New_Footer-Billboard_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542149',
                        adSlot: 'New_Footer-Billboard_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542150',
                        adSlot: 'New_Footer-Billboard_320x50@320x50'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        siteId: '440429',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440429',
                        size: [
                            970,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440429',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440429',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024'
                    ],
                    params: {
                        placementId: 18085929
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085927
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085930
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085931
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '1025 - 1639': [
                    [
                        970,
                        250
                    ],
                    [
                        728,
                        90
                    ]
                ],
                '748 - 1024': [
                    [
                        728,
                        90
                    ]
                ],
                '375 - 747': [
                    [
                        320,
                        50
                    ],
                    [
                        300,
                        250
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
            code: 'SkyScraper-LHS',
            path: '/269479563/Road.cc-V2/SkyScraper-LHS',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            1050
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            300,
                            250
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
                        '1640 - 9999'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_SkyScraper-LHS_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_SkyScraper-LHS_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'New_Road_SkyScraper-LHS_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        dmxid: 202657,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 13011932
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        tagid: '90789'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        tagid: '90787'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90788'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        unit: '540937548',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542152',
                        adSlot: 'New_SkyScraper-LHS_160x600@160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542153',
                        adSlot: 'New_SkyScraper-LHS_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542151',
                        adSlot: 'New_SkyScraper-LHS_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440430',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        siteId: '440430',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        siteId: '440430',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        placementId: 18085934
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        placementId: 18085935
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1025 - 1639',
                    ],
                    params: {
                        placementId: 18085933
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        1050
                    ],
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '1025 - 1639': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'SkyScraper-RHS',
            path: '/269479563/Road.cc-V2/SkyScraper-RHS',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            300,
                            1050
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            300,
                            250
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
                        '1640 - 9999'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_SkyScraper-RHS_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_SkyScraper-RHS_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'New_Road_SkyScraper-RHS_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        dmxid: 202658,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 13011933
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        tagid: '90792'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        tagid: '90790'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90791'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        unit: '540937550',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542155',
                        adSlot: 'New_SkyScraper-RHS_160x600@160x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542156',
                        adSlot: 'New_SkyScraper-RHS_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542154',
                        adSlot: 'New_SkyScraper-RHS_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440431',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        siteId: '440431',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        siteId: '440431',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        placementId: 18085938
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        placementId: 18085939
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1025 - 1639',
                    ],
                    params: {
                        placementId: 18085937
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        1050
                    ],
                    [
                        300,
                        600
                    ],
                    [
                        300,
                        250
                    ]
                ],
                '1025 - 1639': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Home-MPU-1',
            path: '/269479563/Road.cc-V2/Home-MPU-1',
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
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'adyoulike',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placement: 'b531de97316f07a0fa8944405b6b98ea'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Home-MPU-1_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Home-MPU-1_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202659,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011934
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90793'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90794'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937551',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542158',
                        adSlot: 'New_Home-MPU-1_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542157',
                        adSlot: 'New_Home-MPU-1_300x250@300x250'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440432',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440432',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085940
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085942
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Home-MPU-2',
            path: '/269479563/Road.cc-V2/Home-MPU-2',
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
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Home-MPU-2_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Home-MPU-2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202660,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011935
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90795'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90796'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937552',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542160',
                        adSlot: 'New_Home-MPU-2_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542159',
                        adSlot: 'New_Home-MPU-2_300x250@300x250'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440434',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440434',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085943
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085944
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Home-MPU-3',
            path: '/269479563/Road.cc-V2/Home-MPU-3',
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
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Home-MPU-3_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Home-MPU-3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202661,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011936
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90813'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90797'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937553',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542162',
                        adSlot: 'New_Home-MPU-3_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542161',
                        adSlot: 'New_Home-MPU-3_300x250@300x250'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440435',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440435',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085945
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085947
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Sidebar-InCopy-MPU-1',
            path: '/269479563/Road.cc-V2/Sidebar-InCopy-MPU-1',
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
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-1_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-1_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-1_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202662,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011937
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90799'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90798'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90800'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937554',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542165',
                        adSlot: 'New_Sidebar-InCopy-MPU-1_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542164',
                        adSlot: 'New_Sidebar-InCopy-MPU-1_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542163',
                        adSlot: 'New_Sidebar-InCopy-MPU-1_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440436',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440436',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440436',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085950
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085949
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085952
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Sidebar-InCopy-MPU-2',
            path: '/269479563/Road.cc-V2/Sidebar-InCopy-MPU-2',
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
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-2_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-2_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202663,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011938
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90802'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90801'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90803'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937555',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542168',
                        adSlot: 'New_Sidebar-InCopy-MPU-2_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542167',
                        adSlot: 'New_Sidebar-InCopy-MPU-2_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542166',
                        adSlot: 'New_Sidebar-InCopy-MPU-2_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440437',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440437',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440437',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085957
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085956
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085959
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Sidebar-InCopy-MPU-3',
            path: '/269479563/Road.cc-V2/Sidebar-InCopy-MPU-3',
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
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-3_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-3_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202664,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011939
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90805'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90804'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90806'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937558',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542171',
                        adSlot: 'New_Sidebar-InCopy-MPU-3_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542170',
                        adSlot: 'New_Sidebar-InCopy-MPU-3_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542169',
                        adSlot: 'New_Sidebar-InCopy-MPU-3_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440438',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440438',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440438',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085961
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085960
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085962
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Sidebar-InCopy-MPU-4',
            path: '/269479563/Road.cc-V2/Sidebar-InCopy-MPU-4',
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
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-4_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-4_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-4_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202665,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011940
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90808'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90807'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90809'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937562',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542174',
                        adSlot: 'New_Sidebar-InCopy-MPU-4_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542173',
                        adSlot: 'New_Sidebar-InCopy-MPU-4_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542172',
                        adSlot: 'New_Sidebar-InCopy-MPU-4_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440439',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440439',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440439',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085970
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085967
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085971
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: 'Sidebar-InCopy-MPU-5',
            path: '/269479563/Road.cc-V2/Sidebar-InCopy-MPU-5',
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
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-5_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-5_320x50'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'New_Road_Sidebar-InCopy-MPU-5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        dmxid: 202666,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'districtm',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 13011941
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90811'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '90810'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        tagid: '90812'
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        unit: '540937564',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542177',
                        adSlot: 'New_Sidebar-InCopy-MPU-5_320x50@320x50'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542176',
                        adSlot: 'New_Sidebar-InCopy-MPU-5_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2542175',
                        adSlot: 'New_Sidebar-InCopy-MPU-5_300x600@300x600'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440440',
                        size: [
                            320,
                            50
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '440440',
                        size: [
                            300,
                            600
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        siteId: '440440',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085974
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 18085973
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '748 - 1024',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        placementId: 18085976
                    }
                },
            ],
            breakpoints: {
                '1640 - 9999': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '1025 - 1639': [
                    [
                        300,
                        250
                    ],
                    [
                        300,
                        600
                    ]
                ],
                '748 - 1024': [
                    [
                        300,
                        250
                    ],
                    [
                        320,
                        50
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
            code: '1x1-interscroller',
            path: '/269479563/Road.cc-V2/1x1-Interscoller',
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
                labelAny: ['0 - 767'],
                params: {
                  zone: '79351',
                  allow: ['mt', 'is', 'mo', 'ms']
                }
              },
              {
                bidder: 'justpremium',
                labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024',],
                params: {
                  zone: '79351',
                  allow: ['cf', 'as', 'ci', 'ca']
                }
              }
            ],
            breakpoints: {
                '1640 - 9999': [[1, 1]],
                '1025 - 1639': [[1, 1]],
                '748 - 1024': [[1, 1]],
                '375 - 747': [[1, 1]]
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
            'Publisher Purpose IDs': [1, 2, 3, 4, 5],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'Road.cc',
            'Publisher Logo': 'https://static.amp.services/logos/roadcc-logo.png',
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
            label: '1640 - 9999',
            minWidth: 1640,
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
                ],
                [
                    1,
                    1
                ]
            ]
        },
        {
            label: '1025 - 1639',
            minWidth: 1025,
            maxWidth: 1639,
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
                ],
                [
                    160,
                    600
                ],
                [
                    1,
                    1
                ]
            ]
        },
        {
            label: '748 - 1024',
            minWidth: 748,
            maxWidth: 1024,
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
                    320,
                    50
                ],
                [
                    1,
                    1
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
                ],
                [
                    1,
                    1
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
                ],
                [
                    1,
                    1
                ]
            ]
        }
    ]
};
