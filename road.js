var streamampConfig = {
    levelTargeting: true,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    adUnitsToRefresh: ["SA-Unit8", "SA-Unit4", "SA-Unit5", "SA-Unit11", "SA-Unit12", "SA-Unit13", "SA-Unit15", "SA-Unit16", "SA-Unit17"],
    minRefreshTime: 30,
    maxRefreshTime: 45,
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
            code: 'SA-Unit1',
            path: '/269479563/Road.cc/SA-Unit1',
            mediaTypes: {
                banner: {
                    sizes: [[970, 250], [728, 90], [320, 50], [970, 90], [468, 60]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'FA_Road_Unit1_728x90'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['0 - 767'],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'FA_Road_Unit1_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 375137,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41023'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024'],
                //     params: {
                //         placementId: 1186860
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639'],
                //     params: {
                //         placementId: 1186860
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186860
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024'],
                    params: {
                        siteId: '306879',
                        size: [728, 90]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        siteId: '261312',
                        size: [970, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306880',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929955',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341643',
                        adSlot: 'rcc_road_1_728x90@728x90'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341641',
                        adSlot: 'rcc_road_1_970x250@970x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341644',
                        adSlot: 'rcc_road_1_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024'],
                    params: {
                        placementId: 13074988
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 13074985
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13074991
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024'],
                    params: {
                        placementId: 16806181
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 16806173
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806182
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[970, 250], [728, 90], [970, 90]],
                '1025 - 1639': [[970, 250], [728, 90], [970, 90]],
                '768 - 1024': [[728, 90], [468, 60]],
                '0 - 767': [[320, 50]]
            }
        },
        {
            code: 'SA-Unit2',
            path: '/269479563/Road.cc/SA-Unit2',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit2_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202653,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41024'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186861
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639'],
                //     params: {
                //         placementId: 1186861
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186861
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306883',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        siteId: '306881',
                        size: [300, 600]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306882',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929956',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341645',
                        adSlot: 'rcc_road_2_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341647',
                        adSlot: 'rcc_road_2_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341646',
                        adSlot: 'rcc_road_2_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13074992
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 13074994
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13074993
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806185
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 16806189
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806186
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250], [300, 600]],
                '1025 - 1639': [[300, 250], [300, 600]],
                '768 - 1024': [[300, 250], [320, 50]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit3',
            path: '/269479563/Road.cc/SA-Unit3',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit3_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202654,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41025'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024'],
                //     params: {
                //         placementId: 1186862
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186862
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186862
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        siteId: '306891',
                        size: [300, 600]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306893',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306892',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929957',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341651',
                        adSlot: 'rcc_road_3_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341649',
                        adSlot: 'rcc_road_3_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341650',
                        adSlot: 'rcc_road_3_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 13075000
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13074996
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13074999
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 16806196
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806190
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806193
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250], [300, 600]],
                '1025 - 1639': [[300, 250], [300, 600]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[320, 50], [300, 250]]
            }
        },
        {
            code: 'SA-Unit4',
            path: '/269479563/Road.cc/SA-Unit4',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit4_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202655,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41026'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186867
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186867
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306890',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306889',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929959',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341652',
                        adSlot: 'rcc_road_4_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341654',
                        adSlot: 'rcc_road_4_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075005
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13075007
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806198
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806199
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit5',
            path: '/269479563/Road.cc/SA-Unit5',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit5_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202656,
                        memberid: 100615
                    }
                }, ,
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41027'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186868
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186868
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306888',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306887',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929960',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341661',
                        adSlot: 'rcc_road_5_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341664',
                        adSlot: 'rcc_road_5_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075014
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13075019
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806200
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806201
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit6',
            path: '/269479563/Road.cc/SA-Unit6',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit6_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202657,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41028'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186869
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186869
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306886',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306885',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929961',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341666',
                        adSlot: 'rcc_road_6_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341667',
                        adSlot: 'rcc_road_6_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075024
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13075025
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806202
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806204
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit7',
            path: '/269479563/Road.cc/SA-Unit7',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit7_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202658,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41029'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186870
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186870
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306884',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306905',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929962',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341668',
                        adSlot: 'rcc_road_7_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341669',
                        adSlot: 'rcc_road_7_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075026
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13075027
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806207
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806209
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit8',
            path: '/269479563/Road.cc/SA-Unit8',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit8_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202659,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41030'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186871
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024'],
                //     params: {
                //         placementId: 1186871
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186871
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306904',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        siteId: '306900',
                        size: [300, 600]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306901',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929963',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341671',
                        adSlot: 'rcc_road_8_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341673',
                        adSlot: 'rcc_road_8_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1521635',
                        adSlot: 'rcc_road_8_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075028
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 13075029
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13753319
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806210
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 16806219
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806217
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250], [300, 600]],
                '1025 - 1639': [[300, 250], [300, 600]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit9',
            path: '/269479563/Road.cc/SA-Unit9',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit9_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202660,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41031'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024'],
                //     params: {
                //         placementId: 1186872
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186872
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186872
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        siteId: '306897',
                        size: [300, 600]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306899',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306898',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929964',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341675',
                        adSlot: 'rcc_road_9_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341674',
                        adSlot: 'rcc_road_9_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1521637',
                        adSlot: 'rcc_road_9_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 13075032
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075031
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13753368
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 16806223
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806220
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806221
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250], [300, 600]],
                '1025 - 1639': [[300, 250], [300, 600]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit10',
            path: '/269479563/Road.cc/SA-Unit10',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit10_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202661,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '41032'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024'],
                //     params: {
                //         placementId: 1186873
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1186873
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186873
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        siteId: '306894',
                        size: [300, 600]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '306896',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306895',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '539929965',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341677',
                        adSlot: 'rcc_road_10_300x600@300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1341676',
                        adSlot: 'rcc_road_10_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1521639',
                        adSlot: 'rcc_road_10_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 13075034
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 13075033
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13753388
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639'],
                    params: {
                        placementId: 16806226
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806224
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806225
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250], [300, 600]],
                '1025 - 1639': [[300, 250], [300, 600]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit11',
            path: '/269479563/Road.cc/SA-Unit11',
            mediaTypes: {
                banner: {
                    sizes: [[300, 600], [300, 250], [160, 600], [300, 1050], [120, 600]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'FA_Road_Unit11_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit11_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'FA_Road_Unit11_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 202662,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        tagid: '89979'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        tagid: '89978'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '58380'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        siteId: '436647',
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
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        siteId: '436648',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '306917',
                        size: [
                            160,
                            600
                        ]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        unit: '540126338',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2515292',
                        adSlot: 'rcc_road_11_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2515303',
                        adSlot: 'rcc_road_11_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1448534',
                        adSlot: 'rcc_road_11_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        placementId: 17981924
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17981925
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 13463344
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 16806227
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 600], [300, 250], [300, 1050]],
                '1025 - 1639': [[160, 600], [120, 600]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit12',
            path: '/269479563/Road.cc/SA-Unit12',
            mediaTypes: {
                banner: {
                    sizes: [[300, 600], [300, 250], [160, 600], [300, 1050], [120, 600]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'FA_Road_Unit12_300x600'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit12_300x250'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        zoneId: 1382493,
                        publisherSubId: 'FA_Road_Unit12_160x600'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        dmxid: 202663,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        tagid: '89981'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        tagid: '89980'
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        tagid: '58382'
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        siteId: '436649',
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
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        siteId: '436650',
                        size: [
                            300,
                            250
                        ]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        siteId: '306914',
                        size: [
                            160,
                            600
                        ]
                    }
                },

                {
                    bidder: 'openx',
                    labelAny: [
                        '1640 - 9999',
                        '1025 - 1639',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        unit: '540126341',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2515324',
                        adSlot: 'rcc_road_12_300x600'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '2515345',
                        adSlot: 'rcc_road_12_300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1448536',
                        adSlot: 'rcc_road_12_160x600'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999'
                    ],
                    params: {
                        placementId: 17981926
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1640 - 9999',
                        '768 - 1024',
                        '0 - 767'
                    ],
                    params: {
                        placementId: 17981927
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 13463346
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: [
                        '1025 - 1639'
                    ],
                    params: {
                        placementId: 16806228
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 600], [300, 250], [300, 1050]],
                '1025 - 1639': [[160, 600], [120, 600]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit13',
            path: '/269479563/Road.cc/SA-Unit13',
            mediaTypes: {
                banner: {
                    sizes: [[320, 50]]
                }
            },
            isSticky: true,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['0 - 767'],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'FA_Road_Unit13_320x50'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['0 - 767'],
                    params: {
                        dmxid: 202664,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['0 - 767'],
                    params: {
                        tagid: '58385'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1186876
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '306910',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['0 - 767'],
                    params: {
                        unit: '540126346',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1448538',
                        adSlot: 'rcc_road_13_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 13463348
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806229
                    }
                }
            ],
            breakpoints: {
                '0 - 767': [[320, 50]]
            }
        },
        {
            code: '1x1-interscroller',
            path: '/269479563/Road.cc/1x1-interscroller',
            mediaTypes: {
                banner: {
                    sizes: [[1, 1]]
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
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024'],
                    params: {
                        zone: '79351',
                        allow: ['cf', 'as', 'ci']
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[1, 1]],
                '1025 - 1639': [[1, 1]],
                '768 - 1024': [[1, 1]],
                '0 - 767': [[1, 1]]
            }
        },
        {
            code: 'SA-Unit14',
            path: '/269479563/Road.cc/SA-Unit14',
            mediaTypes: {
                banner: {
                    sizes: [[468, 60]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '768 - 1024': [[468, 60]]
            }
        },
        {
            code: 'SA-Unit15',
            path: '/269479563/Road.cc/SA-Unit15',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit15_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202666,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '58377'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1226147
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1226147
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '320241',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '320242',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '540457062',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1711362',
                        adSlot: 'rcc_road_Unit15_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1711363',
                        adSlot: 'rcc_road_Unit15_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 14387397
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 14387398
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806230
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806231
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit16',
            path: '/269479563/Road.cc/SA-Unit16',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit16_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202667,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '58378'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1226149
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1226149
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '320245',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '320243',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '540457063',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1711365',
                        adSlot: 'rcc_road_Unit16_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1711368',
                        adSlot: 'rcc_road_Unit16_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 14387400
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 14387402
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806233
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806234
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Unit17',
            path: '/269479563/Road.cc/SA-Unit17',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'criteo',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'FA_Road_Unit17_300x250'
                    }
                },
                {
                    bidder: 'districtmDMX',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        dmxid: 202668,
                        memberid: 100615
                    }
                },
                {
                    bidder: 'emx_digital',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        tagid: '58379'
                    }
                },
                //     {
                //     bidder: 'improvedigital',
                //     labelAny: ['1640 - 9999', 1025 - 1639', '768 - 1024', '0 - 767'],
                //     params: {
                //         placementId: 1226154
                //     }
                // },
                // {
                //     bidder: 'improvedigital',
                //     labelAny: ['0 - 767'],
                //     params: {
                //         placementId: 1226154
                //     }
                // },
                {
                    bidder: 'ix',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        siteId: '320246',
                        size: [300, 250]
                    }
                },
                {
                    bidder: 'ix',
                    labelAny: ['0 - 767'],
                    params: {
                        siteId: '320248',
                        size: [320, 50]
                    }
                },
                {
                    bidder: 'openx',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        unit: '540457064',
                        delDomain: 'streamamp-d.openx.net'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1711370',
                        adSlot: 'rcc_road_Unit17_300x250@300x250'
                    }
                },
                {
                    bidder: 'pubmatic',
                    labelAny: ['0 - 767'],
                    params: {
                        publisherId: '127864',
                        pmzoneid: '1711373',
                        adSlot: 'rcc_road_Unit17_320x50@320x50'
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 14387404
                    }
                },
                {
                    bidder: 'streamamp',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 14387405
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['1640 - 9999', '1025 - 1639', '768 - 1024', '0 - 767'],
                    params: {
                        placementId: 16806236
                    }
                },
                {
                    bidder: 'totaljobs',
                    labelAny: ['0 - 767'],
                    params: {
                        placementId: 16806237
                    }
                }
            ],
            breakpoints: {
                '1640 - 9999': [[300, 250]],
                '1025 - 1639': [[300, 250]],
                '768 - 1024': [[300, 250]],
                '0 - 767': [[300, 250], [320, 50]]
            }
        },
        {
            code: 'SA-Skin',
            path: '/269479563/Road.cc/SA-Skin',
            mediaTypes: {
                banner: {
                    sizes: [[1, 1]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [],
            breakpoints: {
                '1640 - 9999': [[1, 1]],
                '1025 - 1639': [[1, 1]],
                '768 - 1024': [[1, 1]],
                '0 - 767': [[1, 1]]
            }
        }
    ],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
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
            sizesSupported: [[970, 250], [728, 90], [300, 250], [300, 600], [1, 1]]
        }, {
            label: '1025 - 1639',
            minWidth: 1025,
            maxWidth: 1639,
            sizesSupported: [[970, 250], [728, 90], [300, 250], [300, 600], [160, 600], [1, 1]]
        },
        {
            label: '768 - 1024',
            minWidth: 768,
            maxWidth: 1024,
            sizesSupported: [[728, 90], [300, 250], [320, 50], [300, 600], [1, 1]]
        },
        {
            label: '0 - 767',
            minWidth: 0,
            maxWidth: 767,
            sizesSupported: [[320, 50], [300, 250], [1, 1]]
        }
    ]
};
