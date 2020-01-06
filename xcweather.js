var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: true,
    apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'StreamAMP/XCWeather',
    token: 'peOqx5JUzFCq0i1IZgHD5pSUOoCf5UnqzzR7sCg8TQOPglBdzyxqci73Cj5J9diX',
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
            path: '/15188745/XCWeather/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'XCWeather_Unit1_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348769,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64444'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014332
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '359019',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710386',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530479',
                        adSlot: 'XCWeather_Unit1_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704252
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        // {
        //     code: 'Unit2',
        //     path: '/15188745/XCWeather/Unit2',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     160,
        //                     600
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 zoneId: 1382493,
        //                 publisherSubId: 'XCWeather_Unit2_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 dmxid: 348770,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 tagid: '64445'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //         '970-9999',
        //         //         '729-969'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014333
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 siteId: '361406',
        //                 size: [
        //                     160,
        //                     600
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 unit: '540710387',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //
        //             ],
        //             params: {
        //                 publisherId: '2530480',
        //                 adSlot: 'XCWeather_Unit2_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 placementId: 15704253
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ]
        //     }
        // },
        {
            code: 'Unit3',
            path: '/15188745/XCWeather/Unit3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'XCWeather_Unit3_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348771,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64446'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014334
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361407',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710388',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530481',
                        adSlot: 'XCWeather_Unit3_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704254
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit4',
            path: '/15188745/XCWeather/Unit4',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'XCWeather_Unit4_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348772,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64447'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014335
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361408',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710389',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530482',
                        adSlot: 'XCWeather_Unit4_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704257
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '729-969': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Unit5',
            path: '/15188745/XCWeather/Unit5',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'XCWeather_Unit5_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348773,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64448'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014336
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361409',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710390',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530483',
                        adSlot: 'XCWeather_Unit5_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704272
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/15188745/XCWeather/Unit6',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            120,
                            600
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        120,
                        600
                    ]
                ],
                '729-969': [
                    [
                        120,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/15188745/XCWeather/Unit7',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'XCWeather_Unit7_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348775,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64450'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014338
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361411',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710392',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530485',
                        adSlot: 'XCWeather_Unit7_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704274
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '729-969': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        // {
        //     code: 'Unit8',
        //     path: '/15188745/XCWeather/Unit8',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     728,
        //                     90
        //                 ],
        //                 [
        //                     320,
        //                     50
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 zoneId: 1382489,
        //                 publisherSubId: 'XCWeather_Unit8_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 zoneId: 1382490,
        //                 publisherSubId: 'XCWeather_Unit8_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 dmxid: 348776,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 dmxid: 348777,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 tagid: '64451'
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 tagid: '64452'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //         '970-9999',
        //         //         '729-969',
        //         //         '469-728',
        //         //          '0-468'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014339
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 siteId: '361412',
        //                 size: [
        //                     728,
        //                     90
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 siteId: '361413',
        //                 size: [
        //                     320,
        //                     50
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 unit: '540710393',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //
        //             ],
        //             params: {
        //                 publisherId: '2530486',
        //                 adSlot: 'XCWeather_Unit8_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 publisherId: '2530487',
        //                 adSlot: 'XCWeather_Unit8_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 placementId: 15704275
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 placementId: 15704366
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '469-728': [
        //             [
        //                 320,
        //                 50
        //             ]
        //         ],
        //         '0-468': [
        //             [
        //                 320,
        //                 50
        //             ]
        //         ]
        //     }
        // },
        // {
        //     code: 'Unit9',
        //     path: '/15188745/XCWeather/Unit9',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     728,
        //                     90
        //                 ],
        //                 [
        //                     320,
        //                     50
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 zoneId: 1382489,
        //                 publisherSubId: 'XCWeather_Unit9_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 zoneId: 1382490,
        //                 publisherSubId: 'XCWeather_Unit9_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 dmxid: 348776,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 dmxid: 348779,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 tagid: '64453'
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 tagid: '64454'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //         '970-9999',
        //         //         '729-969',
        //         //         '469-728',
        //         //          '0-468'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014340
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 siteId: '361414',
        //                 size: [
        //                     728,
        //                     90
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 siteId: '361415',
        //                 size: [
        //                     320,
        //                     50
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 unit: '540710394',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 publisherId: '2530488',
        //                 adSlot: 'XCWeather_Unit9_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 publisherId: '2530489',
        //                 adSlot: 'XCWeather_Unit9_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 placementId: 15704347
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 placementId: 15704348
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '469-728': [
        //             [
        //                 728,
        //                 90
        //             ],
        //             [
        //                 320,
        //                 50
        //             ]
        //         ],
        //         '0-468': [
        //             [
        //                 320,
        //                 50
        //             ]
        //         ]
        //     }
        // },
        // {
        //     code: 'Unit10',
        //     path: '/15188745/XCWeather/Unit10',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     300,
        //                     250
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 zoneId: 1382491,
        //                 publisherSubId: 'XCWeather_Unit10_300x250'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 dmxid: 348780,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 tagid: '64455'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //          '0-468'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014341
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 siteId: '361416',
        //                 size: [
        //                     300,
        //                     250
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 unit: '540710395',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 publisherId: '2530490',
        //                 adSlot: 'XCWeather_Unit10_300x250'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 placementId: 15704349
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '0-468': [
        //             [
        //                 300,
        //                 250
        //             ]
        //         ]
        //     }
        // },
        // {
        //     code: 'Unit11',
        //     path: '/15188745/XCWeather/Unit11',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     160,
        //                     600
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 zoneId: 1382493,
        //                 publisherSubId: 'XCWeather_Unit11_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 dmxid: 348781,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 tagid: '64456'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //       '970-9999',
        //         //       '729-969'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014342
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 siteId: '361417',
        //                 size: [
        //                     160,
        //                     600
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 unit: '540710398',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 publisherId: '2530491',
        //                 adSlot: 'XCWeather_Unit11_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 placementId: 15704350
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ]
        //     }
        // }
    ],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
            'Display Persistent Consent Link': false,
            'No Option': true,
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
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'XC Weather',
            'Publisher Logo': 'https://static.amp.services/logos/xcw-logo%20(1).png'
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
            label: '970-9999',
            minWidth: 970,
            maxWidth: 9999,
            sizesSupported: [
                [
                    160,
                    600
                ],
                [
                    728,
                    90
                ]
            ]
        },
        {
            label: '729-969',
            minWidth: 729,
            maxWidth: 969,
            sizesSupported: [
                [
                    160,
                    600
                ],
                [
                    728,
                    90
                ]
            ]
        },
        {
            label: '469-728',
            minWidth: 469,
            maxWidth: 728,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    320,
                    50
                ]
            ]
        },
        {
            label: '0-468',
            minWidth: 0,
            maxWidth: 468,
            sizesSupported: [
                [
                    320,
                    50
                ]
            ]
        }
    ]
}
var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: true,
    apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: false,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'StreamAMP/XCWeather',
    token: 'peOqx5JUzFCq0i1IZgHD5pSUOoCf5UnqzzR7sCg8TQOPglBdzyxqci73Cj5J9diX',
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
            path: '/15188745/XCWeather/Unit1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'XCWeather_Unit1_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348769,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64444'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014332
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '359019',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710386',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530479',
                        adSlot: 'XCWeather_Unit1_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704252
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        // {
        //     code: 'Unit2',
        //     path: '/15188745/XCWeather/Unit2',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     160,
        //                     600
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 zoneId: 1382493,
        //                 publisherSubId: 'XCWeather_Unit2_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 dmxid: 348770,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 tagid: '64445'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //         '970-9999',
        //         //         '729-969'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014333
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 siteId: '361406',
        //                 size: [
        //                     160,
        //                     600
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 unit: '540710387',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //
        //             ],
        //             params: {
        //                 publisherId: '2530480',
        //                 adSlot: 'XCWeather_Unit2_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 placementId: 15704253
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ]
        //     }
        // },
        {
            code: 'Unit3',
            path: '/15188745/XCWeather/Unit3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'XCWeather_Unit3_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348771,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64446'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014334
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361407',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710388',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530481',
                        adSlot: 'XCWeather_Unit3_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704254
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit4',
            path: '/15188745/XCWeather/Unit4',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'XCWeather_Unit4_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348772,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64447'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014335
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361408',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710389',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530482',
                        adSlot: 'XCWeather_Unit4_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704257
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '729-969': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        {
            code: 'Unit5',
            path: '/15188745/XCWeather/Unit5',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            160,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'XCWeather_Unit5_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348773,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64448'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014336
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361409',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710390',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530483',
                        adSlot: 'XCWeather_Unit5_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704272
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        160,
                        600
                    ]
                ],
                '729-969': [
                    [
                        160,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit6',
            path: '/15188745/XCWeather/Unit6',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            120,
                            600
                        ]
                    ]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '970-9999': [
                    [
                        120,
                        600
                    ]
                ],
                '729-969': [
                    [
                        120,
                        600
                    ]
                ]
            }
        },
        {
            code: 'Unit7',
            path: '/15188745/XCWeather/Unit7',
            mediaTypes: {
                banner: {
                    sizes: [
                        [
                            728,
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
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'XCWeather_Unit7_728x90'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        dmxid: 348775,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        tagid: '64450'
                    }
                },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: [
                //         '970-9999',
                //         '729-969'
                //     ],
                //     params: {
                //         placementId: 22014338
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        siteId: '361411',
                        size: [
                            728,
                            90
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        unit: '540710392',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '970-9999',
                        '729-969'

                    ],
                    params: {
                        publisherId: '2530485',
                        adSlot: 'XCWeather_Unit7_728x90'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '970-9999',
                        '729-969'
                    ],
                    params: {
                        placementId: 15704274
                    }
                }
            ],
            breakpoints: {
                '970-9999': [
                    [
                        728,
                        90
                    ]
                ],
                '729-969': [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        // {
        //     code: 'Unit8',
        //     path: '/15188745/XCWeather/Unit8',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     728,
        //                     90
        //                 ],
        //                 [
        //                     320,
        //                     50
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 zoneId: 1382489,
        //                 publisherSubId: 'XCWeather_Unit8_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 zoneId: 1382490,
        //                 publisherSubId: 'XCWeather_Unit8_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 dmxid: 348776,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 dmxid: 348777,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 tagid: '64451'
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 tagid: '64452'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //         '970-9999',
        //         //         '729-969',
        //         //         '469-728',
        //         //          '0-468'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014339
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 siteId: '361412',
        //                 size: [
        //                     728,
        //                     90
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 siteId: '361413',
        //                 size: [
        //                     320,
        //                     50
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 unit: '540710393',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //
        //             ],
        //             params: {
        //                 publisherId: '2530486',
        //                 adSlot: 'XCWeather_Unit8_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 publisherId: '2530487',
        //                 adSlot: 'XCWeather_Unit8_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 placementId: 15704275
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 placementId: 15704366
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '469-728': [
        //             [
        //                 320,
        //                 50
        //             ]
        //         ],
        //         '0-468': [
        //             [
        //                 320,
        //                 50
        //             ]
        //         ]
        //     }
        // },
        // {
        //     code: 'Unit9',
        //     path: '/15188745/XCWeather/Unit9',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     728,
        //                     90
        //                 ],
        //                 [
        //                     320,
        //                     50
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 zoneId: 1382489,
        //                 publisherSubId: 'XCWeather_Unit9_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 zoneId: 1382490,
        //                 publisherSubId: 'XCWeather_Unit9_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 dmxid: 348776,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 dmxid: 348779,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 tagid: '64453'
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 tagid: '64454'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //         '970-9999',
        //         //         '729-969',
        //         //         '469-728',
        //         //          '0-468'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014340
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 siteId: '361414',
        //                 size: [
        //                     728,
        //                     90
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 siteId: '361415',
        //                 size: [
        //                     320,
        //                     50
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 unit: '540710394',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 publisherId: '2530488',
        //                 adSlot: 'XCWeather_Unit9_728x90'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 publisherId: '2530489',
        //                 adSlot: 'XCWeather_Unit9_320x50'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969',
        //                 '469-728'
        //             ],
        //             params: {
        //                 placementId: 15704347
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '469-728',
        //                 '0-468'
        //             ],
        //             params: {
        //                 placementId: 15704348
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 728,
        //                 90
        //             ]
        //         ],
        //         '469-728': [
        //             [
        //                 728,
        //                 90
        //             ],
        //             [
        //                 320,
        //                 50
        //             ]
        //         ],
        //         '0-468': [
        //             [
        //                 320,
        //                 50
        //             ]
        //         ]
        //     }
        // },
        // {
        //     code: 'Unit10',
        //     path: '/15188745/XCWeather/Unit10',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     300,
        //                     250
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 zoneId: 1382491,
        //                 publisherSubId: 'XCWeather_Unit10_300x250'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 dmxid: 348780,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 tagid: '64455'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //          '0-468'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014341
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 siteId: '361416',
        //                 size: [
        //                     300,
        //                     250
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 unit: '540710395',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 publisherId: '2530490',
        //                 adSlot: 'XCWeather_Unit10_300x250'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '0-468'
        //             ],
        //             params: {
        //                 placementId: 15704349
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '0-468': [
        //             [
        //                 300,
        //                 250
        //             ]
        //         ]
        //     }
        // },
        // {
        //     code: 'Unit11',
        //     path: '/15188745/XCWeather/Unit11',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [
        //                     160,
        //                     600
        //                 ]
        //             ]
        //         }
        //     },
        //     isSticky: false,
        //     safeFrame: false,
        //     outOfPage: false,
        //     bids: [
        //         {
        //             bidder: 'criteo',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 zoneId: 1382493,
        //                 publisherSubId: 'XCWeather_Unit11_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'districtmDMX',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 dmxid: 348781,
        //                 memberid: 100615
        //             }
        //         },
        //         {
        //             bidder: 'emx_digital',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 tagid: '64456'
        //             }
        //         },
        //         // {
        //         //     bidder: 'improvedigital',
        //         //     labelAny: [
        //         //       '970-9999',
        //         //       '729-969'
        //         //     ],
        //         //     params: {
        //         //         placementId: 22014342
        //         //     }
        //         // },
        //         {
        //             bidder: 'ix',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 siteId: '361417',
        //                 size: [
        //                     160,
        //                     600
        //                 ]
        //             }
        //         },
        //         {
        //             bidder: 'openx',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 unit: '540710398',
        //                 delDomain: 'streamamp-d.openx.net'
        //             }
        //         },
        //         {
        //             bidder: 'pubmatic',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 publisherId: '2530491',
        //                 adSlot: 'XCWeather_Unit11_160x600'
        //             }
        //         },
        //         {
        //             bidder: 'streamamp',
        //             labelAny: [
        //                 '970-9999',
        //                 '729-969'
        //             ],
        //             params: {
        //                 placementId: 15704350
        //             }
        //         }
        //     ],
        //     breakpoints: {
        //         '970-9999': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ],
        //         '729-969': [
        //             [
        //                 160,
        //                 600
        //             ]
        //         ]
        //     }
        // }
    ],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
            'Display Persistent Consent Link': false,
            'No Option': true,
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
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'XC Weather',
            'Publisher Logo': 'https://static.amp.services/logos/xcw-logo%20(1).png'
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
            label: '970-9999',
            minWidth: 970,
            maxWidth: 9999,
            sizesSupported: [
                [
                    160,
                    600
                ],
                [
                    728,
                    90
                ]
            ]
        },
        {
            label: '729-969',
            minWidth: 729,
            maxWidth: 969,
            sizesSupported: [
                [
                    160,
                    600
                ],
                [
                    728,
                    90
                ]
            ]
        },
        {
            label: '469-728',
            minWidth: 469,
            maxWidth: 728,
            sizesSupported: [
                [
                    728,
                    90
                ],
                [
                    320,
                    50
                ]
            ]
        },
        {
            label: '0-468',
            minWidth: 0,
            maxWidth: 468,
            sizesSupported: [
                [
                    320,
                    50
                ]
            ]
        }
    ]
}
